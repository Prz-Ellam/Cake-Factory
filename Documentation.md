# Programación Web de Capa Intermedia
## Temática
- Página web de una tienda en línea para comprar y vender productos
- HTML, CSS, JavaScript, PHP, MySQL, POO, MVC, UI/UX
---

## Requísitos

### Gestión de usuarios
- Registrar usuarios
  - Se debe poder crear, editar y eliminar un usuario de la aplicación
  - Solo los usuarios registrados pueden hacer uso de la aplicación
  - Los usuarios deben tener:
    | Atributos                     | Reglas |
    |-------------------------------|--------|
    | Correo electrónico            | <ul><li>Válido ([RFC 5322](https://www.rfc-editor.org/rfc/rfc5322.html))</li><li>Único</li></ul>|
    | Nombre de usuario             | <ul><li>Mínimo: 3 caracteres</li><li>Único</li></ul>|
    | Contraseña                    | <ul><li>Mínimo: 8 caracteres</li><li>Incluye: Una mayúscula, una minúscula, un número y un carácter especial</li></ul>|
    | Rol de usuario                | <ul><li>Roles: Superadministrador, administrador, vendedor, comprador (publico o privado)</li></ul>|
    | Foto de perfil                | |
    | Nombre completo               | |
    | Fecha de nacimiento           | <ul><li>Fecha: que no sea posterior a la fecha actual</li></ul> |
    | Sexo                          | |
    | Fecha de ingreso al portal    | <ul><li>Fecha: que no sea posterior a la fecha actual</li></ul> |
  - Los usuarios pueden ser públicos o privados
  - El superadministrador crea a los administradores, los compradores y vendedores se pueden dar de alta en la página
- Iniciar sesión
  - Las credenciales para iniciar sesión serán: Correo electrónico o Nombre de usuario, y contraseña
  - Opción para recordar en el navegador del cliente (cookies)
  - **Extra**: Autenticación por medio de Token
  - **Extra**: Recuperar contraseña por correo electrónico 
  - **Extra**: Login con redes sociales
- Perfil de usuario
  - El propio usuario:
    - Podrá editar sus datos (Correo electrónico, Nombre de usuario, Contraseña, Foto de perfil, Nombre completo, Fecha de nacimiento y Sexo) con las mismas validaciones que en el registro
  - Otros usuarios:
    - Todos podrán ver su foto de perfil y nombre de usuario
    - Privado: Solo especificar que el usuario es privado
    - Publico: Mostrar las listas publicas con su contenido
    - Vendedor: Mostrar los productos autorizados por el administrador
    - Administrador: Mostrar los productos que fueron autorizados por este administrador
    - TODO: Poner todas las posibles combinaciones
- Buscar usuario
  - Se pueden buscar un usuario o usuarios a través de la barra de busqueda, por su nombre o nombre completo.
- Carrito de compras
  - Un usuario comprador tiene un carrito de compras

### Gestion de productos
- Registrar productos
  - Debe estar un producto previamente autorizado por un administrador para ser visible
  - Los productos deben tener:
    | Atributos                     | Reglas  |
    |-------------------------------|---------|
    | Nombre                        |   |
    | Descripción                   |   |
    | Imágenes                      | <ul><li>Mínimo: 3</li></ul>  |
    | Video                         | <ul><li>Mínimo: 1</li></ul> |
    | Categoría                     | <ul><li>Mínimo: 1</li></ul> |
    | Cotizar o vender              | |
    | Precio                        | |
    | Cantidad disponible           | |
    | Valoración                    | |
    | Comentarios                   | |
  - Se mostraran los productos más vendidos, recomendados o populares en el dashboard de los clientes
  - Se pueden buscar los productos por su nombre

### Gestion de categorías
- Crear categorias
  - Se pueden crear categorias nuevas o utilizar ya existentes
  - Las categorias deben tener:
    | Atributos                     | Reglas    |
    |-------------------------------|-----------|
    | Nombre                        |           |
    | Descripción                   |           |
    | Vendedor que la creó          |           |

### Gestión de listas
- Registrar listas
  - Se puede crear, editar y eliminar una lista de la aplicación
  - Las listas deben tener:
    | Atributos                     | Reglas    |
    |-------------------------------|-----------|
    | Nombre                        |           |
    | Descripción                   |           |
    | Imágenes                      | Opcional  |
    | Publica o privada             |           |

### Carrito de compras
- Cada usuario tendra un carrito de compras para añadir productos
- ¿Que pasa si hay 3 productos en existencia, un usuario mete a su carrito dos y durante el proceso alguien compra 2?

### Venta
- Dos métodos de pago (puede ser PayPal o Tarjeta)

### Chat
- Sistema de mensajeria para cotizar productos


### Reportes
- Reporte de venta (Vendedor)
  - Filtros: Rango de fechas, categoria (una o todas)
- Reporte de compra (Comprador)








### Notas
- Regex de RFC (5322): (
?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

Trim cadenas

password_hash

bin2hex(random_bytes(16))


$login = $_POST['login'];
$password = $_POST['password'];

SELECT * FROM users WHERE (username = $login or email = $login) and password = $password


¿Solo el super admin tiene control de los admins, o tambien de los demas?

La barra de navegación ahora tendra el logo de la aplicación, la caja de busqueda, boton de inicio de sesión, registro, carrito de compras y favoritos, posiblemente terminos unificando el inicio de sesión y registro para no llenarnos de botones

https://magenest.com/en/add-to-wishlist/



- Debe tener un login donde los compradores y vendedores se den de alta
- Debe tener una página de registro para las compradores y vendedores
- Debe tener una página de perfil propia para editar datos
- Debe tener una página de perfil que será la que los demás van a ver
- Debe tener una página con las listas
- Debe tener una página para ver una lista individual
- Debe tener una página de detalles de producto, con comentarios y recomendados
- Debe tener una página del carrito de compras
- Debe tener una página para el proceso de checkout
- Debe tener una página de gestion de usuarios para el administrador, para crearlos
- Debe tener la página de inicio
- Debe tener la landing page
- Debe tener una página para chat
- Debe tener una página para consulta de ventas
- Debe tener una página para pedidos



- Los usuarios de rol vendedor son los que dan de alta productos
- Los usuarios de rol administrador podran ver los productos que se solicitaron dar de alta










