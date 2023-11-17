window.onload = async function () {
    let response = await fetch('navbar.html');
    let data = await response.text();
    document.getElementById('navbar').innerHTML = data;

    let currentPage = window.location.pathname.split('/').pop();
    let links = document.querySelectorAll('#navbar a');
    for (let link of links) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('current-page');
            break;
        }
    }

    document.body.style.visibility = 'visible';
};