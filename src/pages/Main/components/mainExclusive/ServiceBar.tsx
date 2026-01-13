import React from 'react';
import type { ServiceItemLabel } from '../../../../types/serviceType';
import './scss/ServiceBar.scss';

interface ServiceBarProps {
  data: ServiceItemLabel[];
  activeId: string;
  onChange: (id: string) => void;
}

const ServiceBar = ({ data, activeId, onChange }: ServiceBarProps) => {
  return (
    <div className="serviceBar">
      {data.map((item) => (
        <button
          key={item.id}
          className={`serviceBarBtn ${item.id === activeId ? 'active' : ''}`}
          onClick={() => onChange(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ServiceBar;
