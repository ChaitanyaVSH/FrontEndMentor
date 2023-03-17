const menuOpenButton = document.getElementById("menuOpenButton")
const menuCloseButton = document.getElementById("menuCloseButton")

const menu = document.getElementById("navUl");

const showMenu = () => {
    menu.style.right = 0;
    menu.style.display = "block"
    menuCloseButton.style.display = "block"
}
menuOpenButton.addEventListener("click", showMenu);


const hideMenu = () => {
    menu.style.display = "none";
    menu.style.right = "70%"
    menuCloseButton.style.display = "none"
}
menuCloseButton.addEventListener("click", hideMenu);


// window.onresize = () => {
//     hideMenu();
// };
