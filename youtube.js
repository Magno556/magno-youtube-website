let menu = document.querySelectorAll("#menu")
let sidebar = document.querySelector(".side-bar")

menu.onClick = function () {
    sidebar.classList.toggle("main-sidebar")
}
