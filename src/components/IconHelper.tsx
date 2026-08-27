import React from 'react';
import {
  Laptop,
  Server,
  ShieldCheck,
  Camera,
  Cloud,
  HardDrive,
  Wrench,
  Cpu,
  Monitor,
  Network,
  ShieldAlert,
  Lock,
  Headphones,
  Clock,
  Zap,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Check,
  AlertCircle,
  Building2,
  Briefcase,
  Users,
  Settings,
  HelpCircle
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case 'Laptop': return <Laptop className={className} />;
    case 'Server': return <Server className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Camera': return <Camera className={className} />;
    case 'Cloud': return <Cloud className={className} />;
    case 'HardDrive': return <HardDrive className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'Monitor': return <Monitor className={className} />;
    case 'Network': return <Network className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'Headphones': return <Headphones className={className} />;
    case 'Clock': return <Clock className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    case 'Phone': return <Phone className={className} />;
    case 'Mail': return <Mail className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'MessageSquare': return <MessageSquare className={className} />;
    case 'Menu': return <Menu className={className} />;
    case 'X': return <X className={className} />;
    case 'ArrowRight': return <ArrowRight className={className} />;
    case 'ChevronRight': return <ChevronRight className={className} />;
    case 'Check': return <Check className={className} />;
    case 'AlertCircle': return <AlertCircle className={className} />;
    case 'Building2': return <Building2 className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Settings': return <Settings className={className} />;
    default: return <HelpCircle className={className} />;
  }
};
