import { Grid } from "@mui/material";
import TopicsApp from "../component/TopicsApp";

export default function Main() {
  const listTopics = [
    {
      id: "62b36bd92995b7a083a74104",
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
      id: "62b36bd92995b7a083a74104",
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
      id: "62b36bd92995b7a083a74104",
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
  ];

  return (
    <Grid container
    direction="row"
    justifyContent="space-around"
    alignItems="center"
    spacing={3}
    columns={{ xs: 4, sm: 8, md: 12 }}
    >

      {listTopics.map((value, index) => (
        <Grid item
        xs={2} sm={4} md={4} key={index}
        spacing={3}>
          <TopicsApp
            key={index}
            img={value.imagen}
            title={value.title}
            description={value.description}
            id={value.id}
          />
        </Grid>
      ))}
    </Grid>
  );
}
