import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Syllabus() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Typography
        variant="h3"
        sx={{
          p: 2,
          mt: 2
        }}
      >
        Titulo
      </Typography>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 0.9,
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Typography
        variant="body1"
        align="center"
        sx={{
          fontSize: 17,
          width: 0.9,
          p: 2,
        }}
      >
        Are you an elementary (CEFR level A1) or pre-intermediate (CEFR level
        A2) learner of English? Learn new words and practise your vocabulary. In
        this section you can listen to the pronunciation of the words and then
        do the exercises. There are worksheets too for offline practice.
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
      </Grid>
    </Stack>
  );
}
