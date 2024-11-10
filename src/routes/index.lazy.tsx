import type { FC } from "react";

import { createLazyFileRoute } from "@tanstack/react-router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RouteComponent: FC = () => {
  return (
    <Box>
      <Typography>Content from /</Typography>
    </Box>
  );
};

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});
