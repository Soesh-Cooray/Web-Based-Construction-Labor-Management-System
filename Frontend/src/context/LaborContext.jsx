/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_LABORERS,
  INITIAL_SITES,
  INITIAL_ATTENDANCE,
  INITIAL_PAYMENTS
} from '../utils/mockData';

const LaborContext = createContext();

export const LaborProvider = ({ children }) => {
  // 1. Laborers state
  const [laborers, setLaborers] = useState(() => {
    const saved = localStorage.getItem('buildforce_laborers_lkr');
    return saved ? JSON.parse(saved) : INITIAL_LABORERS;
  });

  // 2. Sites state
  const [sites, setSites] = useState(() => {
    const saved = localStorage.getItem('buildforce_sites_lkr');
    return saved ? JSON.parse(saved) : INITIAL_SITES;
  });

  // 3. Attendance state
  const [attendance, setAttendance] = useState(() => {
    const saved = localStorage.getItem('buildforce_attendance_lkr');
    return saved ? JSON.parse(saved) : INITIAL_ATTENDANCE;
  });

  // 4. Payments state
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem('buildforce_payments_lkr');
    return saved ? JSON.parse(saved) : INITIAL_PAYMENTS;
  });

  // Toasts
  const [toasts, setToasts] = useState([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('buildforce_laborers_lkr', JSON.stringify(laborers));
  }, [laborers]);

  useEffect(() => {
    localStorage.setItem('buildforce_sites_lkr', JSON.stringify(sites));
  }, [sites]);

  useEffect(() => {
    localStorage.setItem('buildforce_attendance_lkr', JSON.stringify(attendance));
  }, [attendance]);

  useEffect(() => {
    localStorage.setItem('buildforce_payments_lkr', JSON.stringify(payments));
  }, [payments]);

  // Toast dispatch
  const showToast = (message, type = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // --- Laborer Actions ---
  const addLaborer = (laborerData) => {
    const newId = `LAB-${Math.floor(100 + Math.random() * 900)}`;
    const newLaborer = {
      id: newId,
      status: 'Active',
      joinDate: new Date().toISOString().split('T')[0],
      ...laborerData,
      hourlyRate: parseFloat(laborerData.hourlyRate) || 12.00
    };
    setLaborers((prev) => [newLaborer, ...prev]);
    showToast(`Laborer "${newLaborer.name}" successfully registered as ${newLaborer.role}.`);
    return newLaborer;
  };

  const updateLaborer = (id, updatedFields) => {
    setLaborers((prev) =>
      prev.map((lab) =>
        lab.id === id
          ? {
              ...lab,
              ...updatedFields,
              hourlyRate: parseFloat(updatedFields.hourlyRate !== undefined ? updatedFields.hourlyRate : lab.hourlyRate)
            }
          : lab
      )
    );
    showToast(`Laborer profile updated successfully.`);
  };

  const deleteLaborer = (id) => {
    const lab = laborers.find((l) => l.id === id);
    setLaborers((prev) => prev.filter((l) => l.id !== id));
    showToast(`Laborer ${lab ? lab.name : id} removed from directory.`, 'info');
  };

  // --- Site Actions ---
  const addSite = (siteData) => {
    const newId = `SITE-${String(sites.length + 1).padStart(2, '0')}`;
    const newSite = {
      id: newId,
      status: siteData.status || 'Active',
      ...siteData,
      budget: parseFloat(siteData.budget) || 0
    };
    setSites((prev) => [newSite, ...prev]);
    showToast(`Construction site "${newSite.name}" registered successfully.`);
    return newSite;
  };

  const updateSite = (id, updatedFields) => {
    setSites((prev) =>
      prev.map((s) =>
        s.id === id
          ? {
              ...s,
              ...updatedFields,
              budget: parseFloat(updatedFields.budget !== undefined ? updatedFields.budget : s.budget)
            }
          : s
      )
    );
    showToast(`Site project details updated.`);
  };

  const deleteSite = (id) => {
    setSites((prev) => prev.filter((s) => s.id !== id));
    showToast(`Project site record deleted.`, 'info');
  };

  const allocateLaborersToSite = (siteId, laborerIds) => {
    setLaborers((prev) =>
      prev.map((lab) => {
        if (laborerIds.includes(lab.id)) {
          return { ...lab, assignedSiteId: siteId };
        } else if (lab.assignedSiteId === siteId) {
          // Unassigned
          return { ...lab, assignedSiteId: '' };
        }
        return lab;
      })
    );
    showToast(`Site workforce allocation updated.`);
  };

  // --- Attendance Actions ---
  const recordAttendance = (records) => {
    const recordList = Array.isArray(records) ? records : [records];
    setAttendance((prev) => {
      // Replace existing records for same laborer and date, otherwise append
      let updated = [...prev];
      recordList.forEach((rec) => {
        const index = updated.findIndex(
          (item) => item.laborerId === rec.laborerId && item.date === rec.date
        );
        const recordWithId = {
          ...rec,
          id: rec.id || `ATT-${rec.date.replace(/-/g, '')}-${rec.laborerId.replace('LAB-', '')}`,
          regularHours: parseFloat(rec.regularHours) || 0,
          overtimeHours: parseFloat(rec.overtimeHours) || 0
        };
        if (index >= 0) {
          updated[index] = recordWithId;
        } else {
          updated.unshift(recordWithId);
        }
      });
      return updated;
    });
    showToast(`Daily attendance saved for ${recordList.length} worker(s).`);
  };

  const updateAttendanceRecord = (id, updatedFields) => {
    setAttendance((prev) =>
      prev.map((rec) =>
        rec.id === id
          ? {
              ...rec,
              ...updatedFields,
              regularHours: parseFloat(updatedFields.regularHours !== undefined ? updatedFields.regularHours : rec.regularHours),
              overtimeHours: parseFloat(updatedFields.overtimeHours !== undefined ? updatedFields.overtimeHours : rec.overtimeHours)
            }
          : rec
      )
    );
    showToast(`Attendance record updated.`);
  };

  const deleteAttendanceRecord = (id) => {
    setAttendance((prev) => prev.filter((rec) => rec.id !== id));
    showToast(`Attendance record removed.`, 'info');
  };

  // --- Payment Actions ---
  const recordPayment = (paymentData) => {
    const newId = `PAY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const newPayment = {
      id: newId,
      ...paymentData,
      amount: parseFloat(paymentData.amount) || 0,
      date: paymentData.date || new Date().toISOString().split('T')[0]
    };
    setPayments((prev) => [newPayment, ...prev]);
    showToast(`Payment of Rs. ${newPayment.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })} recorded successfully.`);
    return newPayment;
  };

  // Helper to compute calculated wages per laborer
  const getCalculatedWages = (filterDateRange = null) => {
    return laborers.map((laborer) => {
      // Filter laborer's attendance records
      const laborerAttendance = attendance.filter((rec) => {
        if (rec.laborerId !== laborer.id) return false;
        if (filterDateRange) {
          if (filterDateRange.startDate && rec.date < filterDateRange.startDate) return false;
          if (filterDateRange.endDate && rec.date > filterDateRange.endDate) return false;
        }
        return true;
      });

      const totalRegularHours = laborerAttendance.reduce((acc, rec) => acc + (rec.regularHours || 0), 0);
      const totalOvertimeHours = laborerAttendance.reduce((acc, rec) => acc + (rec.overtimeHours || 0), 0);
      const daysWorked = laborerAttendance.filter((rec) => rec.status === 'Present' || rec.status === 'Half-Day').length;

      const hourlyRate = laborer.hourlyRate || 1200.00;
      const overtimeRate = hourlyRate * 1.5; // Standard 1.5x OT multiplier

      const regularWages = totalRegularHours * hourlyRate;
      const overtimeWages = totalOvertimeHours * overtimeRate;
      const grossWages = regularWages + overtimeWages;

      // Filter laborer's payments
      const laborerPayments = payments.filter((p) => p.laborerId === laborer.id);
      const totalPaid = laborerPayments.reduce((acc, p) => acc + (p.amount || 0), 0);
      const balanceDue = Math.max(0, grossWages - totalPaid);

      let paymentStatus = 'Pending';
      if (totalPaid >= grossWages && grossWages > 0) {
        paymentStatus = 'Paid';
      } else if (totalPaid > 0 && balanceDue > 0) {
        paymentStatus = 'Partial';
      }

      const assignedSite = sites.find((s) => s.id === laborer.assignedSiteId);

      return {
        laborer,
        assignedSite,
        daysWorked,
        totalRegularHours,
        totalOvertimeHours,
        hourlyRate,
        overtimeRate,
        regularWages,
        overtimeWages,
        grossWages,
        totalPaid,
        balanceDue,
        paymentStatus,
        attendanceCount: laborerAttendance.length
      };
    });
  };

  // Reset to demo data
  const resetDemoData = () => {
    setLaborers(INITIAL_LABORERS);
    setSites(INITIAL_SITES);
    setAttendance(INITIAL_ATTENDANCE);
    setPayments(INITIAL_PAYMENTS);
    localStorage.removeItem('buildforce_laborers_lkr');
    localStorage.removeItem('buildforce_sites_lkr');
    localStorage.removeItem('buildforce_attendance_lkr');
    localStorage.removeItem('buildforce_payments_lkr');
    localStorage.removeItem('buildforce_laborers');
    localStorage.removeItem('buildforce_sites');
    localStorage.removeItem('buildforce_attendance');
    localStorage.removeItem('buildforce_payments');
    showToast('Demo data restored to default state (Rs. LKR).', 'info');
  };

  return (
    <LaborContext.Provider
      value={{
        laborers,
        sites,
        attendance,
        payments,
        toasts,
        showToast,
        removeToast,
        addLaborer,
        updateLaborer,
        deleteLaborer,
        addSite,
        updateSite,
        deleteSite,
        allocateLaborersToSite,
        recordAttendance,
        updateAttendanceRecord,
        deleteAttendanceRecord,
        recordPayment,
        getCalculatedWages,
        resetDemoData
      }}
    >
      {children}
    </LaborContext.Provider>
  );
};

export const useLabor = () => {
  const context = useContext(LaborContext);
  if (!context) {
    throw new Error('useLabor must be used within a LaborProvider');
  }
  return context;
};
