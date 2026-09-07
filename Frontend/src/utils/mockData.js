// Mock Data & Seed Utility for Construction Labor Management System (Currency: Rs. LKR)

export const INITIAL_LABORERS = [
  {
    id: 'LAB-101',
    name: 'Sunimal Perera',
    nic: '198812345678',
    phone: '+94 77 123 4567',
    email: 'sunimal.p@buildforce.lk',
    address: '42 Galle Rd, Colombo 03',
    emergencyContact: '+94 71 888 9999 (Wife)',
    role: 'Site Supervisor',
    skillLevel: 'Master / Supervisor',
    hourlyRate: 1850.00,
    status: 'Active',
    assignedSiteId: 'SITE-01',
    joinDate: '2023-01-15'
  },
  {
    id: 'LAB-102',
    name: 'Kusal Mendis',
    nic: '199245678901',
    phone: '+94 76 234 5678',
    email: 'kusal.m@gmail.com',
    address: '15 Temple Ln, Negombo',
    emergencyContact: '+94 70 777 6666 (Brother)',
    role: 'Master Mason',
    skillLevel: 'Skilled Craftsman',
    hourlyRate: 1400.00,
    status: 'Active',
    assignedSiteId: 'SITE-01',
    joinDate: '2023-03-10'
  },
  {
    id: 'LAB-103',
    name: 'Chaminda Wickrama',
    nic: '198533221100',
    phone: '+94 71 345 6789',
    email: 'chaminda.w@buildforce.lk',
    address: '88 High Level Rd, Nugegoda',
    emergencyContact: '+94 72 333 4444 (Father)',
    role: 'Senior Electrician',
    skillLevel: 'Certified Electrician',
    hourlyRate: 1600.00,
    status: 'Active',
    assignedSiteId: 'SITE-02',
    joinDate: '2023-05-20'
  },
  {
    id: 'LAB-104',
    name: 'Dilshan Fernando',
    nic: '199587654321',
    phone: '+94 75 456 7890',
    email: 'dilshan.f@gmail.com',
    address: '102 Kandy Rd, Kelaniya',
    emergencyContact: '+94 77 555 1234 (Mother)',
    role: 'Structural Carpenter',
    skillLevel: 'Skilled Craftsman',
    hourlyRate: 1350.00,
    status: 'Active',
    assignedSiteId: 'SITE-01',
    joinDate: '2023-08-01'
  },
  {
    id: 'LAB-105',
    name: 'Nuwan Pradeep',
    nic: '199011223344',
    phone: '+94 78 567 8901',
    email: 'nuwan.p@gmail.com',
    address: '24 Beach Rd, Moratuwa',
    emergencyContact: '+94 76 444 8888 (Uncle)',
    role: 'Steel Fixer & Welder',
    skillLevel: 'Certified Welder',
    hourlyRate: 1500.00,
    status: 'Active',
    assignedSiteId: 'SITE-02',
    joinDate: '2023-11-12'
  },
  {
    id: 'LAB-106',
    name: 'Asela Gunaratne',
    nic: '199399887766',
    phone: '+94 72 678 9012',
    email: 'asela.g@buildforce.lk',
    address: '67 Station Rd, Gampaha',
    emergencyContact: '+94 71 222 7777 (Wife)',
    role: 'Heavy Equipment Operator',
    skillLevel: 'Licensed Heavy Operator',
    hourlyRate: 1750.00,
    status: 'Active',
    assignedSiteId: 'SITE-03',
    joinDate: '2024-02-05'
  },
  {
    id: 'LAB-107',
    name: 'Roshan Silva',
    nic: '199733445566',
    phone: '+94 70 789 0123',
    email: 'roshan.s@gmail.com',
    address: '19 Old Rd, Panadura',
    emergencyContact: '+94 78 111 5555 (Sister)',
    role: 'Plumber',
    skillLevel: 'Skilled Plumber',
    hourlyRate: 1300.00,
    status: 'Active',
    assignedSiteId: 'SITE-01',
    joinDate: '2024-04-18'
  },
  {
    id: 'LAB-108',
    name: 'Tharindu Bandara',
    nic: '199912344321',
    phone: '+94 74 890 1234',
    email: 'tharindu.b@gmail.com',
    address: '33 Kurunegala Rd, Mirigama',
    emergencyContact: '+94 75 999 0000 (Father)',
    role: 'General Laborer',
    skillLevel: 'Apprentice',
    hourlyRate: 1050.00,
    status: 'Active',
    assignedSiteId: 'SITE-02',
    joinDate: '2024-06-01'
  },
  {
    id: 'LAB-109',
    name: 'Malinda Pushpakumara',
    nic: '199177889900',
    phone: '+94 77 901 2345',
    email: 'malinda.p@gmail.com',
    address: '54 Baseline Rd, Dematagoda',
    emergencyContact: '+94 76 333 9999 (Wife)',
    role: 'Commercial Painter',
    skillLevel: 'Skilled Craftsman',
    hourlyRate: 1250.00,
    status: 'Active',
    assignedSiteId: 'SITE-03',
    joinDate: '2024-07-15'
  },
  {
    id: 'LAB-110',
    name: 'Kasun Rajitha',
    nic: '199466554433',
    phone: '+94 71 876 5432',
    email: 'kasun.r@gmail.com',
    address: '12 Temple St, Kottawa',
    emergencyContact: '+94 77 111 2222 (Brother)',
    role: 'General Laborer',
    skillLevel: 'Apprentice',
    hourlyRate: 1050.00,
    status: 'Active',
    assignedSiteId: 'SITE-03',
    joinDate: '2024-08-20'
  }
];

export const INITIAL_SITES = [
  {
    id: 'SITE-01',
    name: 'Metro Rail Link Extension Phase II',
    code: 'PRJ-MRT-2026',
    location: 'Central Rail Corridor, Colombo 10',
    type: 'Infrastructure',
    client: 'Urban Transport Authority',
    startDate: '2026-01-10',
    endDate: '2027-04-30',
    budget: 145000000,
    manager: 'Eng. Nihal Samarasinghe',
    status: 'Active',
    description: 'Elevated railway track piers, civil concrete viaducts, and 3 new junction passenger stations.'
  },
  {
    id: 'SITE-02',
    name: 'Sapphire Commercial Tower (42 Floors)',
    code: 'PRJ-SCT-2025',
    location: '450 Galle Face Terrace, Colombo 03',
    type: 'Commercial',
    client: 'Aura Properties Ltd',
    startDate: '2025-06-01',
    endDate: '2027-12-15',
    budget: 280000000,
    manager: 'Eng. Samantha Jayawardena',
    status: 'Active',
    description: 'Grade-A corporate skyscraper with basement carparks, glass curtain walls, and luxury retail arcade.'
  },
  {
    id: 'SITE-03',
    name: 'Green Valley Eco Residential Enclave',
    code: 'PRJ-GVR-2026',
    location: 'Lake Road, Malabe',
    type: 'Residential',
    client: 'Green Habitat Developers',
    startDate: '2026-03-01',
    endDate: '2026-11-30',
    budget: 85000000,
    manager: 'Arch. Ruwan Alwis',
    status: 'Active',
    description: '64 modular smart villas with solar panel roofing, rainwater recycling, and community infrastructure.'
  },
  {
    id: 'SITE-04',
    name: 'Kelani River Industrial Bridge Rehab',
    code: 'PRJ-KBR-2026',
    location: 'Peliyagoda Bypass, Kelaniya',
    type: 'Infrastructure',
    client: 'Road Development Authority',
    startDate: '2026-08-15',
    endDate: '2027-02-28',
    budget: 62000000,
    manager: 'Eng. Priyantha Dissanayake',
    status: 'Planning',
    description: 'Sub-deck seismic dampers, structural steel truss reinforcement, and marine corrosion mitigation.'
  }
];

export const INITIAL_ATTENDANCE = [
  // Today's records (2026-09-07)
  {
    id: 'ATT-20260907-101',
    laborerId: 'LAB-101',
    siteId: 'SITE-01',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 3,
    otReason: 'Pier foundation concrete curing & night safety inspection',
    supervisorNotes: 'Completed shift ahead of scheduled milestone'
  },
  {
    id: 'ATT-20260907-102',
    laborerId: 'LAB-102',
    siteId: 'SITE-01',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2.5,
    otReason: 'Retaining wall bricklaying overtime',
    supervisorNotes: 'High quality finish'
  },
  {
    id: 'ATT-20260907-104',
    laborerId: 'LAB-104',
    siteId: 'SITE-01',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 1.5,
    otReason: 'Scaffolding shuttering for pier column 14',
    supervisorNotes: 'Formwork verified by structural team'
  },
  {
    id: 'ATT-20260907-107',
    laborerId: 'LAB-107',
    siteId: 'SITE-01',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 0,
    otReason: '',
    supervisorNotes: 'Routine drainage line testing'
  },
  {
    id: 'ATT-20260907-103',
    laborerId: 'LAB-103',
    siteId: 'SITE-02',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 4,
    otReason: 'Emergency main busbar electrical wiring on 18th floor',
    supervisorNotes: 'Overtime authorized by Project Manager'
  },
  {
    id: 'ATT-20260907-105',
    laborerId: 'LAB-105',
    siteId: 'SITE-02',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 3,
    otReason: 'Tower crane anchor beam structural welding',
    supervisorNotes: 'All weld tests passed NDT inspection'
  },
  {
    id: 'ATT-20260907-108',
    laborerId: 'LAB-108',
    siteId: 'SITE-02',
    date: '2026-09-07',
    status: 'Absent',
    regularHours: 0,
    overtimeHours: 0,
    otReason: '',
    supervisorNotes: 'Informed sick leave'
  },
  {
    id: 'ATT-20260907-106',
    laborerId: 'LAB-106',
    siteId: 'SITE-03',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2,
    otReason: 'Excavation of retaining pond perimeter',
    supervisorNotes: 'Site earthworks 100% complete'
  },
  {
    id: 'ATT-20260907-109',
    laborerId: 'LAB-109',
    siteId: 'SITE-03',
    date: '2026-09-07',
    status: 'Half-Day',
    regularHours: 4,
    overtimeHours: 0,
    otReason: '',
    supervisorNotes: 'Left at 1:00 PM for medical clinic'
  },
  {
    id: 'ATT-20260907-110',
    laborerId: 'LAB-110',
    siteId: 'SITE-03',
    date: '2026-09-07',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2,
    otReason: 'Assisting excavation site cleanup',
    supervisorNotes: 'Satisfactory assistance'
  },

  // Yesterday's records (2026-09-06)
  {
    id: 'ATT-20260906-101',
    laborerId: 'LAB-101',
    siteId: 'SITE-01',
    date: '2026-09-06',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2,
    otReason: 'Evening steel delivery unloading',
    supervisorNotes: 'Safe handling confirmed'
  },
  {
    id: 'ATT-20260906-102',
    laborerId: 'LAB-102',
    siteId: 'SITE-01',
    date: '2026-09-06',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 3,
    otReason: 'Pier foundation concrete pouring',
    supervisorNotes: 'Continuous pour required'
  },
  {
    id: 'ATT-20260906-103',
    laborerId: 'LAB-103',
    siteId: 'SITE-02',
    date: '2026-09-06',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2,
    otReason: 'Transformer room wiring',
    supervisorNotes: 'Testing in progress'
  },
  {
    id: 'ATT-20260906-105',
    laborerId: 'LAB-105',
    siteId: 'SITE-02',
    date: '2026-09-06',
    status: 'Present',
    regularHours: 8,
    overtimeHours: 2.5,
    otReason: 'Beam welding',
    supervisorNotes: 'Passed inspection'
  }
];

export const INITIAL_PAYMENTS = [
  {
    id: 'PAY-2026-001',
    laborerId: 'LAB-101',
    amount: 15000.00,
    date: '2026-09-01',
    method: 'Bank Transfer',
    reference: 'TXN-BOC-889921',
    approvedBy: 'Finance Controller D. Peiris',
    notes: 'Bi-weekly advance payment for August period'
  },
  {
    id: 'PAY-2026-002',
    laborerId: 'LAB-102',
    amount: 12000.00,
    date: '2026-09-01',
    method: 'Cash',
    reference: 'VCH-CASH-1044',
    approvedBy: 'Site In-Charge Eng. Nihal',
    notes: 'Direct cash payroll disbursement signed by laborer'
  },
  {
    id: 'PAY-2026-003',
    laborerId: 'LAB-103',
    amount: 14000.00,
    date: '2026-09-01',
    method: 'Bank Transfer',
    reference: 'TXN-COMB-442190',
    approvedBy: 'Finance Controller D. Peiris',
    notes: 'Regular wire transfer to Commercial Bank account'
  }
];

export const JOB_ROLES = [
  'Site Supervisor',
  'Master Mason',
  'Senior Electrician',
  'Structural Carpenter',
  'Steel Fixer & Welder',
  'Heavy Equipment Operator',
  'Plumber',
  'Commercial Painter',
  'Safety Officer',
  'General Laborer'
];

export const SKILL_LEVELS = [
  'Apprentice',
  'Skilled Craftsman',
  'Certified Electrician',
  'Certified Welder',
  'Licensed Heavy Operator',
  'Skilled Plumber',
  'Master / Supervisor'
];

export const PROJECT_TYPES = [
  'Infrastructure',
  'Commercial',
  'Residential',
  'Industrial',
  'Civil Restoration'
];
