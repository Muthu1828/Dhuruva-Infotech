import { AMCBenefit, ProcessStep } from '../types';

export const AMC_PAGE_DATA = {
  headline: "Reliable IT Support. Predictable Maintenance. Less Downtime.",
  subheadline: "Keep your business operating smoothly without unexpected IT breakdowns or high emergency repair bills.",
  
  oneTimeSupport: {
    title: "One-Time Support",
    targetAudience: "Best for immediate system fixes, single installation projects, or hardware upgrades.",
    features: [
      "Hardware installation & desktop assembly",
      "One-off network setup & Wi-Fi configuration",
      "Operating system reinstallation & cleanup",
      "Urgent computer troubleshooting & repair",
      "Standby technician visit charged per issue"
    ]
  },

  annualAMC: {
    title: "Annual Maintenance Contract (AMC)",
    targetAudience: "Best for offices requiring continuous IT reliability, scheduled maintenance, and priority engineer response.",
    features: [
      "Scheduled monthly preventive maintenance visits",
      "Unlimited remote & priority on-site support visits",
      "Regular system virus scanning & junk file cleaning",
      "Network switch, firewall & router health audits",
      "Data backup verification & security monitoring",
      "Dedicated IT engineer contact for your team",
      "Fixed predictable annual IT budget with zero surprises"
    ]
  },

  benefits: [
    {
      title: "Reduced Downtime",
      description: "Proactive health audits catch failing drives, overheating CPUs, and loose network cables before they halt office work.",
      iconName: "Clock"
    },
    {
      title: "Cost Predictability",
      description: "Avoid unexpected expensive emergency technician fees with a transparent, budget-friendly annual contract.",
      iconName: "ShieldCheck"
    },
    {
      title: "Fast On-site Assistance",
      description: "AMC contract clients receive priority engineer dispatch for urgent network outages and computer crashes.",
      iconName: "Zap"
    },
    {
      title: "Organized IT Infrastructure",
      description: "Keep cables tidy, IP addresses mapped, software updated, and security permissions clear.",
      iconName: "CheckCircle2"
    }
  ] as AMCBenefit[],

  processSteps: [
    {
      step: 1,
      title: "Requirement Assessment",
      description: "We discuss your office equipment count (PCs, laptops, servers, network devices) and specific operational needs."
    },
    {
      step: 2,
      title: "Site Audit / Infrastructure Review",
      description: "Our engineer conducts an initial review of your hardware age, network topology, and cabling health."
    },
    {
      step: 3,
      title: "Custom AMC Quotation",
      description: "We provide a clear, competitive AMC quotation structured specifically around your equipment and support frequency."
    },
    {
      step: 4,
      title: "Contract Service Onboarding",
      description: "We document all assets, perform an initial cleanup service, and set up routine preventive maintenance schedules."
    },
    {
      step: 5,
      title: "Ongoing Dedicated Support",
      description: "Your team gains direct access to our technical team for helpdesk queries, monthly visits, and urgent repairs."
    }
  ] as ProcessStep[]
};
