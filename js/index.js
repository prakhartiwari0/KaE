
menu_list = document.querySelector('.nav_list');

menu_button = document.querySelector(".menu_icon")
// menu_button.addEventListener('click', menu_icon_change)


function menu_icon_change() {
    menu_button.classList.toggle("change");
    menu_open_or_close = (Array.from(menu_button.classList)).includes("change")
    // console.log()
    // menu_hidden = menu_list.style.display == 'none';
    if (menu_open_or_close) {
        menu_list.style.display = 'flex'
    }
    else {
        menu_list.style.display = 'none'        
    }

}

const form_search_button = document.querySelector('.search_button')

// give form_search_button a click event listener and prevent default actionform_search_button.addEventListener('click', (e) => {
form_search_button.addEventListener('click', (e) => {
    e.preventDefault()
})