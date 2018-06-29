$(function () {
    //lightbtn
    $('.light-buttons a').hover(
        function () {
            $(this).addClass('extend-l-btn');
            $(this).append('<span>Dərkənar</span>')
        },
        function () {
            $(this).removeClass('extend-l-btn');
            $(this).children('span').remove();
        }
    );
    //asidebtn
    $('.aside-btn').click(function () {
        $(this).parent().find('.aside-btn').removeClass('aside-actv-btn');
        $(this).addClass('aside-actv-btn');
        if ($(this).attr('name') == 'more') {
            $('.aside-list').css('display', 'none');
            $(".aside-list[name='more']").css('display', 'block');
        };
        if ($(this).attr('name') == 'history') {
            $('.aside-list').css('display', 'none');
            $(".aside-list[name='history']").css('display', 'block');
        };
        if ($(this).attr('name') == 'docs') {
            $('.aside-list').css('display', 'none');
            $(".aside-list[name='docs']").css('display', 'block');
        };
    });

    //acordeonMenu
    $('.panel-title a').click(function () {
        $(this).parent().find('span').toggleClass('rotateAnim')
    });

    //circle-el
    $('.circle-el').click(function(){
        $('#mini-menu').toggleClass('dn');
        $('#table-col').toggleClass('maxWidth');
    });

});