$(document).ready(function() {
    $("#xs-navbar-show-search").click(function() {
        $("#navbar-brand").toggle("fast");
        $("#ev-navbar-brand").toggle("fast");
        $("#xs-navbar-search").toggle("fast");

        if ( $("#xs-navbar-show-search").html() === '<i class="fa fa-close"></i>') {
            $("#xs-navbar-show-search").html("<i class='fa fa-search'></i>");
        } else {
            $("#xs-navbar-show-search").html("<i class='fa fa-close'></i>");
        }
    });
    $("#folder-1-bar").click(function() {
        if ( $("#folder-1-icon").attr('class') === 'fa fa-caret-right caret-width') {
            $("#folder-1-icon").attr('class', 'fa fa-caret-down caret-width');
            $("#folder-1").toggle();
        } else {
            $("#folder-1-icon").attr('class', 'fa fa-caret-right caret-width');
            $("#folder-1").toggle();
        }
    });
    $("#folder-1-1-bar").click(function() {
        if ( $("#folder-1-1-icon").attr('class') === 'fa fa-caret-right caret-width') {
            $("#folder-1-1-icon").attr('class', 'fa fa-caret-down caret-width');
            $("#folder-1-1").toggle();
        } else {
            $("#folder-1-1-icon").attr('class', 'fa fa-caret-right caret-width');
            $("#folder-1-1").toggle();
        }
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

});