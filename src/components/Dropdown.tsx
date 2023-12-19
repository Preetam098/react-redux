import React, { ChangeEvent } from 'react';

interface DropdownProps {
  label: string;
  value: number | null;
  options: { id: number; name: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, value, options, onChange, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} onChange={onChange} value={value || ''}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
