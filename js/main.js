jQuery(document).ready(function($){
	//open the lateral panel
	$('.cd-btn').on('click', function(event){
		event.preventDefault();

		$('.cd-panel').addClass('is-visible');
	});
	//clode the lateral panel
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');

			event.preventDefault();
		}
	});
    //open the lateral panel
    $('.cd-btn2').on('click', function (event) {
    	event.preventDefault();

    	$('.cd-panel2').addClass('is-visible');
    });
    //clode the lateral panel
    $('.cd-panel2').on('click', function (event) {
    	if ($(event.target).is('.cd-panel2') || $(event.target).is('.cd-panel2-close')) {
    		$('.cd-panel2').removeClass('is-visible');

    		event.preventDefault();
    	}
    });
 //open the lateral panel
 $('.cd-btn3').on('click', function (event) {
 	event.preventDefault();

 	$('.cd-panel3').addClass('is-visible');
 });
    //clode the lateral panel
    $('.cd-panel3').on('click', function (event) {
    	if ($(event.target).is('.cd-panel3') || $(event.target).is('.cd-panel3-close')) {
    		$('.cd-panel3').removeClass('is-visible');

    		event.preventDefault();
    	}
    });

     //open the lateral panel
     $('.cd-btn4').on('click', function (event) {
     	event.preventDefault();

     	$('.cd-panel4').addClass('is-visible');
     });
    //clode the lateral panel
    $('.cd-panel4').on('click', function (event) {
    	if ($(event.target).is('.cd-panel4') || $(event.target).is('.cd-panel4-close')) {
    		$('.cd-panel4').removeClass('is-visible');

    		event.preventDefault();
    	}
    });

     //open the lateral panel
     $('.cd-btn5').on('click', function (event) {
     	event.preventDefault();

     	$('.cd-panel5').addClass('is-visible');
     });
    //clode the lateral panel
    $('.cd-panel5').on('click', function (event) {
    	if ($(event.target).is('.cd-panel5') || $(event.target).is('.cd-panel5-close')) {
    		$('.cd-panel5').removeClass('is-visible');

    		event.preventDefault();
    	}
    });

});