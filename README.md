# NUWE-CAIXABANK-TECH

Cristian Pérez(Frontend). 

> **React Cross-Platform challenge** 

NeoBANKS es una fintech (startup enfocada en el sector financiero) con mucho potencial que después de desarrollar su MVP utilizando plataformas LowCode quieren empezar a desarrollar toda su nueva infraestructura utilizando el ecosistema React.

Para poder desarrollar lo más rápido y ágil posible y ofrecer una solución multi dispositivo quieren utilizar React Native (móvil) como base y desde ahí poder desarrollar su versión web.

**Objetivos** 
Para evaluar cual es la mejor opción para ellos están planteando varias alternativas:

❌ Desarrollar 100% en React-Native y exportar a Mobile y a web empleando librerías que OS que hay en el mercado.

❌ Compartir código entre apps siempre que este no sean componentes de UI.

✅ Compartir lo máximo posible separando algunos componentes importantes para mejorar la performance de cada una de las apps y emplear librerías que no podrían ser compatibles con la primera opción.

## Porque he tomado ese camino? 

## ✔ Workspaces-Redux-Eslint...

La primera decisión que he tomado es utilizar un monorepo con "NPM Workspaces" para utilizar paquetes comunes que se utilizen en diferentes proyectos y plataformas.
En este caso he instalado redux y redux-toolkit para utilizar el manejo de llamadas a la api si fuera necessario , y tener un control del flujo del estado que sea reutilizable tanto en react como en react-native,tambien podriamos utilizar la misma configuración de eslint. 
Todo esto hace que sea mas mantenible tu codigo y mas facil de manejar.

## 📕Storybook
He decidido trabajar con esta gran libreria para documentar mis componentes, para ver las diferentes versiones y su caso de uso en mobile o web.
Es una gran ayuda que combinado con un design-system da una muy buena solidez al proyecto.

## Estructura de carpetas
![](/common/static/structure.png)



## Tecnologias
👌 React-Vite<br>
🧾 Npm-Workspaces<br>
📕 Storybook<br>
🎨 Styled-Components<br>
📎  Redux-Toolkit


