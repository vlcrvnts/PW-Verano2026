# Comandos básicos de git
1. git init
Inicializa un nuevo repositorio Git.
Ejemplo y caso de uso: Acabas de crear una carpeta local en tu computadora
llamada mi-proyecto y quieres empezar a controlar sus versiones porque vas a
programar una nueva aplicación.
cd mi-proyecto
git init
2. git clone
Clona un repositorio Git existente.
Ejemplo y caso de uso: Te unes a un nuevo equipo de trabajo y necesitas descargar
el código del proyecto en tu computadora para empezar a trabajar, el cual está
alojado en GitHub.
git clone https://github.com/usuario/proyecto-equipo.git
3. git status
Comprueba el estado de los archivos del directorio de trabajo.
Ejemplo y caso de uso: Llevas una hora programando y no recuerdas exactamente qué
archivos modificaste, cuáles creaste nuevos o si dejaste algo a medias antes de hacer un commit.
git status (Mostrará una lista de archivos modificados en color rojo)
4. git add
Añade archivos al área de preparación.
Ejemplo y caso de uso: Terminaste de maquetar la página de contacto.html y creaste sus estilos
en estilos.css. Quieres empaquetar ambos archivos juntos para guardarlos.
git add contacto.html estilos.css
5. git commit
Consigna los cambios por etapas en el repositorio local.
Ejemplo y caso de uso: git commit -m "Feat: Agregar login con validaciones básicas"
6. git remote add
Añade una conexión de repositorio remoto.
Ejemplo y caso de uso: git remote add origin https://github.com/tu-usuario/tu-repositorio.git
7. git push
Empuja los cambios confirmados a un repositorio remoto.
Ejemplo y caso de uso: git push origin main
9. git pull
Obtener y fusionar cambios de un repositorio remoto.
Ejemplo y caso de uso: git pull origin main
10. git fetch
Obtener cambios de un repositorio remoto sin fusionar.
Ejemplo y caso de uso: git fetch origin
11. git branch
Lista, crea o elimina ramas.
Ejemplo y caso de uso: git branch feature-pasarela-pagos
12. git checkout
Cambiar entre ramas o restaurar archivos (método antiguo).
Ejemplo y caso de uso:
git checkout feature-pasarela-pagos
14. git merge
Fusiona los cambios de una rama en otra.
Ejemplo y caso de uso: git checkout main
git merge feature-pasarela-pagos
15. git rebase
Vuelve a aplicar los commits de una rama a otra para tener un historial más limpio.
Ejemplo y caso de uso: git checkout mi-rama
git rebase main
16. git log
Ver el historial de confirmaciones.
Ejemplo y caso de uso: git log --oneline
17. git diff
Muestra las diferencias entre los distintos estados del depósito.
Ejemplo y caso de uso: git diff auth.js
18. git reset
Deshacer los cambios restableciendo HEAD a un estado anterior.
Ejemplo y caso de uso: git reset config.env
19. git stash
Guarda temporalmente los cambios no comprometidos y restablece el directorio de trabajo.
Ejemplo y caso de uso: git stash
20. git stash pop
Aplica los últimos cambios almacenados al directorio de trabajo.
Ejemplo y caso de uso: git stash pop
21. git clean
Elimina los archivos sin seguimiento del repositorio.
Ejemplo: git clean -fd
22. git config
Configura las opciones de Git a nivel de sistema, global o local.
Ejemplo y caso de uso: git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
