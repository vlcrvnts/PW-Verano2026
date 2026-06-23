# Comandos Básicos de Git

Guía de referencia rápida con los comandos más utilizados en el día a día con Git.

---

## 1. `git init`

Inicializa un nuevo repositorio Git.

**Caso de uso:** Acabas de crear una carpeta local llamada `mi-proyecto` y quieres empezar a controlar sus versiones.

```bash
cd mi-proyecto
git init
```

---

## 2. `git clone`

Clona un repositorio Git existente.

**Caso de uso:** Te unes a un nuevo equipo de trabajo y necesitas descargar el código del proyecto alojado en GitHub.

```bash
git clone https://github.com/usuario/proyecto-equipo.git
```

---

## 3. `git status`

Comprueba el estado de los archivos del directorio de trabajo.

**Caso de uso:** Llevas una hora programando y no recuerdas exactamente qué archivos modificaste, cuáles creaste nuevos, o si dejaste algo a medias antes de hacer un commit.

```bash
git status
# Mostrará una lista de archivos modificados en color rojo
```

---

## 4. `git add`

Añade archivos al área de preparación (staging area).

**Caso de uso:** Terminaste de maquetar `contacto.html` y creaste sus estilos en `estilos.css`. Quieres empaquetar ambos archivos juntos para guardarlos.

```bash
git add contacto.html estilos.css
```

---

## 5. `git commit`

Consigna los cambios preparados en el repositorio local.

**Caso de uso:** Ya preparaste tus archivos con `git add` y quieres guardar esa "foto" de tu proyecto de forma permanente en el historial con un mensaje descriptivo.

```bash
git commit -m "Feat: Agregar login con validaciones básicas"
```

---

## 6. `git remote add`

Añade una conexión a un repositorio remoto.

**Caso de uso:** Creaste tu repositorio localmente con `git init`, fuiste a GitHub a crear un repositorio vacío en la nube, y ahora necesitas vincular tu computadora con ese servidor.

```bash
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
```

---

## 7. `git push`

Empuja los commits locales a un repositorio remoto.

**Caso de uso:** Hiciste 3 commits locales por la noche y quieres subirlos a GitHub para que tu equipo pueda ver tus avances por la mañana.

```bash
git push origin main
```

---

## 8. `git pull`

Obtiene y fusiona cambios de un repositorio remoto.

**Caso de uso:** Llegas a trabajar y tu compañera te avisa que subió la corrección de un bug. Usas este comando para descargar y fusionar sus cambios en tu código local.

```bash
git pull origin main
```

---

## 9. `git fetch`

Obtiene cambios de un repositorio remoto **sin fusionarlos**.

**Caso de uso:** Quieres revisar si hay cambios nuevos en el repositorio remoto, pero no quieres que se mezclen con tu código actual de inmediato; solo quieres inspeccionarlos.

```bash
git fetch origin
```

---

## 10. `git branch`

Lista, crea o elimina ramas.

**Caso de uso:** Te asignaron la tarea de crear una pasarela de pagos. No quieres arruinar el código que ya funciona en `main`, así que decides crear una rama aislada para experimentar.

```bash
git branch feature-pasarela-pagos
```

---

## 11. `git checkout`

Cambia entre ramas o restaura archivos *(método antiguo)*.

**Caso de uso:** Una vez creada la rama `feature-pasarela-pagos`, necesitas moverte a ella para que los cambios que hagas queden guardados ahí.

```bash
git checkout feature-pasarela-pagos
```

> **Nota:** En versiones modernas de Git se recomienda usar `git switch feature-pasarela-pagos`, aunque `checkout` sigue siendo muy utilizado.

---

## 12. `git merge`

Fusiona los cambios de una rama en otra.

**Caso de uso:** Terminaste la pasarela de pagos en tu rama secundaria y funciona perfecto. Te mueves a `main` y traes todo ese código nuevo a la rama principal.

```bash
git checkout main
git merge feature-pasarela-pagos
```

---

## 13. `git rebase`

Vuelve a aplicar los commits de una rama sobre otra para mantener un historial más limpio.

**Caso de uso:** Llevas semanas trabajando en una rama mientras tus compañeros subieron muchos cambios a `main`. Quieres que tu historial parezca que empezaste a programar hoy mismo sobre la versión más reciente, evitando commits de fusión desordenados.

```bash
git checkout mi-rama
git rebase main
```

---

## 14. `git log`

Ver el historial de confirmaciones.

**Caso de uso:** El sistema empezó a fallar y necesitas revisar la lista de los últimos cambios, quién los hizo y en qué fecha para encontrar la solución.

```bash
git log --oneline
```

---

## 15. `git diff`

Muestra las diferencias entre los distintos estados del repositorio.

**Caso de uso:** Modificaste una función compleja en `auth.js` pero no recuerdas exactamente qué líneas borraste o añadiste en comparación con la última versión guardada.

```bash
git diff auth.js
```

---

## 16. `git reset`

Deshace cambios restableciendo HEAD a un estado anterior.

**Caso de uso:** Agregaste por error un archivo al área de preparación (por ejemplo, un archivo de configuración con contraseñas) y quieres sacarlo de ahí.

```bash
git reset config.env
```

---

## 17. `git stash`

Guarda temporalmente los cambios no confirmados y limpia el directorio de trabajo.

**Caso de uso:** Estás a la mitad de una tarea compleja y tu jefe te pide corregir un error crítico de inmediato. No quieres hacer un commit a medias, así que "escondes" tus cambios temporalmente para dejar tu entorno limpio.

```bash
git stash
```

---

## 18. `git stash pop`

Aplica los últimos cambios almacenados al directorio de trabajo.

**Caso de uso:** Ya corregiste el error crítico y lo subiste. Ahora estás listo para retomar la tarea que tenías pendiente, así que recuperas tus cambios del "cajón" temporal.

```bash
git stash pop
```

---

## 19. `git clean`

Elimina los archivos sin seguimiento del repositorio.

**Caso de uso:** Estuviste haciendo pruebas, se generaron carpetas vacías y archivos temporales no rastreados, y quieres limpiar tu carpeta de trabajo por completo.

```bash
git clean -fd
```

---

## 20. `git config`

Configura las opciones de Git a nivel de sistema, global o local.

**Caso de uso:** Acabas de instalar Git en una computadora nueva y necesitas identificarte para que tus commits lleven tu nombre y correo electrónico.

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```
