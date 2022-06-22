# NTT DATA y UTN

## Proyecto final, API fullstack con React js, Node JS, TypeScript y Mongo DB.

### INTEGRANTES:

- [Matias Sanchez Villar](https://www.linkedin.com/in/matias-sanchez-villar/)

- [Ludmila Estefania Cordiviola](https://www.linkedin.com/in/ludmila-cordiviola-41360316a)

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

## **dataUser**

>Método get, para retornar informacion del usuario, nombre, apellido, fecha de nacimineto

#### GET

```
http://localhost:5000/api/v1/auth/dataUser/:id
```

#### RETURN JSON

```
{
    "_id": "62b37fb5760ee88fa0ffb642",
    "names": "Matias",
    "surname": "Sanchez",
    "birthDate": "1996-09-02T03:00:00.000Z",
    "syllabus": []
}
```

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


