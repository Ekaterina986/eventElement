function openClose(e) {
    const elButton = e.target;
    const elMenu = elButton.nextElementSibling;
    if (elMenu.classList.contains("dropdown__list_active")) {
        elMenu.classList.remove("dropdown__list_active");
    } else {
        elMenu.classList.add("dropdown__list_active");
    }

}
const listButtons = document.getElementsByClassName('dropdown__value');
for (const button of listButtons) {
    button.addEventListener('click', openClose)
}

function selectItem(e) {
    const elItem =e.currentTarget;
    const elMenu = elItem.parentElement;
    const elButton = elMenu.previousElementSibling;
    elMenu.classList.remove("dropdown__list_active");
    const val = elItem.textContent.trim();
    elButton.textContent = val;
    
    e.preventDefault();
}
const listMenuItems = document.getElementsByClassName('dropdown__item');
for (const menuItem of listMenuItems) {
    menuItem.addEventListener('click', selectItem)
}