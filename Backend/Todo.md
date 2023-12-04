# TODO

## Modelo de post

- Crear el paquete con el archivo
- Atributos del modulo
- Titulo
- Descripcion
- Imagen
- Usuario?
- Likes?
- Comentario?

## Controlador de post

- Crear el paquete y archivo de controlador
- Crear objeto a exportar
- Crear metodo create
- Crear metodo findAll
- Crear metodo findOneById

## Enrutador de Post

- Crear paquete y archivo principal de rutas para la API
- Creat enrutador de Post
- Crear Rutas para
  - Create
  - Find All
  - Find One By Id
- Crear controlador finndOneById

## Validacion de rutas

- Validacion manual
  - Middleware ()=>{validar} ()=>{} ()=>{}
- Express validator
- Reglas de EV
- Middleware de EV

## Implementacion de usuario

- Modelo de usuario
- Atributos
- Manejo de password
- Tools para el token
- Registro e inicio de sesion
- Rutas que requiren token - Middleware de token
- Implementacion de roles
- Completando la funcionalidad de Post
  - Verificar en save y delete que el post sea del usuario
  - Implementar toggle visibility
  - Implementar like
  - comentar
