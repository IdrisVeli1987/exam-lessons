import { Box, Typography } from "@mui/material";
import CustomizedRating from "../Rating";

const PageContainer = ({ children }) => {
  return (
    <>
      <Box component="main"></Box>
      <CustomizedRating />
    </>
  );
};
export default PageContainer;
