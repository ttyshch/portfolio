function b_menu(sSelector) {
    var m = this;
//    1 секция данных
    m.menu = $(sSelector);
//    2 секция логики
    m.showSubMenu = function () {
        $(this).children('.b-submenu').show();
    };
    m.hideSubMenu = function () {
        $(this).children('.b-submenu').hide();
    };
//    3 секция представления
    m.menu.find('.b-menu__item').mouseover(m.showSubMenu).mouseout(m.hideSubMenu);
    m.menu.find('.b-submenu__item').mouseover(m.showSubMenu).mouseout(m.hideSubMenu);
}