
//Toggle Navs


//Hide Second Nav on load
$(window).ready(function(){
    $('#header2').hide();
});

//Dry Var
hide = function(){
    $('#header1,#header2').fadeToggle();
};

//Click this to fadeout
$('.texthead').click(hide);
$('.textlogo').click(hide);