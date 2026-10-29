# Portafolio Interactivo

## 1. Descripción del proyecto

Este proyecto consiste en el desarrollo de una página web denominada **Portafolio Interactivo**, realizada como parte de la Práctica Calificada 3 del curso Hojas de Estilo en Cascada Avanzado de la UTP.

El objetivo es presentar proyectos y demostrar el uso de Bootstrap 5, transformaciones CSS, animaciones y diseño responsivo.

## 2. Tecnologías utilizadas

- **HTML5:** estructura y contenido de la página web.
- **CSS3:** estilos personalizados, transiciones, transformaciones y animaciones.
- **Bootstrap 5:** barra de navegación, sistema de cuadrícula, tarjetas, formulario y botones.
- **JavaScript:** validación de demostración del formulario y comportamiento del menú móvil.

## 3. Estructura del proyecto

```text
PC3_Portafolio_Interactivo/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── README.md
```

## 4. Transformaciones CSS 2D

Se implementaron tres efectos visuales en las tarjetas de proyectos:

- **Rotación (`rotate`):** la tarjeta Proyecto Creativo gira al pasar el cursor.
- **Escalado (`scale`):** la tarjeta Diseño Digital aumenta de tamaño.
- **Traslación (`translate`):** la tarjeta Desarrollo Web se desplaza hacia arriba.

Se utilizó la propiedad `transition` para que los cambios sean suaves.

## 5. Transformación CSS 3D

Se implementó una tarjeta interactiva utilizando:

- `perspective`: crea una sensación de profundidad.
- `transform-style: preserve-3d`: permite conservar la representación tridimensional de los elementos hijos.
- `rotateX()` y `rotateY()`: inclinan la tarjeta en los ejes X e Y.
- `transition`: suaviza el efecto al pasar el cursor.

## 6. Animaciones CSS

Se desarrollaron los siguientes efectos:

- **Animación de entrada:** utiliza `@keyframes aparecer` para mostrar el título principal mediante un desplazamiento vertical y un cambio de opacidad.
- **Indicador de carga:** utiliza `@keyframes girar` para hacer rotar un círculo continuamente.
- **Ocultamiento del indicador:** utiliza `@keyframes ocultarLoader` para ocultar el indicador después de un breve intervalo.

También se emplean propiedades como `animation-duration`, `animation-iteration-count` y `animation-timing-function`.

## 7. Diseño responsivo

Se utilizó el sistema de cuadrícula de Bootstrap 5 con `container`, `row`, `col-12`, `col-md-6` y `col-lg-4`.

Se añadieron media queries para adaptar algunos estilos a pantallas pequeñas. La barra de navegación utiliza el menú hamburguesa de Bootstrap.

## 8. Formulario de contacto

El formulario incluye los campos Nombre, Email y Mensaje, además