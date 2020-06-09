(function(){
	var current =0;
	var max =0;
	var container;

	function init(){
		container = $(".slide ul");
		max = container.children().length;

		console.log("init");

		events();
	};

	function events(){
		$(".prev").on("click", prev);
		$(".next").on("click", next);
	};

	function prev( event ){
		current--;
		if (current < 0) current = 0;
		animate();
		
	};

	function next( event ){
		current++;
		if (current > max-1) current = max-1;
		animate();
	};

	function animate(){
		var moveX = current * 800;
		TweenMax.to( container, 0.8, { marginLeft:-moveX, ease:Expo,easeOut });
	};

	$( document ).ready( init );
})();