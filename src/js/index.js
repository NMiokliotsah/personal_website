import '../css/style.css';
import * as $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'magnific-popup';

$(document).ready(function () {
    $(window).scroll(function () {
        this.scrollY > 20 ? $('.navbar').addClass('sticky') : $('.navbar').removeClass('sticky');
    });

    $('.menu-toggler').click(function () {
        $(this).toggleClass('active');
        $('.navbar-menu').toggleClass('active');
    });

    $('.works').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {enabled: true}
    });
});