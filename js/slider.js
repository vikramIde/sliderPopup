
function slideIt()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = 0;
	
	if (parseInt(slidingDiv.style.right) < stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) + 2 + "px";
		setTimeout(slideIt, 1);	
	}
}
	
function slideIn()
{
	var slidingDiv = document.getElementById("slider");
	var stopPosition = -342;
	
	if (parseInt(slidingDiv.style.right) > stopPosition )
	{
		slidingDiv.style.right = parseInt(slidingDiv.style.right) - 2 + "px";
		setTimeout(slideIn, 1);	
	}
}



/***Code to make the popup appear on scroll ***/

var sliderActivate = function (){

	var scrollPosition = window.scrollY;

	console.log(scrollPosition);

	var heightOftheAutoOpen = 0;

	if(scrollPosition > heightOftheAutoOpen){
		navbtnHandller($('li.active'));
		slideIn();
	}
	else {
		resetTab();
		slideIt();
	}
}

/**  **/
var tab_pane_toggller = function(){

		$('.tab-pane').each(function(){
		if($(this).hasClass('active'))
			$(this).show();
		else
			$(this).hide();
	});

}

var setToSidebar = function(){
	if(document.getElementById('sidebar1') !=null)
	document.getElementById('sidebar1').id='sidebar';
}

var setToSidebar1 = function(){
	if(document.getElementById('sidebar') !=null)
	document.getElementById('sidebar').id='sidebar1';
}

var resetTab = function(){
	var liFirstref = $('.nav li').first();
	$(liFirstref).addClass('active');
	setToSidebar();
	tabHandller(liFirstref.attr('data-toggle'));
}

var navbtnHandller = function($ref){

	if($ref.hasClass('active') && $ref.closest('div').attr('id')=='sidebar'){
		$ref.removeClass('active');
		setToSidebar1();
		slideIn();
	}
	else if($ref.not('.active') && $ref.closest('div').attr('id')=='sidebar'){
		$('li.active').removeClass('active');
		$($ref).addClass('active');
	}
	else if($ref.not('.active') && $ref.closest('div').attr('id')=='sidebar1'){
		$ref.addClass('active');
		setToSidebar();
		slideIt();
	}
	
}

var tabHandller = function(id){

	$('div.active').removeClass('active');

	tab_pane_toggller();

	$(id).addClass('active');

	tab_pane_toggller();
}