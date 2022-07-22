import { Container, Grid, Menu } from "@mui/material";
import TopicsApp from "../component/TopicsApp";

export default function Main() {
  const listTopics = [
    {
      id: "62b36bd92995b7a083a74105",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
    {
      id: "62b36bd92995b7a083a74104",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
    {
      id: "62b36bd92995b7a083a74107",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
    {
      id: "62b36bd92995b7a083a74108",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
    {
      id: "62b36bd92995b7a083a74101",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
    {
      id: "62b36bd92995b7a083a74102",
      title: "Colores",
      description: "indique los colores en ingles",
      imagen: "",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ m: 2 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        {listTopics.map((value) => (
          <Grid item xs={4} sm={4}  key={value.id}>
            <TopicsApp
              img={value.imagen}
              title={value.title}
              description={value.description}
              id={value.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
