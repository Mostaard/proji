jQuery(document).ready(function ($) {
    "use strict"; // Start of use strict

    window.sr = ScrollReveal();
    sr.reveal('.sr-about', {duration: 750}, 250);
    sr.reveal('.sr-icon', {duration: 550}, 80);
    sr.reveal('.sr-pic', {duration: 650}, 180);

    $(document).on('click', '.js-scroll-trigger', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 1500);
    })

    $('#content').scrollspy();

    if ($(window).scrollTop() + $(window).height() + 220 >= $(document).height() || $(window).scrollTop() == 0) {
        $('.footer-right').addClass('bottom');
    } else {
        $('.footer-right').removeClass('bottom');
    }


    $(function () {
        $(document).scroll(function () {
            var $nav = $(".villa-nav");
            var $brand = $(".brand-extra");
            var $footer = $(".book-absolute");
            var $spacer = $(".nav-spacer");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $brand.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $footer.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            $spacer.toggleClass('scrolled', $(this).scrollTop() > $nav.height());

            if ($(window).scrollTop() + $(window).height() + 900 >= $(document).height()) {
                $('.book-absolute').addClass('bottom');
            } else {
                $('.book-absolute').removeClass('bottom');
            }

        });
    });

    $('.close').click(function () {
        $('.custom-modal').hide();
    });

    $('#sendmailbtn').click(function () {
        $.ajax({
            url: '/mail',
            data: $('#mail-form').serialize(),
            type: 'POST',
            dataType: 'json',
            success: function (response) {
                $('#modal-mail-field').html("Your mail : " + response.email);
                $('#modal-tel-field').html("Your tel : " + response.tel);
                $('#modal-firstname-field').html("Your first name : " + response.first_name);
                $('#modal-lastname-field').html("Your last name : " + response.last_name);
                $('#modal-message-field').html("Your message : " + response.message);
                $('.mail-info-modal').modal('show');
                $('#mail-form').trigger("reset");
            },
            error: function (error) {
                console.log(error);
                $('#modal-mail-field').html("<p>Something went wrong, please try again or send a mail to vandermostenjonas@gmail.com to report this problem.</p>");
                $('.mail-info-modal').modal('show');
            }
        });
    });



});

function showImage(thumb_id) {
    id = thumb_id.substring(10);
    url = document.getElementById('url_' + id).innerHTML;
    description = document.getElementById('description_' + id).innerHTML;
    title = document.getElementById('title_' + id).innerHTML;
    modalImg = document.getElementById('modal_image');
    modalImg.src = url;
    document.getElementById("caption").innerHTML = description;
    document.getElementById("modal-image-title").innerHTML = title;
    var modal = document.getElementById('modal-lightbox');
    modal.style.display = "block";
}