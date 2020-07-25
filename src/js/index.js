import '../css/style.css';
import * as $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'magnific-popup/dist/magnific-popup.css'
import 'magnific-popup';

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function () { scroll(0, 0) });
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
        gallery: { enabled: true }
    });
});