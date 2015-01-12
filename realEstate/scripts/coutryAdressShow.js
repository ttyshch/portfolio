$(document).ready(function() {
    $(".coutry").click(function (event) {
        $(event.currentTarget).children(".coutryAdress").slideToggle("fast");
        $(event.currentTarget).children(".triangleCoutry").toggleClass("rotate")
    });
});