$(document).ready(function() {
    $(".articleMore").click(function (event) {
	
        $(event.target).parents(".articleDescription").children(".articleDescriptionHide").toggle("slow");
		
    });
	
});