document.addEventListener("DOMContentLoaded", function() {

    const current_page = window.location.pathname.split("/").pop()

    const nav_links = document.querySelectorAll("nav a")

    nav_links.forEach(link => {
        const href = link.getAttribute('href').split('/').pop()

        if (href === current_page) {
            link.classList.add('active')
        }

        if (current_page === '' && href === 'home.html') {
            link.classList.add('active')
        }
    })
})