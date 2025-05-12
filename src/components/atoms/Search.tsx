import { TextField } from "@mui/material";
import { Grid } from "@mui/material";

interface SearchProps {
    search: string;
    setSearch: (search: string) => void;
}

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };
    return (
        <Grid container justifyContent="center">
            <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
                label="Name or Number"
                variant="outlined"
                value={search}
                onChange={handleSearchChange}
                fullWidth
                margin="normal"
            />
            </Grid>
        </Grid>
    );
};

export default Search;