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
        margin: "16px auto",
        borderRadius: 2,
        boxShadow: 3,
        border: "2px dotted #ccc",
        backgroundColor: "rgba(223, 199, 228, 0.8)",
        "&:hover": {
          boxShadow: 6,
        },
      }}
      className="transition-shadow duration-300 ease-in-out"
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
          className="text-black-700 capitalize font-bold text-lg"
        >
          {name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-gray-600"
        >
          ID: {id}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
