import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Syllabus() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography>Titulo</Typography>
      <Box
        component="img"
        sx={{
          height: 70,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Typography>Titulo</Typography>
    </Stack>
  );
}
