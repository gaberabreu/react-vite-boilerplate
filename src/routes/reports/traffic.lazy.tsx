import type { FC } from "react";

import { createLazyFileRoute } from "@tanstack/react-router";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const RouteComponent: FC = () => {
  return (
    <Box>
      <Typography>Content from /reports/traffic</Typography>
    </Box>
  );
};

export const Route = createLazyFileRoute("/reports/traffic")({
  component: RouteComponent,
});
