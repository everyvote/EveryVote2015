$(document).ready(function() {
    $("#xs-navbar-show-search").click(function() {
        $("#xs-navbar-search").toggle("fast");
        $("#ev-nav-group").toggle("fast");
        if ( $("#xs-navbar-show-search").html() === '<i class="fa fa-close"></i>') {
            $("#xs-navbar-show-search").html("<i class='fa fa-search'></i>");
        } else {
            $("#xs-navbar-show-search").html("<i class='fa fa-close'></i>");
        }
    });
    $("#folder-1-bar").click(function() {
        if ( $("#folder-1-icon").attr('class') === 'fa fa-caret-right caret-width') {
            $("#folder-1-icon").attr('class', 'fa fa-caret-down caret-width');
            $("#folder-1").slideDown('slow');
            scrollToAnchor('#folder-1-bar');
        } else {
            $("#folder-1-icon").attr('class', 'fa fa-caret-right caret-width');
            $("#folder-1").slideUp('slow');
        }
    });
    $("#folder-1-1-bar").click(function() {
        if ( $("#folder-1-1-icon").attr('class') === 'fa fa-caret-right caret-width') {
            $("#folder-1-1-icon").attr('class', 'fa fa-caret-down caret-width');
            $("#folder-1-1").slideDown('slow');
            scrollToAnchor('#folder-1-bar');
        } else {
            $("#folder-1-1-icon").attr('class', 'fa fa-caret-right caret-width');
            $("#folder-1-1").slideUp('slow');
        }
    });
    $("#sidebar-1-bar").click(function() {
        if ( $("#sidebar-1-icon").attr('class') === 'fa fa-plus-square-o') {
            $("#sidebar-1-icon").attr('class', 'fa fa-minus-square-o');
            $("#sidebar-1").slideDown('slow');
        } else {
            $("#sidebar-1-icon").attr('class', 'fa fa-plus-square-o');
            $("#sidebar-1").slideUp('slow');
        }
    });
    $("#sidebar-1-1-bar").click(function() {
        if ( $("#sidebar-1-1-icon").attr('class') === 'fa fa-plus-square-o') {
            $("#sidebar-1-1-icon").attr('class', 'fa fa-minus-square-o');
            $("#sidebar-1-1").slideDown('slow');
        } else {
            $("#sidebar-1-1-icon").attr('class', 'fa fa-plus-square-o');
            $("#sidebar-1-1").slideUp('slow');
        }
        console.log('yes');
    });

    window.navGroupIsOpen = false;
    if (navGroupIsOpen === false) {
        $("#ev-nav-group").bind('click', triggerNavGroupMenu);
    }
    function triggerNavGroupMenu() {
        if (navGroupIsOpen === false) {
            $(this).find('ul').slideDown( function() { navGroupIsOpen = true; });
        } else {
            $(this).find('ul').slideUp( function() { navGroupIsOpen = false; });
        }
    };

    function scrollToAnchor(aid){
        var aTag = $(aid);
        $('html,body').animate({scrollTop: aTag.offset().top - 100}, 'slow')
    }

    // temporary demo code
    $('.profile-multimedia').each(function (index) {

    })
    $('.profile-multimedia').bind('click',function(){
        alert('open YouTube video via API');
    })
});