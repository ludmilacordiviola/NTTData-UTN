import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useEffect, useState } from "react";
import ModalSelect from "./ModalSelect";
import ModalWrite from "./ModalWrite";
import ModalListening from "./ModalListening";

export default function TopicsApp({ img, title, description, id }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [stateModal, setStateModal] = useState({
    modalSelect: false,
    modalListening: false,
    modalWrite: false
  });


  const closeFn = () => setModalOpen(false);

  const onClickStart = () => setModalOpen(true);

  useEffect(() => {
    
  }, [modalOpen]);

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
          <Typography component={'p'} variant="h5">
            {title}
          </Typography>
          <Typography component={'p'} variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickStart}>
          Start
        </Button>
        {modalOpen && <ModalListening id closeFn={closeFn} open={modalOpen} />}
      </CardActions>
    </Card>
  );
}
