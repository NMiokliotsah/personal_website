import '../css/style.css';
import * as $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css'

$(document).ready(function () {
    $(window).scroll(function () {
        this.scrollY > 20 ? $('.navbar').addClass('sticky') : $('.navbar').removeClass('sticky');
    });

    $('.menu-toggler').click(function () {
        $(this).toggleClass('active');
        $('.navbar-menu').toggleClass('active');
    });
});