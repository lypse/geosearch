
$(document).ready(function () {
	var 
		lat_1 = $('.lat_1'),
		lat_2 = $('.lat_2'),
		lon_1 = $('.lon_1'),
		lon_2 = $('.lon_2'),
		coordsType = $('[name="coordsType"]');

	lat_1.focus();

	$('input').keyup(function(){
        if(this.value.length==$(this).attr("maxlength")){
            $(this).parent().parent().next().find('input').focus();
        }
    });


   	var handleinputType = function () {
   		console.log(coordsType.val());
   		if ($('input[name="coordsType"]:checked').val() === 'dd') {
   			lat_2.prop('type', 'number');
   			lon_2.prop('type', 'number');
   		} else {
   			lat_2.prop('type', 'text');
   			lon_2.prop('type', 'text');
   		}
   	}


   	coordsType.on('change', function () {
   		handleinputType();
   	});

   	handleinputType();


	$('.getposition').on('submit', function (e) {
		e.preventDefault();
		var location = '';
		if (coordsType.val() === 'dd') {
			location = 'comgooglemaps://?q=' + lat_1.val() + '.' + lat_2.val() + 'N,' + lon_1.val() + '.' + lon_2.val() + 'E';
		} else {
			location = 'comgooglemaps://?q=' + lat_1.val() + '°' + lat_2.val() + 'N,' + lon_1.val() + '°' + lon_2.val() + 'E';
		}
		console.log(location);
		window.location = location;
	});
});