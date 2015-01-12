$(document).ready(function() {
	$(".selectBlock").click(function showHide (event) {
	
        $(event.currentTarget).children(".selectTriangle").toggleClass("changeBackground");
        $(this).parent().next().slideToggle("fast");
		
    });

    $(".selectItem").click(function (event) {
	
        var selectItem = $(this).text();
        $(event.target).parents(".findBlockSelect").find(".selectText").text(selectItem);
        $(event.target).parent(".selectList").hide();
		
    });
	
});