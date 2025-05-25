import {
  Card as MuiCard,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface CardProps {
  image: string;
  name: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ image, name, id }) => {
  return (
    <MuiCard
      sx={{
        width: 180,
        margin: "auto",
        borderRadius: 2,
        boxShadow: 3,
        border: "2px dotted #000",
      }}
    >
      <CardMedia
        component="img"
        height="100"
        image={image}
        alt={`Image of ${name}`}
      />
      <CardContent sx={{ paddingBottom: "12px !important" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
