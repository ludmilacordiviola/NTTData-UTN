import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ModalListening from "./ModalListening";
import ModalSelect from "./ModalSelect";

export default function TopicsApp({ img, title, description }) {
  const onClickStart = () => {
    //fetch a para traer todo el desarrollo de los temas
    //Luego ir a cada uno de los 4 componentes
    return (
      <>
        <ModalListening
          title="Titulo"
          playSound="PlaySoun"
          options={["option1", "option4", "option3", "option4"]}
        ></ModalListening>
        <ModalSelect
          title="Titulo"
          question="Question"
          options={["option1", "option4", "option3", "option4"]}
        ></ModalSelect>
      </>
    );
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickStart}>
          Start
        </Button>
      </CardActions>
    </Card>
  );
}
