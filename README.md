# NTT DATA y UTN

## Proyecto final, API fullstack con React js, Node JS, TypeScript y Mongo DB.

### INTEGRANTES:

- [Matias Sanchez Villar](https://www.linkedin.com/in/matias-sanchez-villar/)

- [Ludmila Estefania Cordiviola](https://www.linkedin.com/in/ludmila-cordiviola-41360316a)

### ENV

**URI_MONGO** Esta es la URI de conexion con mongo BD
**JWT_SECRET** Contraseña para generar el jsonwebtoken
**JWT_REFRESH** Contraseña para refrescar el jsonwebtoken
**MODO=developer**

### register

Método post, el cual te retorna un token con el ID del usuario con jsonwebtoken, la cual se regenera cada 15'

```
http://localhost:5000/api/v1/auth/register
```