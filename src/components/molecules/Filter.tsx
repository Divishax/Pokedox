import Select from "../atoms/SelectDropdown";
import {
  genderOptions,
  statsOptions,
  typeOptions,
} from "../../constants/filterOptions";

interface FilterProps {
  onFilterChange: (filterType: string, value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("type", event.target.value);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("gender", event.target.value);
  };

  const handleStatsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange("stats", event.target.value);
  };

  return (
    <div>
      <Select
        options={typeOptions}
        onChange={handleTypeChange}
        ariaLabel="Filter by Type"
      />
      <Select
        options={genderOptions}
        onChange={handleGenderChange}
        ariaLabel="Filter by Gender"
      />
      <Select
        options={statsOptions}
        onChange={handleStatsChange}
        ariaLabel="Filter by Stats"
      />
    </div>
  );
};

export default Filter;
