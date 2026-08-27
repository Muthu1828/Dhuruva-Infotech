import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'desktop-laptop',
    slug: 'desktop-laptop-sales',
    title: 'Desktop & Laptop Sales',
    shortDescription: 'Enterprise-grade business desktops, workstations, and corporate laptops tailored for business productivity and office workloads.',
    fullDescription: 'Dhruva Infotech offers end-to-end business desktop and laptop procurement solutions. We help organizations select, configure, deploy, and maintain optimal computer hardware tailored to specific business roles, budget requirements, and performance demands.',
    iconName: 'Laptop',
    category: 'hardware',
    ctaText: 'Request Hardware Quote',
    keyFeatures: [
      'Business Desktops & Workstations',
      'Corporate & Portable Business Laptops',
      'Custom Hardware Recommendations & Sizing',
      'Pre-configuration & Software Provisioning',
      'Professional On-site Installation & Setup',
      'Warranty & Post-sales Technical Support'
    ],
    businessBenefits: [
      'Right-sized hardware minimizing capital expenditure',
      'Pre-configured devices ready for immediate employee deployment',
      'Reliable commercial-grade durability and warranty backing',
      'Professional ongoing technical assistance'
    ]
  },
  {
    id: 'server-networking',
    slug: 'server-networking',
    title: 'Server & Networking',
    shortDescription: 'Robust server infrastructure, structured LAN cabling, rack deployment, and high-performance network configurations.',
    fullDescription: 'From small office servers to multi-rack network setups, Dhruva Infotech delivers server and networking solutions engineered for maximum uptime, seamless local connectivity, and scalable storage architecture.',
    iconName: 'Server',
    category: 'infrastructure',
    ctaText: 'Discuss Your Network Requirement',
    keyFeatures: [
      'On-premise Server Infrastructure & Deployment',
      'Structured LAN Cabling & Patch Panel Routing',
      'Managed & Unmanaged Network Switches & Routers',
      'Rack Setup, Management & Cable Organization',
      'Active Directory & Shared Network Storage (NAS)',
      'Infrastructure Diagnostics & Network Troubleshooting'
    ],
    businessBenefits: [
      'Eliminates bandwidth bottlenecks and local connection drops',
      'Centralizes file storage, permissions, and security controls',
      'Scalable architecture ready for company expansion',
      'Reduced unexpected network downtime'
    ]
  },
  {
    id: 'firewall-wifi',
    slug: 'firewall-wifi',
    title: 'Firewall & Wi-Fi',
    shortDescription: 'Enterprise network security firewalls, secure unified Wi-Fi access points, bandwidth management, and secure access controls.',
    fullDescription: 'Protect your corporate network perimeter while offering seamless, high-speed wireless coverage throughout your office facility. We configure business firewalls, guest Wi-Fi networks, and encrypted remote access.',
    iconName: 'ShieldCheck',
    category: 'security',
    ctaText: 'Secure My Network',
    keyFeatures: [
      'Next-Gen Business Firewall Deployment',
      'Seamless High-Density Office Wi-Fi Access Points',
      'VLAN Segmentation & Secure Guest Networks',
      'Content Filtering, Threat Prevention & Access Control',
      'VPN & Secure Remote Connectivity Setup',
      'Wi-Fi Signal Optimization & Troubleshooting'
    ],
    businessBenefits: [
      'Defends corporate network against cyber threats and intrusion',
      'Ensures reliable wireless coverage in all office zones',
      'Restricts unauthorized device access to sensitive assets',
      'Provides secure VPN access for remote team members'
    ]
  },
  {
    id: 'cctv-biometric',
    slug: 'cctv-biometric',
    title: 'CCTV & Biometric',
    shortDescription: 'Comprehensive IP CCTV surveillance installation, biometric attendance systems, and physical access control solutions.',
    fullDescription: 'Secure your physical office premises and automate workforce attendance with IP surveillance cameras, biometric fingerprint/facial recognition systems, and smart door access controls.',
    iconName: 'Camera',
    category: 'security',
    ctaText: 'Request Security Solution',
    keyFeatures: [
      'High-Definition IP CCTV Camera Installation',
      'Network Video Recorder (NVR) & Local/Cloud Storage',
      'Biometric Fingerprint & Facial Attendance Systems',
      'Smart Door Lock & Access Control Integration',
      'Remote Mobile & Desktop Live Surveillance Monitoring',
      'Preventive Camera & Access System Maintenance'
    ],
    businessBenefits: [
      'Complete 24/7 visual perimeter monitoring and evidence logging',
      'Automated, tamper-proof employee attendance recording',
      'Controlled physical entry to server rooms and restricted areas',
      'Peace of mind for facility administrators and management'
    ]
  },
  {
    id: 'microsoft-365',
    slug: 'microsoft-365',
    title: 'Microsoft 365 Solutions',
    shortDescription: 'Cloud productivity setup, business email configuration, user administration, SharePoint, OneDrive, and support.',
    fullDescription: 'Empower your workforce with modern cloud collaboration. Dhruva Infotech provides end-to-end setup, domain integration, email provisioning, and user administration for Microsoft 365 business applications.',
    iconName: 'Cloud',
    category: 'cloud',
    ctaText: 'Get M365 Support',
    keyFeatures: [
      'Microsoft 365 Business Email & Domain Setup',
      'Exchange Online, Outlook & Teams Provisioning',
      'OneDrive Cloud Storage & SharePoint File Sharing',
      'User Account Creation, Permissions & License Management',
      'Email Migration & Multi-Factor Authentication (MFA)',
      'Ongoing User Support & Troubleshooting'
    ],
    businessBenefits: [
      'Professional branded email addresses for company credibility',
      'Seamless collaboration on documents from anywhere, on any device',
      'Enhanced cloud data protection and access security',
      'Dedicated technical support for password resets and config'
    ]
  },
  {
    id: 'data-backup',
    slug: 'data-backup-security',
    title: 'Data Backup & Security',
    shortDescription: 'Automated local and cloud backup strategies, endpoint protection, anti-malware, and business continuity planning.',
    fullDescription: 'Protect critical company records and customer databases from hardware failures, accidental deletion, ransomware, and system corruption with automated dual-layer backup and endpoint protection.',
    iconName: 'HardDrive',
    category: 'security',
    ctaText: 'Protect My Business Data',
    keyFeatures: [
      'Automated Local (NAS/External) Backup Configuration',
      'Encrypted Off-site Cloud Backup Solutions',
      'Business Endpoint Antivirus & Ransomware Protection',
      'Disaster Recovery Planning & System Restore Tests',
      'Data Protection Policies & Employee Best Practices',
      'Regular Backup Status Verification & Monitoring'
    ],
    businessBenefits: [
      'Prevents catastrophic loss of company data and financial records',
      'Rapid recovery capabilities minimizing business interruption',
      'Multi-layered endpoint protection against malware threats',
      'Regulatory compliance for data retention and security'
    ]
  },
  {
    id: 'it-amc',
    slug: 'it-amc-onsite-support',
    title: 'IT AMC & On-site Support',
    shortDescription: 'Comprehensive Annual Maintenance Contracts, scheduled preventive health checks, and rapid on-site technician dispatch.',
    fullDescription: 'Get dedicated IT assistance without the overhead of an in-house IT department. Our Annual Maintenance Contracts ensure scheduled preventive maintenance visits, fast troubleshooting, and priority on-site support.',
    iconName: 'Wrench',
    category: 'support',
    ctaText: 'Ask About AMC',
    keyFeatures: [
      'Scheduled Preventive Maintenance Office Visits',
      'On-demand On-site Engineer Support',
      'Hardware & Operating System Troubleshooting',
      'Network Connectivity & Peripheral Support',
      'System Speed Optimization & Virus Cleaning',
      'Dedicated Helpdesk for Office Employees'
    ],
    businessBenefits: [
      'Fixed annual IT support cost with zero hidden fees',
      'Eliminates staff downtime caused by unresolved technical issues',
      'Regular hardware checkups extend computer operational lifespan',
      'Reliable local partner just a phone call away'
    ]
  },
  {
    id: 'annual-maintenance',
    slug: 'annual-it-infrastructure-maintenance',
    title: 'Annual IT Infrastructure Maintenance',
    shortDescription: 'End-to-end maintenance of servers, firewalls, network switches, PCs, and security systems for zero unexpected downtime.',
    fullDescription: 'Keep your entire enterprise technology infrastructure running like clockwork. Our total infrastructure AMC covers servers, network switches, firewalls, Wi-Fi points, workstations, and surveillance systems.',
    iconName: 'Cpu',
    category: 'support',
    ctaText: 'Get an AMC Quote',
    keyFeatures: [
      'Total Infrastructure Asset Audit & Diagnostics',
      'Server & Storage Health Monitoring',
      'Network Switch, Router & Firewall Firmware Updates',
      'CCTV & Access Control System Inspection',
      'Preventive Dust Cleaning & Cable Tidy Servicing',
      'Comprehensive Maintenance Log Reports'
    ],
    businessBenefits: [
      'Proactive identification of hardware wear before failure occurs',
      'Ensures critical firmware patches and security updates are applied',
      'Maximizes ROI on enterprise IT investments',
      'One contact point for all IT infrastructure components'
    ]
  }
];
