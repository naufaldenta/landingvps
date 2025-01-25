// /* Foxed on Scroll */
// document.addEventListener("DOMContentLoaded", function(){

//     window.addEventListener('scroll', function() {

//       if (window.scrollY > 200) {
//         document.getElementById('fixedR').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('fixedR').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//     });
//   }); 

// NAVBAR SCRIPT 1

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            document.getElementById('fixedR').classList.add('fixed-top');
            // Tambahkan padding top untuk menunjukkan konten di balik navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbarHeight + 'px';
        } else {
            document.getElementById('fixedR').classList.remove('fixed-top');
            // Hapus padding top dari body
            document.body.style.paddingTop = '0';
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Toggle Offcanvas for mobile view
    const navbarToggler = document.querySelector(".navbar-toggler");
    const offcanvas = document.querySelector("#navbarType");

    navbarToggler.addEventListener("click", function () {
        offcanvas.classList.toggle("show");
    });

    // Handle dropdown menu toggle
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');
    dropdowns.forEach(function (dropdown) {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');

        dropdownToggle.addEventListener("click", function (e) {
            // Prevent the default link behavior
            e.preventDefault();

            // Close other dropdowns when one is opened
            dropdowns.forEach(function (otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.querySelector('.dropdown-menu').classList.remove('show');
                }
            });

            // Toggle this dropdown's visibility
            dropdownMenu.classList.toggle("show");
        });
    });

    // Close dropdown menu when clicking outside
    document.addEventListener("click", function (e) {
        dropdowns.forEach(function (dropdown) {
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            if (!dropdown.contains(e.target)) {
                dropdownMenu.classList.remove("show");
            }
        });
    });
});

/* Set Coupon Code Expires */
var countDownDate = new Date("December 25, 2022 00:00:00").getTime();
var x = setInterval(function () { var e = countDownDate - new Date().getTime(); $("#sale-d").php(Math.floor(e / 864e5)), $("#sale-h").php(Math.floor(e % 864e5 / 36e5)), $("#sale-m").php(Math.floor(e % 36e5 / 6e4)), $("#sale-s").php(Math.floor(e % 6e4 / 1e3)), e < 0 && (clearInterval(x), $(".sale-banner").remove()) }, 1e3); $("#btnCode").click(function () { var e = $("<input>"); $("body").append(e), e.val($("#btnCode span").text()).select(), document.execCommand("copy"), e.remove(), Swal.fire("Good job!", "You clicked the button!", "success"), Swal.fire({ title: "Successful", text: "Coupon has been copied to clipboard!", icon: "success", button: "Exit" }) });

/* Web Site Policies */
window.addEventListener("load", function () { window.wpcc.init({ "colors": { "popup": { "background": "#1A1C1E", "text": "#FFFFFF", "border": "#1873D3" }, "button": { "background": "#1873D3", "text": "#FFFFFF" } }, "corners": "small", "transparency": "100", "content": { "href": "hhtps://yoursite.com/legal/" }, "position": "bottom-right" }) });