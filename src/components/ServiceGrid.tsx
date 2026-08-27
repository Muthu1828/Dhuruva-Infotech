import React from 'react';
import { SERVICES_DATA } from '../data/services';
import { ServiceCard } from './ServiceCard';

interface ServiceGridProps {
  limit?: number;
  featuredOnly?: boolean;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ limit, featuredOnly = false }) => {
  const displayedServices = limit ? SERVICES_DATA.slice(0, limit) : SERVICES_DATA;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
      {displayedServices.map((service, idx) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={idx}
          featured={featuredOnly && (idx === 1 || idx === 6)}
        />
      ))}
    </div>
  );
};
