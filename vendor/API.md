# Propuesta de la API creada desde cero

Para este proyecto el backend expondrá varias HTTP API, estas APIs son las mismas que usará el frontend para realizar todas las acciones como guardar productos, categorías, editar listas de deseos etc.

## HTTP APIs
- [API de usuarios](##Usuarios)
- [API de productos](##Productos)
- [API de categorías](##Categorias)
- [API de listas de deseos]()
- [API de carrito de compras]()
- [API de ordenes]()
- [API de chat]()


# Usuarios

## Crear usuario
### Request
```
    POST api/v1/users
    Accept: multipart/formdata
```
| Nombre | Tipo | Requerido |
| ------ | ---- | --------- |
| picture | file | true |
| email  | string | true |
| username | string | true |
| birthdate | string | true |
| firstname | string | true |
| lastname | string | true |
| visibility | integer | true |
| password | string | true |

### Response
```
    200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "id": 1,
        "token": "h85n43iev484wj0ewssijwd"
    }
```

## Actualizar usuario
### Request
```
    PUT api/v1/users/:id
    Accept: multipart/formdata
    Authorization: {token}
```

| Nombre | Tipo | Requerido |
| ------ | ---- | --------- |
| picture | file | false |
| email  | string | false |
| username | string | false |
| birthdate | string | false |
| firstname | string | false |
| lastname | string | false |
| visibility | integer | false |
| password | string | false |

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "status": true
        "message": "El usuario ha sido actualizado"
    }
```

## Eliminar usuario
### Request
```
    DELETE api/v1/users/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "status": true
        "message": "El usuario ha sido eliminado"
    }
```

## Actualizar contraseña
### Request
```
    PUT api/v1/users/:id/password
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "status": true
        "message": "La contraseña ha sido actualizada"
    }
```

## Iniciar sesión
### Request
```
    POST api/v1/login
    Accept: application/json
    Content-Type: application/json
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "status": true
        "message": "La contraseña ha sido actualizada"
    }
```

## Obtener usuarios
### Request
```
    GET api/v1/users?count=10&page=1
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```


# Productos

### Crear producto
```
    POST api/v1/products
    Accept: multipart/formdata
    Authorization: {token}
```

### Actualizar producto
```
    POST api/v1/products/:id
    Accept: multipart/formdata
    Authorization: {token}
```

### Eliminar producto
```
    DELETE api/v1/products/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Obtener producto
```
    GET api/v1/products/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Obtener productos
```
    GET api/v1/products
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Obtener productos de usuario
```
    GET api/v1/products/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```


# Categorías

## Crear categoría
Crea una nueva categoría

### Request
```
    POST api/v1/categories
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}

    {
        "name": "Frutas",
        "description": "Variedad de diferente sabor"
    }
```

### Response
```
    200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "id": 1
    }
```

### Status codes
| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Creado éxitosamente             |
| 400     | Errores (JSON inválido, faltan campos, campos inválidos etc.) |
| 401     | Lo esta autorizado |
| 403     | Acceso denegado |


## Editar categoría
Edita una categoría existente a través de un id

### Request
```
    PUT api/v1/categories/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}

    {
        "name": "Frutas",
        "description": "Variedad de diferente sabor"
    }
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "id": 1,
        "name": "Frutas",
        "description": "Variedad de diferente sabor"
    }
```

### Status codes
| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Editada éxitosamente             |
| 400     | Errores (JSON inválido, faltan campos, campos inválidos etc.) |
| 401     | Lo esta autorizado |
| 403     | Acceso denegado |
| 404     | No se encontró la categoría solicitada |

## Eliminar categoría
Elimina una categoría existente a través de un id.
Esta operación no se puede revertir.

### Request
```
    DELETE api/v1/categories/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "status": true
        "message": "La categoría ha sido eliminada"
    }
```

| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Eliminada éxitosamente             |
| 400     | Petición inválida |
| 401     | No esta autorizado |
| 403     | Acceso denegado |
| 404     | No se encontró la categoría solicitada |

## Obtener categoría
Devuelve la información de una categoría a través de un id

### Request
```
    GET api/v1/categories/:id
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    {
        "id": 1,
        "name": "Frutas",
        "description": "Variedad de diferente sabor"
    }
```

| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Solicitud éxitosa             |
| 400     | Petición inválida |
| 401     | No esta autorizado |
| 403     | Acceso denegado |

## Obtener categorías
Devuelve todas las categorías que no hayan sido previamente eliminadas

### Request
```
    GET api/v1/categories?perpage=10&page=1
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    [
        {
            "id": 1,
            "name": "Frutas",
            "description": "Variedad de diferente sabor"
        },
        {
            "id": 2,
            "name": "Chocolates",
            "description": "Los favoritos de la gente"
        },
        {
            "id": 3,
            "name": "Nevados",
            "description": "Para tus cumpleaños"
        }
    ]
```

| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Solicitud exitosa             |
| 400     | Petición inválida |
| 401     | No esta autorizado |
| 403     | Acceso denegado |

## Obtener categorías de producto
Devuelve todas las categorías a las que pertenezca un producto a través del id de su producto

### Request
```
    GET api/v1/products/:id/categories
    Accept: application/json
    Content-Type: application/json
    Authorization: {token}
```

### Response
```
    HTTP/1.1 200 OK

    Content-Type: application/json; charset=UTF-8

    [
        {
            "id": 1,
            "name": "Frutas",
            "description": "Variedad de diferente sabor"
        },
        {
            "id": 3,
            "name": "Nevados",
            "description": "Para tus cumpleaños"
        }
    ]
```

| Estatus | Descripción                     |
| ------- | ------------------------------- |
| 200     | Solicitud exitosa             |
| 400     | Petición inválida |
| 401     | No esta autorizado |
| 403     | Acceso denegado |









## Listas de deseos

### Crear lista de deseos

### Editar lista de deseos

### Eliminar lista de deseos

### Obtener listas de deseos

### Obtener listas de deseos de usuario


## Carrito de compras

### Añadir producto al carrito

### Eliminar producto del carrito


## Ordenes


## Chat