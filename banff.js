/*TOGGLE MAIN MENU*/
$(document).ready(function() {
	$('.menuBtnHolder').click(function(){
		$('ul').toggleClass('displayOff');
		console.log('entered');
		/*HIDE THE MENU ICON*/
		$(this).addClass('displayOff');
		/*if the user clicks "x"
			 /*hide the ul and show the menuBtn again
		/*else if user clicks any number
			 /*scroll to the number content zone
	*/

	});
	/*If a day of the week is clicked then hightlight that circle
	|| if we scroll to a day of the week
		/*hightlight that circle
		/*unhighlight every other circle
	If we scroll to day 1
		/*hide the menu button
		/*show the navigation
*/

});

