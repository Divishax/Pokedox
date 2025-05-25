import React from "react";
import { TextField, Box, Typography, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <Box sx={{ borderRadius: 1 }}>
      <Typography variant="subtitle1" sx={{ mb: 1 }}>
        Search by
      </Typography>
      <TextField
        label="Name or Number"
        variant="outlined"
        margin="dense"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          backgroundColor: "#e0e0e0",
          width: "100%",
          maxWidth: "400px",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;
