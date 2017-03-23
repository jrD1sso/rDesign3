/*global $, jQuery*/
$(function () {
    'use strict';
    $('.navbar li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    $('.navbar li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - (50)
        }, 1000);
    });
    
    $('.infoList li').on('click', function () {
        $(this).addClass('select').siblings().removeClass('select');
        $('.infoContent div').hide();
        $('.' + $(this).data('class')).fadeIn('slow');
        //$('.infoContent div').hasClass($(this).data('class')).css('display', 'block').siblings().css('display', 'none');
    });
    
    //Nice scroll
    $("html").niceScroll({
        cursorcolor: '#ffe4e1',
        cursorwidth: '7px',
        cursorborder: '1px solid #ffe4e1',
        cursorborderradius: '3px',
        mousescrollstep: '50',
        scrollspeed: '80'
    });
});