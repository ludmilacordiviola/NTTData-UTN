## **ENV**

>**URI_MONGO** Esta es la URI de conexion con mongo BD

>**JWT_SECRET** Contraseña para generar el jsonwebtoken

>**JWT_REFRESH** Contraseña para refrescar el jsonwebtoken

>**MODO=developer**

### **USERS**

## **REGISTER**

>Método post, para registrar un nuevo usuario, con una estrucutra JSON, el cual te retorna un token con el ID del usuario con jsonwebtoken, la cual se regenera cada 15'

#### POST

```
http://localhost:5000/api/v1/auth/register
```

#### JSON

```
{
    "names": "Matias",
    "surname": "Sanchez Villar",
    "birthDate": "09/02/1996",
    "email": "Matias@SanchezVillar.com",
    "password": "Pa_sSw0rdnE_W"
}
```

## **LOGIN**

>Método post, para iniciar sesion, con una estrucutra JSON, el cual te retorna un token con el ID del usuario con jsonwebtoken, la cual se regenera cada 15'

#### POST

```
http://localhost:5000/api/v1/auth/login
```

#### JSON

```
{
    "email": "Matias@SanchezVillar.com",
    "password": "Pa_sSw0rdnE_W"
}
```

## **REFRESH TOKEN**

>Método post, para refrescar el token

#### POST

```
http://localhost:5000/api/v1/auth/refresh
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjVkZDM0NTFkMDMzZWMyYzNlZGJjMyIsImlhdCI6MTY1NjA4NTgxMiwiZXhwIjoxNjU2MDg2NzEyfQ.LjioedxE4kZLvdwsXLQDQE2tb0dnyGUfBHQLhmB_yLg"
}
```

## **GET DATA USER**

>Método get, para retornar informacion del usuario, nombre, apellido, fecha de nacimineto

#### GET

```
http://localhost:5000/api/v1/auth/getDataUser
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo"
}
```

## **GET DATA SYLLABUS**

>Método get, para retornar el id del cuestionario realizado por el usuario

#### GET

```
http://localhost:5000/api/v1/auth/userSallybus
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo"
}
```

## **GET DATA EMAIL**

>Método get, para retornar el email del usuario

#### GET

```
http://localhost:5000/api/v1/auth/userEmail
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo"
}
```

## **LOGOUT**

>Método get, para cerrar session del usuario

#### GET

```
http://localhost:5000/api/v1/auth/logout
```

## **USER EMAIL**

>Método patch, para modificar el email del usuario

#### PATCH

```
http://localhost:5000/api/v1/auth/userEmail
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo",
    "email": "maatuitss@het.com"
}
```

## **USER PASSWORD**

>Método patch, para modificar la password del usuario

#### PATCH

```
http://localhost:5000/api/v1/auth/userPassword
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo",
    "password": "mati336MasM_2@het"
}
```

## **SET DATA USER**

>Método patch, para modificar el nombre, apellido y fecha de nacimiento del usuario

#### PATCH

```
http://localhost:5000/api/v1/auth/dataUser
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo",
    "names": "pepe",
    "surname": "Sancssshsez",
    "birthDate": "09/02/1996"
}
```

## **USER SALLYBUS**

>Método patch, para agregar el id del cuestionario por usuario

#### PATCH

```
http://localhost:5000/api/v1/auth/userSallybus
```

#### JSON

```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjM3ZmI1NzYwZWU4OGZhMGZmYjY0MiIsImlhdCI6MTY1NjAxNzk5MiwiZXhwIjoxNjU2MDE4ODkyfQ.u16_lzIKAPO5_6hWrwKyVmUMSQTF-4lAqFezKub_VPo",
    "syllabus": "62b36bd92995b7a083a74104"
}

### **SYLLABUS**

## **register**

>Método post, para retornar agregar un cuestionario

#### POST

```
http://localhost:5000/api/v1/syllabus/register
```

#### JSON

```
{
    "title": "Colores",
    "description": "indique los colores en ingles",
    "questionnarie": [
        {
            "question": "que color es este"
        }
    ]
}
```

## **HEAD SYLLABUS**

>Método get, para retornar la cabecera del cuestionario

#### GET

```
http://localhost:5000/api/v1/syllabus/
```

#### RETURN JSON

```
[
    {
        "_id": "62b36bd92995b7a083a74104",
        "title": "Colores",
        "description": "indique los colores en ingles"
    }
]
```

## **SYLLABUS QUESTIONNARIE**

>Método get, para retornar el cuerpo del cuestionario

#### GET

```
http://localhost:5000/api/v1/syllabus/:id
```

#### RETURN JSON

```
{
    "_id": "62b36bd92995b7a083a74104",
    "questionnarie": [
        {
            "question": "que color es este",
            "status": true,
            "_id": "62b36bd92995b7a083a74105"
        },
        {
            "question": "le parece este color",
            "status": true,
            "_id": "62b36bd92995b7a083a74106"
        }
    ]
}
```


