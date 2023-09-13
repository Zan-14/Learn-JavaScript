// Check the session 19 (near the end of the video) to know how this works.

// How to animate navbar
window.addEventListener('scroll',function() {
    const headElm = document.querySelector('.header');
    
    if (window.scrollY>0) {
        headElm.style = "background-color:white;z-index:1000"
    } else {
        headElm.style = "background-color:transparent"
    };
});


const navItems = document.querySelectorAll('.nav_menu_list_item');

navItems.forEach((menu) => {
    menu.addEventListener('click', function() {
        navItems.forEach((menu) => {
            menu.className.remove('active');
        })
        
        menu.className.toggle('active');
    })
})
