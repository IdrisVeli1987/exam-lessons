import { Box, Rating, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export default function CustomizedRating() {
  return (
    <Box
    textAlign="center"
      sx={{
        "& > legend": { mt: 50 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <Rating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? "s" : ""}`}
        precision={0.5}
        icon={
          <FavoriteIcon 
            style={{ color: "red" }}
            fontSize="inherit"
          />
        }
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
    </Box>
  );
}
