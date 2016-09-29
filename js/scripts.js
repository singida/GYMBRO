$(document).ready(function(){
    $(".topBar").hover(function(){
        $(this).css("background-color", "#20232A");
        }, function(){
        $(this).css("background-color", "#A01D26");
    });

    $(".button").hover(function() {
    	$(this).css('background-color', '#20232A');
    	}, function() {
    	$(this).css("background-color", '#ACBEBE');
    });

});