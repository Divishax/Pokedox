interface SelectDropdownProps {
  options: { value: string; label: string }[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  ariaLabel: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onChange, ariaLabel }) => {
  return (
    <select onChange={onChange} aria-label={ariaLabel}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectDropdown;