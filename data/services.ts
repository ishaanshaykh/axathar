export type ServiceCategory = "IT & Cloud" | "Security & Resilience" | "Digital & Experiences";
export type Service = {
  slug: string; title: string; short: string; category: ServiceCategory;
  tags: string[]; popular?: boolean; aiNative?: boolean; summary: string;
  metrics: { value: string; label: string }[];
  capabilities: { title: string; body: string }[];
  benefits: string[]; process: { title: string; body: string }[];
  faqs: { q: string; a: string }[]; related: string[];
};
export const serviceCategories: ServiceCategory[] = ["IT & Cloud", "Security & Resilience", "Digital & Experiences"];
// Service scope adapted from the supplied India CompuTech profile, pages 1 and 3–8.
// Company identity, statistics, personnel and contact details are not imported.
export const services: Service[] = [
  {
    "slug": "it-infrastructure",
    "title": "IT Infrastructure",
    "short": "Reliable hardware, networks and connectivity for your workplace.",
    "summary": "Reliable hardware, networks and connectivity for your workplace.",
    "category": "IT & Cloud",
    "tags": [
      "Hardware",
      "Networking",
      "Repairs"
    ],
    "popular": true,
    "metrics": [],
    "capabilities": [
      {
        "title": "Desktop & laptop procurement",
        "body": "Branded and custom-built systems selected for your team and workload."
      },
      {
        "title": "System upgrades",
        "body": "RAM, storage and performance upgrades that extend the life of your equipment."
      },
      {
        "title": "Repairs & maintenance",
        "body": "On-site and remote support for hardware faults and everyday issues."
      },
      {
        "title": "Servers & firewalls",
        "body": "Server installation, firewall configuration and ongoing monitoring."
      },
      {
        "title": "Networking & connectivity",
        "body": "LAN, Wi-Fi and structured cabling for connected workplaces."
      },
      {
        "title": "Peripheral support",
        "body": "Setup and support for printers, scanners and essential office hardware."
      }
    ],
    "benefits": [
      "A coordinated approach to it infrastructure.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does it infrastructure include?",
        "a": "Reliable hardware, networks and connectivity for your workplace. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "cloud-computing",
      "managed-it-services",
      "workplace-productivity"
    ]
  },
  {
    "slug": "cloud-computing",
    "title": "Cloud Computing",
    "short": "Hosting, migration and recovery built around your business.",
    "summary": "Hosting, migration and recovery built around your business.",
    "category": "IT & Cloud",
    "tags": [
      "VPS & hosting",
      "Migration",
      "Cloud backup"
    ],
    "popular": true,
    "metrics": [],
    "capabilities": [
      {
        "title": "Private servers",
        "body": "Virtual private servers and dedicated physical server options."
      },
      {
        "title": "Domains & DNS",
        "body": "Domain registration and DNS configuration and management."
      },
      {
        "title": "Web & email hosting",
        "body": "Shared and dedicated hosting for websites and business email."
      },
      {
        "title": "Cloud migrations",
        "body": "Move existing workloads or redesign your cloud architecture."
      },
      {
        "title": "Backup & disaster recovery",
        "body": "Cloud backups and recovery planning to keep critical systems recoverable."
      },
      {
        "title": "Licence & cost management",
        "body": "Review licences, hosting resources and ongoing cloud costs."
      }
    ],
    "benefits": [
      "A coordinated approach to cloud computing.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does cloud computing include?",
        "a": "Hosting, migration and recovery built around your business. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "it-infrastructure",
      "managed-it-services",
      "workplace-productivity"
    ]
  },
  {
    "slug": "managed-it-services",
    "title": "Managed IT Services",
    "short": "Day-to-day support and proactive care for your entire IT environment.",
    "summary": "Day-to-day support and proactive care for your entire IT environment.",
    "category": "IT & Cloud",
    "tags": [
      "Helpdesk",
      "AMC",
      "Monitoring"
    ],
    "popular": true,
    "metrics": [],
    "capabilities": [
      {
        "title": "IT helpdesk",
        "body": "Remote and on-site support for your people and their everyday IT needs."
      },
      {
        "title": "Annual maintenance contracts",
        "body": "Ongoing maintenance for business hardware and peripherals."
      },
      {
        "title": "Proactive monitoring",
        "body": "Monitoring and alerting for systems that need continuous attention."
      },
      {
        "title": "IT manpower",
        "body": "Dedicated or shared system engineers to support your operations."
      },
      {
        "title": "Network & Wi-Fi management",
        "body": "Network setup, optimisation and ongoing administration."
      },
      {
        "title": "New office setup",
        "body": "Coordinate the IT infrastructure for a new workplace, end to end."
      }
    ],
    "benefits": [
      "A coordinated approach to managed it services.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does managed it services include?",
        "a": "Day-to-day support and proactive care for your entire IT environment. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "it-infrastructure",
      "cloud-computing",
      "workplace-productivity"
    ]
  },
  {
    "slug": "security-backup",
    "title": "Security & Backup",
    "short": "Protect your premises, devices and data with connected layers of security.",
    "summary": "Protect your premises, devices and data with connected layers of security.",
    "category": "Security & Resilience",
    "tags": [
      "CCTV",
      "Access control",
      "Recovery"
    ],
    "popular": true,
    "metrics": [],
    "capabilities": [
      {
        "title": "CCTV systems",
        "body": "Camera installation, upgrades and remote monitoring."
      },
      {
        "title": "Access control",
        "body": "Door security and access-control systems for your premises."
      },
      {
        "title": "Network & email security",
        "body": "Anti-spam, phishing filters and data-loss prevention controls."
      },
      {
        "title": "Device protection",
        "body": "Protect desktops, laptops, servers and network endpoints."
      },
      {
        "title": "Backup systems",
        "body": "On-premise and cloud backup for business information."
      },
      {
        "title": "Disaster recovery",
        "body": "Document recovery plans and test that your backups can be restored."
      }
    ],
    "benefits": [
      "A coordinated approach to security & backup.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does security & backup include?",
        "a": "Protect your premises, devices and data with connected layers of security. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "zero-trust-edr",
      "it-compliance-audit"
    ]
  },
  {
    "slug": "ai-automation",
    "title": "AI & Automation",
    "short": "Connect your systems and automate repetitive work.",
    "summary": "Connect your systems and automate repetitive work.",
    "category": "Digital & Experiences",
    "tags": [
      "Power Automate",
      "n8n",
      "AI workflows"
    ],
    "popular": false,
    "metrics": [],
    "capabilities": [
      {
        "title": "Workflow automation",
        "body": "Automate approvals, employee onboarding and recurring reporting."
      },
      {
        "title": "Connected systems",
        "body": "Use Power Automate and n8n to connect the tools your team already uses."
      },
      {
        "title": "Custom AI workflows",
        "body": "Apply AI tooling to clearly defined tasks within your business processes."
      },
      {
        "title": "Internal tools",
        "body": "Lightweight tools that connect existing systems without a full software project."
      }
    ],
    "benefits": [
      "A coordinated approach to ai & automation.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does ai & automation include?",
        "a": "Connect your systems and automate repetitive work. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "digital-solutions",
      "event-management"
    ]
  },
  {
    "slug": "digital-solutions",
    "title": "Digital Solutions",
    "short": "Build your online presence and improve how you connect with customers.",
    "summary": "Build your online presence and improve how you connect with customers.",
    "category": "Digital & Experiences",
    "tags": [
      "Web",
      "Social media",
      "CRM"
    ],
    "popular": true,
    "metrics": [],
    "capabilities": [
      {
        "title": "Web design & development",
        "body": "Business websites designed to turn interest into enquiries."
      },
      {
        "title": "Social media management",
        "body": "Content planning and campaign management across social channels."
      },
      {
        "title": "AI content management",
        "body": "AI-assisted content creation and management for your brand."
      },
      {
        "title": "CRM solutions",
        "body": "Customer engagement tools and automation for your sales and service processes."
      },
      {
        "title": "Online reputation management",
        "body": "Support a consistent and considered presence across online channels."
      },
      {
        "title": "Professional email",
        "body": "Business email with Microsoft 365, Google Workspace and cPanel."
      }
    ],
    "benefits": [
      "A coordinated approach to digital solutions.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does digital solutions include?",
        "a": "Build your online presence and improve how you connect with customers. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "ai-automation",
      "event-management"
    ]
  },
  {
    "slug": "event-management",
    "title": "Event Management",
    "short": "Bring planning, audiovisual production and event coverage together.",
    "summary": "Bring planning, audiovisual production and event coverage together.",
    "category": "Digital & Experiences",
    "tags": [
      "Planning",
      "AV",
      "Photo & video"
    ],
    "popular": false,
    "metrics": [],
    "capabilities": [
      {
        "title": "Event planning",
        "body": "Coordinate the practical requirements and production needs of your event."
      },
      {
        "title": "Audiovisual support",
        "body": "Plan and coordinate audio and visual requirements."
      },
      {
        "title": "Photography",
        "body": "Professional event photography and visual coverage."
      },
      {
        "title": "Video production",
        "body": "Event video coverage and production."
      }
    ],
    "benefits": [
      "A coordinated approach to event management.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does event management include?",
        "a": "Bring planning, audiovisual production and event coverage together. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "ai-automation",
      "digital-solutions"
    ]
  },
  {
    "slug": "zero-trust-edr",
    "title": "Zero Trust & EDR",
    "short": "Strengthen endpoint protection and prepare your team for incidents.",
    "summary": "Strengthen endpoint protection and prepare your team for incidents.",
    "category": "Security & Resilience",
    "tags": [
      "Zero Trust",
      "Sophos EDR",
      "Incident response"
    ],
    "popular": false,
    "metrics": [],
    "capabilities": [
      {
        "title": "Zero Trust architecture",
        "body": "Review access and design security around explicit verification."
      },
      {
        "title": "Endpoint detection & response",
        "body": "Sophos EDR and ransomware protection for business endpoints."
      },
      {
        "title": "Threat monitoring",
        "body": "Dark web monitoring and security visibility to identify exposure."
      },
      {
        "title": "Incident readiness",
        "body": "Incident response planning and tabletop exercises for your team."
      }
    ],
    "benefits": [
      "A coordinated approach to zero trust & edr.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does zero trust & edr include?",
        "a": "Strengthen endpoint protection and prepare your team for incidents. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "security-backup",
      "it-compliance-audit"
    ]
  },
  {
    "slug": "it-compliance-audit",
    "title": "IT Compliance & Audit Readiness",
    "short": "Understand your security gaps and organise the evidence for an audit.",
    "summary": "Understand your security gaps and organise the evidence for an audit.",
    "category": "Security & Resilience",
    "tags": [
      "Gap analysis",
      "Audit evidence",
      "Staff training"
    ],
    "popular": false,
    "metrics": [],
    "capabilities": [
      {
        "title": "Compliance assessments",
        "body": "Review your current IT controls and identify areas that need attention."
      },
      {
        "title": "ISO 27001 gap analysis",
        "body": "Assess gaps in information-security processes and documentation."
      },
      {
        "title": "Audit evidence packs",
        "body": "Organise policies, controls and supporting evidence for review."
      },
      {
        "title": "Data-handling training",
        "body": "Help staff understand and apply your organisation\u2019s data-handling policies."
      }
    ],
    "benefits": [
      "A coordinated approach to it compliance & audit readiness.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does it compliance & audit readiness include?",
        "a": "Understand your security gaps and organise the evidence for an audit. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "security-backup",
      "zero-trust-edr"
    ]
  },
  {
    "slug": "workplace-productivity",
    "title": "Microsoft 365 & Workspace",
    "short": "Get more from the productivity tools your team already uses.",
    "summary": "Get more from the productivity tools your team already uses.",
    "category": "IT & Cloud",
    "tags": [
      "Microsoft 365",
      "Google Workspace",
      "Power BI"
    ],
    "popular": false,
    "metrics": [],
    "capabilities": [
      {
        "title": "Productivity deployment",
        "body": "Configure Microsoft 365 and Google Workspace around your teams."
      },
      {
        "title": "Collaboration tools",
        "body": "Put SharePoint and Teams to work for shared documents and collaboration."
      },
      {
        "title": "Dashboards & intranets",
        "body": "Department-specific intranets and Power BI dashboards."
      },
      {
        "title": "Licence optimisation",
        "body": "Review software usage and align licences with actual requirements."
      }
    ],
    "benefits": [
      "A coordinated approach to microsoft 365 & workspace.",
      "Recommendations shaped around your existing systems.",
      "A clear scope before implementation begins."
    ],
    "process": [
      {
        "title": "Understand",
        "body": "Review your needs, existing systems and priorities."
      },
      {
        "title": "Scope",
        "body": "Agree the work, responsibilities and delivery requirements."
      },
      {
        "title": "Implement",
        "body": "Configure, deliver and verify the agreed solution."
      },
      {
        "title": "Support",
        "body": "Plan the handover and ongoing support requirements."
      }
    ],
    "faqs": [
      {
        "q": "What does microsoft 365 & workspace include?",
        "a": "Get more from the productivity tools your team already uses. The capabilities above can be scoped to your requirements."
      },
      {
        "q": "How do we get started?",
        "a": "Tell us about your current setup and what you need to improve. We will discuss the scope and next steps with you."
      }
    ],
    "related": [
      "it-infrastructure",
      "cloud-computing",
      "managed-it-services"
    ]
  }
];
export function getService(slug: string) { return services.find(s => s.slug === slug); }
