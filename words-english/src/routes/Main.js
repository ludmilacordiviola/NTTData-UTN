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
    <Grid container direction="column" xs={4} sm={3} xl={1}>
      {listTopics.map((value, index) => (
        <Grid item>
          <TopicsApp
            key={index}
            img={value.imagen}
            title={value.title}
            description={value.description}
          />
        </Grid>
      ))}
    </Grid>
  );
}
