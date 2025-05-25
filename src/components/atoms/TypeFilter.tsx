import {
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,
  Chip,
} from "@mui/material";

import useFetchTypes from "../../hooks/useFetchTypes";

interface TypeProps {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}

const Type: React.FC<TypeProps> = ({ selectedTypes, setSelectedTypes }) => {
  const { types, loading, error } = useFetchTypes();

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setSelectedTypes(typeof value === "string" ? value.split(",") : value);
  };

  if (loading) return <Typography>Loading types...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box>
      <Typography variant="subtitle1" mb={0.5}>
        Type
      </Typography>
      <Select
        multiple
        value={selectedTypes}
        onChange={handleChange}
        input={<OutlinedInput label="Filter by Type" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {(selected as string[]).map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        sx={{
          width: "300px",
          backgroundColor: "#f0f0f0",
          borderRadius: 1,
        }}
      >
        {types.map((type) => (
          <MenuItem key={type.name} value={type.name}>
            <Checkbox checked={selectedTypes.includes(type.name)} />
            <ListItemText primary={type.name} />
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default Type;
