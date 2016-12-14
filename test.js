$(document).ready(function(){
	f1();

});

function f1() {
	$('img').animate({
		'width':'700px',
		'height':'700px'
	}, 2000, 'swing', f2);
}

function f2() {
	$('img').animate({
		'width':'300px',
		'height':'300px'
	}, 2000, 'linear', f1);
}