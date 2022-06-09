# NTT DATA y UTN

## Proyecto final, API fullstack con React js, Node JS, TypeScript y Mongo DB.

### INTEGRANTES:

- [Matias Sanchez Villar](https://www.linkedin.com/in/matias-sanchez-villar/)

- [Ludmila Estefania Cordiviola](https://www.linkedin.com/in/ludmila-cordiviola-41360316a)

## **ENV**

**URI_MONGO** Esta es la URI de conexion con mongo BD

**JWT_SECRET** Contraseña para generar el jsonwebtoken

**JWT_REFRESH** Contraseña para refrescar el jsonwebtoken

**MODO=developer**

## **REGISTER**

Método post, para registrar un nuevo usuario, con una estrucutra JSON, el cual te retorna un token con el ID del usuario con jsonwebtoken, la cual se regenera cada 15'

#### Ruta post

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

Método post, para iniciar sesion, con una estrucutra JSON, el cual te retorna un token con el ID del usuario con jsonwebtoken, la cual se regenera cada 15'

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
