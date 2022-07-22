import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Select } from "@mui/material";
import { useState } from "react";
import ModalSelect from "./ModalSelect";
import ModalWrite from "./ModalWrite";
import ModalListening from "./ModalListening";

export default function TopicsApp({ img, title, description, id }) {
  const [stateModal, setStateModal] = useState({
    Select: false,
    Listening: false,
    Write: false,
  });

  const closeFn = () => {
    switch (stateModal) {
      case stateModal.Select:
        console.log("sss");
        break;
      case stateModal.Listening:
        console.log("lllll");
        break;
      case stateModal.Write:
        console.log("wwwww");
        break;
      default:
        setStateModal({
          Select: false,
          Listening: false,
          Write: false,
        });
        break;
    }
  };

  const onClickStart = () => {
    setStateModal({ ...stateModal, Select: true });
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
          <Typography component={"p"} variant="h5">
            {title}
          </Typography>
          <Typography component={"p"} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickStart}>
          Start
        </Button>
        {stateModal.Listening && (
          <ModalListening id closeFn={closeFn} open={stateModal.Listening} />
        )}
        {stateModal.Select && (
          <ModalSelect id closeFn={closeFn} open={stateModal.Select} />
        )}
        {stateModal.Write && (
          <ModalWrite id closeFn={closeFn} open={stateModal.Write} />
        )}
      </CardActions>
    </Card>
  );
}
