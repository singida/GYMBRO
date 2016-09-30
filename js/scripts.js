$(document).ready(function(){

    $(".topBar").hover(function(){
        $(this).css("background-color", "#20232A");
        }, function(){
        $(this).css("background-color", "#A01D26");
    });

    $(".button").hover(function() {
    	$(this).css('background-color', '#20232A');
    	}, function(){
    	$(this).css('background-color', '#ACBEBE');
    });


//readmore function play 1

    $('.readmore').click(readMore);
    $('.readless').hide()

    function readMore() {
    	event.preventDefault();
    	$('#show-this-on-click').slideToggle();
    	$('.readmore').hide();
    	$('.readless').show();
    }

    $('.readless').click(readLess);

    function readLess() {
    	event.preventDefault();
    	$('#show-this-on-click').slideUp();
    	$('.readless').hide();
    	$('.readmore').show();
    }

    function showThisOnClick() {
    	$('#show-this-on-click').show().slideToggle;
    	$('.readless').hide();
    }

    $('#show-this-on-click').hide();
    $('#readMoreFunction').click(showThisOnClick);

//readmore function favorites 2

    $('.readmore2').click(readMore2);
    $('.readless2').hide()

    function readMore2() {
    	event.preventDefault();
    	$('#show-this-on-click2').slideToggle();
    	$('.readmore2').hide();
    	$('.readless2').show();
    }

    $('.readless2').click(readLess2);

    function readLess2() {
    	event.preventDefault();
    	$('#show-this-on-click2').slideUp();
    	$('.readless2').hide();
    	$('.readmore2').show();
    }

    function showThisOnClick2() {
    	$('#show-this-on-click2').show().slideToggle;
    	$('.readless2').hide();
    }

    $('#show-this-on-click2').hide();
    $('#readMoreFunction2').click(showThisOnClick);

//readmore function voice record 3

    $('.readmore3').click(readMore3);
    $('.readless3').hide()

    function readMore3() {
    	event.preventDefault();
    	$('#show-this-on-click3').slideToggle();
    	$('.readmore3').hide();
    	$('.readless3').show();
    }

    $('.readless3').click(readLess3);

    function readLess3() {
    	event.preventDefault();
    	$('#show-this-on-click3').slideUp();
    	$('.readless3').hide();
    	$('.readmore3').show();
    }

    function showThisOnClick3() {
    	$('#show-this-on-click3').show().slideToggle;
    	$('.readless3').hide();
    }

    $('#show-this-on-click3').hide();
    $('#readMoreFunction3').click(showThisOnClick);

//readmore function beacon 4

    $('.readmore4').click(readMore4);
    $('.readless4').hide()

    function readMore4() {
    	event.preventDefault();
    	$('#show-this-on-click4').slideToggle();
    	$('.readmore4').hide();
    	$('.readless4').show();
    }

    $('.readless4').click(readLess4);

    function readLess4() {
    	event.preventDefault();
    	$('#show-this-on-click4').slideUp();
    	$('.readless4').hide();
    	$('.readmore4').show();
    }

    function showThisOnClick4() {
    	$('#show-this-on-click4').show().slideToggle;
    	$('.readless4').hide();
    }

    $('#show-this-on-click4').hide();
    $('#readMoreFunction4').click(showThisOnClick);

});