import { Container, Grid, Menu } from "@mui/material";
import TopicsApp from "../component/TopicsApp";

export default function Main() {
  const listTopics = [
    {
      id: "62b36bd92995b7a083a74105",
      title: "Colors",
      description: "Aprenda sobre colores primarios en ingles",
      imagen: "https://th.bing.com/th/id/R.92a524780729b6e6b79895ff378cd5e7?rik=TIOrNuKBgLhF3g&riu=http%3a%2f%2fwww.ecured.cu%2fimages%2fthumb%2f9%2f96%2fRgb.png%2f260px-Rgb.png&ehk=rWd4LOGmVpJINeJ1vX32OJkF4K05eDqiVaTenXzvFVU%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      id: "62b36bd92995b7a083a74104",
      title: "Clothes",
      description: "Aprenda las prendas basicas de un atuendo",
      imagen: "https://media.istockphoto.com/vectors/showroom-rack-with-women-clothes-flat-cartoon-vector-illustration-vector-id1217448145?k=6&m=1217448145&s=170667a&w=0&h=kUIwqJwO2dcryRp2yQtjwq25lJBB55Hmp7lNmu9QdAQ=",
    },
    {
      id: "62b36bd92995b7a083a74107",
      title: "Body Parts",
      description: "Aprenda vocabulario sobre las partes del cuerpo",
      imagen: "https://i.pinimg.com/originals/cf/59/8c/cf598cddd80bfb8ba1c1c115bfdee194.jpg",
    },
    {
      id: "62b36bd92995b7a083a74108",
      title: "Food",
      description: "Aprenda vocabulario sobre comidas",
      imagen: "https://media.istockphoto.com/vectors/set-of-fresh-morning-food-european-breakfast-cartoon-vector-vector-id519871376?k=6&m=519871376&s=170667a&w=0&h=i-r9jElfgvs7nyO72-r_-mmEhfYWHEkLxQ7oVx5UIlw=",
    },
    {
      id: "62b36bd92995b7a083a74101",
      title: "Animals",
      description: "Aprenda vocabulario sobre animales",
      imagen: "https://media.istockphoto.com/vectors/set-of-colorful-funny-cartoon-animals-from-a-zoo-isolated-vector-vector-id949159220?k=6&m=949159220&s=170667a&w=0&h=Qtv1t7j7gpj9kxi-vTkHL6AJbJRiDcCT_cVxPrHVXik=",
    },
    {
      id: "62b36bd92995b7a083a74102",
      title: "Actions",
      description: "Aprenda vocabularios sobre acciones cotidianas",
      imagen: "https://media.istockphoto.com/vectors/cartoon-boys-and-girls-doing-different-actions-vector-id450237605?k=6&m=450237605&s=170667a&w=0&h=-Jgb1FtakgLd2Ear-bCqMxmyPNjoap3wxoiuVPX71tg=",
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
