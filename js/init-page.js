const nav = `
<ul>
    <li><a href="HW01.html">HW01</a></li>
    <li><a href="HW02.html">HW02</a></li>
    <li><a href="HW03.html">HW03</a></li>
    <li><a href="#">HW04</a></li>
    <li><a href="#">HW05</a></li>
    <li><a href="#">HWEX</a></li>
</ul>
`
document.getElementById("navbar").insertAdjacentHTML('afterbegin', nav);

let currentPage = window.location.pathname.split('/').pop();
let links = document.querySelectorAll('#navbar a');
for (let link of links) {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('current-page');
        break;
    }
}