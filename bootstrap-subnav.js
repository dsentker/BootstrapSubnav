$(document).ready(function() {
    //$('li.dropdown').find('li.dropdown').click(function (e) { e.stopPropagation(); });
    var $dropDownTrigger = $('li.dropdown li.dropdown');
    $dropDownTrigger.find('.dropdown-menu').hide();
    $dropDownTrigger.find('.caret').removeClass('caret').addClass('caret-right');
    $dropDownTrigger.on('click', function(e) {
        e.stopPropagation();
        var $li = $(this),
            $menu = $li.children('.dropdown-menu'),
            $caret = $li.children('a').find('.caret-right, .caret');
        if($menu.is(':visible')) {
            $menu.hide('fast');
            $caret.removeClass('caret').addClass('caret-right');
        } else {
            $menu.show('fast');
            $caret.addClass('caret').removeClass('caret-right');
        }
    });
});