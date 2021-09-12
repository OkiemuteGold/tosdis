let dropDownToggler = document.querySelector(".drop_down .nav_link");
let subMenu = document.querySelector(".sub_menu");

dropDownToggler.addEventListener("click", () => {
    subMenu.classList.toggle("display_block");
    console.log("clicked");
})