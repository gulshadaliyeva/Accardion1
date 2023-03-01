let menus = document.querySelectorAll(".menu a")
let wrappers = document.querySelectorAll(".wrapper")
menus.forEach(menu => {
    menu.onclick = function (e) {
        document.querySelector(".menu a.active").classList.remove("active")
        this.classList.add("active")
        wrappers.forEach(wrapper => {
            if (wrapper.parentElement.getAttribute("data-id").split(",").includes(menu.getAttribute("data-id"))) {
                wrapper.parentElement.classList.remove("d-none")
                wrapper.parentElement.classList.add("d-block")
            } else {
                wrapper.parentElement.classList.add("d-none")
            }
        });
    }
});