let nav = `
<ul>
    <li><a href="index.html"><span class ="fa fa-home"></span> HOME</a></li>
    <li><a href="HW01.html"><span class ="fa fa-calculator"></span> HW01</a></li>
    <li><a href="HW02.html"><span class ="fa fa-file-text"></span> HW02</a></li>
    <li><a href="HW03.html"><span class ="fa fa-star-half-o"> HW03</a></li>
    <li><a href="HW04.html"><span class ="fa fa-camera-retro"></span> HW04</a></li>
    <li><a href="HW05.html"><span class ="fa fa-calendar"> HW05</a></li>
    <li><a href="HWEX.html"><span class ="fa fa-map-marker"> HWEX</a></li>
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