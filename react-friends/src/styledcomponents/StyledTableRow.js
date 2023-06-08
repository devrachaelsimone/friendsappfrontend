import { TableRow } from "@mui/material";
import styled from "@emotion/styled";

export const StyledTableRow = styled(TableRow)({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "blue",
    },
  },
});
