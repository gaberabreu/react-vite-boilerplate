import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2 }}
        >
          App.tsx {count}
        </Typography>
        <Button
          variant="contained"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Click me
        </Button>
      </Box>
    </Container>
  );
};

export default App;
