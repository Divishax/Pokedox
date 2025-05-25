import React from "react";
import Typography from "@mui/material/Typography";

interface HeadingProps {
  mainText: string;
  subText: string;
}

const Heading: React.FC<HeadingProps> = ({ mainText, subText }) => {
  return (
    <div className="flex items-center space-x-2">
      <Typography
        variant="h4"
        component="h1"
        className="font-bold"
        sx={{ marginY: 4 }}
      >
        {mainText}
      </Typography>
      <span className="text-gray-500 ml-5 mr-5 text-lg">|</span>
      <Typography variant="h6" component="span" className="text-gray-500">
        {subText}
      </Typography>
    </div>
  );
};

export default Heading;
