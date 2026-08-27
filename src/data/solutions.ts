import { SolutionCategory } from '../types';

export const SOLUTIONS_DATA: SolutionCategory[] = [
  {
    id: 'workplace-it',
    title: 'Workplace IT',
    subtitle: 'Modern Employee Workstation & Productivity Setup',
    iconName: 'Monitor',
    badge: 'Employee Productivity',
    description: 'Provide your office workforce with high-performance desktop PCs, business laptops, Microsoft 365 productivity tools, and responsive helpdesk support.',
    items: [
      'Business Desktops & Performance Workstations',
      'Corporate Laptops & Mobile Workstation Options',
      'Microsoft 365 Email, Cloud Storage & Teams Setup',
      'Peripherals, Monitors, Printers & Scanner Integration',
      'Daily Desktop Operating System & Application Support'
    ]
  },
  {
    id: 'network-infrastructure',
    title: 'Network Infrastructure',
    subtitle: 'High-Speed LAN, Wi-Fi & Firewall Systems',
    iconName: 'Network',
    badge: 'Connectivity & Speed',
    description: 'Ensure fast, dependable, and secure network communications across your entire office layout with structured cabling, business switches, and unified Wi-Fi.',
    items: [
      'Structured CAT6 / Fiber LAN Cabling & Rack Setup',
      'Seamless Enterprise Wi-Fi Coverage & Access Points',
      'Next-Gen Business Firewall & Cyber Threat Gateway',
      'Managed Switch Configuration & VLAN Segmentation',
      'Network Performance Diagnostics & Cable Routing'
    ]
  },
  {
    id: 'server-infrastructure',
    title: 'Server Infrastructure',
    subtitle: 'Centralized Server & Shared Storage Architecture',
    iconName: 'Server',
    badge: 'Central Computing',
    description: 'Centralize your office databases, business files, permissions, and application servers with engineered rack server installations.',
    items: [
      'Tower & Rack Server Selection & Deployment',
      'Network Attached Storage (NAS) Shared Drives',
      'Windows Server Active Directory & Domain Controller',
      'File Sharing Permissions & Access Rights Control',
      'Server Thermal, Storage & Hardware Health Monitoring'
    ]
  },
  {
    id: 'security-surveillance',
    title: 'Security & Surveillance',
    subtitle: 'Physical Office Security & Access Management',
    iconName: 'ShieldAlert',
    badge: 'Facility Safety',
    description: 'Protect physical assets, monitor premise activities 24/7, and manage employee access with biometric attendance and IP surveillance solutions.',
    items: [
      'High-Definition IP CCTV Camera Systems',
      'Network Video Recording (NVR) with Remote Viewing',
      'Biometric Fingerprint & Facial Recognition Attendance',
      'Smart RFID & Biometric Door Access Controls',
      'Physical Security Assessment & Periodic Inspections'
    ]
  },
  {
    id: 'data-protection',
    title: 'Data Protection',
    subtitle: 'Automated Local & Cloud Backup Solutions',
    iconName: 'Lock',
    badge: 'Business Continuity',
    description: 'Safeguard your commercial data against drive corruption, accidental deletion, and ransomware attacks with automated multi-layer backups.',
    items: [
      'Automated Daily Off-site & On-premise Backups',
      'Enterprise Endpoint Antivirus & Threat Protection',
      'Disaster Recovery Planning & Restoration Testing',
      'Encrypted Cloud Data Archiving Solutions',
      'Data Access Auditing & Security Policy Enforcement'
    ]
  },
  {
    id: 'managed-it-support',
    title: 'Managed IT Support',
    subtitle: 'Proactive AMC & Dedicated On-site Support',
    iconName: 'Headphones',
    badge: 'Zero Downtime',
    description: 'Outsource your IT infrastructure maintenance to experienced engineers for predictable operational costs and rapid resolution.',
    items: [
      'Annual Maintenance Contracts (AMC) Tailored to Office Size',
      'Scheduled Monthly Preventive Maintenance Visits',
      'Priority On-site Technician & Engineer Assistance',
      'Remote Desktop & Telephone Technical Troubleshooting',
      'System Audit Reports & Infrastructure Growth Advice'
    ]
  }
];

export const ECOSYSTEM_STEPS = [
  {
    number: '01',
    phase: 'Plan',
    title: 'Requirement & Assessment',
    description: 'We evaluate your current office infrastructure, growth goals, security needs, and hardware requirements.'
  },
  {
    number: '02',
    phase: 'Supply',
    title: 'Hardware & System Procurement',
    description: 'We source genuine, high-quality business computers, switches, firewalls, and server equipment.'
  },
  {
    number: '03',
    phase: 'Install',
    title: 'Professional Setup & Cabling',
    description: 'Our engineers physically install racks, run structured cabling, configure Wi-Fi, and deploy PCs.'
  },
  {
    number: '04',
    phase: 'Secure',
    title: 'Firewall & Security Implementation',
    description: 'We lock down network security, install CCTV/biometrics, configure backups, and set up user permissions.'
  },
  {
    number: '05',
    phase: 'Maintain',
    title: 'Preventive Servicing & AMC',
    description: 'Regular maintenance checkups prevent hardware failure and keep network software updated.'
  },
  {
    number: '06',
    phase: 'Support',
    title: 'On-demand Technical Support',
    description: 'Fast phone, remote, and on-site support whenever your staff encounters technical issues.'
  }
];
