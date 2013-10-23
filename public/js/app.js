	//Parse.initialize("RqQEJnAKitMqGLcNtN0ijJ1sLvgL5sx8unBoSTpn", "7U8bj5j5vgtxT06NrD9Et1TzS7uNNIKS4xrV3I6m");
	var miubicacion = new Array();

	function randomFromInterval(from,to) {
		return Math.floor(Math.random()*(to-from+1)+from);
	}

	function showPosition(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		miubicacion[0]=lat.toFixed(3);
		miubicacion[1]=lng.toFixed(3);
		//console.log(miubicacion[0]+','+miubicacion[1]);
	}
			
	function onError() {
		if (navigator.geolocation) {
			$('#dondeestoy').append("Error: The Geolocation service failed.");
			$('#dondeestoy').css('display', 'inline');
			$("#dondeestoy").removeClass().addClass("fadeInUp"); 
			setTimeout(function() {  
					$('#dondeestoy').removeClass().addClass("fadeOutUp"); 
			}, 5000);
		} else {
			$('#dondeestoy').append("Error: Your browser doesn't support geolocation. Are you in Siberia?");
			$('#dondeestoy').css('display', 'inline');
			$("#dondeestoy").removeClass().addClass("fadeInUp"); 
			setTimeout(function() {  
					$('#dondeestoy').removeClass().addClass("fadeOutUp"); 
			}, 5000);
		}
	}
//
$(document).ready(function(e) {
//	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, onError);
/*
		setTimeout(function() { 
			$('#dondeestoy').html('');
			$("#dondeestoy").append('<p>Estamos Listos! Para mejorar su experiencia..</p>');
			$('#dondeestoy').css('display', 'inline');
			$("#dondeestoy").removeClass().addClass("fadeInUp"); 
			setTimeout(function() {  
				$('#dondeestoy').removeClass().addClass("fadeOutUp"); 
			}, 3000);
			// Mostrar datos en la caja de busqueda
			//$("#w").val('Estas cerca de '+miubicacion[0]+','+miubicacion[1]);
			console.log(miubicacion[0]+','+miubicacion[1]);
		}, 2000);
*/
	} else {
		onError();
	}

	var data = Array();	
	for(var j=1; j<=12; j++) {
		data[j] = Array(280,randomFromInterval(100,250));
	}

	$("#contenido").html('<ul></ul>');		
	for(var i=1; i<=data.length-1; i++) {	
		$("#contenido ul").append('<li class="box" id="idem'+i+'"><a href="/d"><img src="http://placeimg.com/'+ data[i][0] +'/'+ data[i][1] +'/any" alt=""></a><a href="/d"><h3>Proin ut quam eros</h3></a> Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.</li>');
		$("#idem"+ i).css('height', data[i][1]+60);
		//console.log(data[i][0] +'->'+ data[i][1]);
	}
	
	$("#contenido").masonry({
	  	itemSelector: 'li'
	});
	
	// <img src="http://placeimg.com/'+ data[i][0] +'/'+ data[i][1] +'/any" alt="">
	// <img src="http://placehold.it/'+ data[i][0] +'x'+ data[i][1] +'" alt="">	

	$('#busqueda').on('click', function() { 
		//console.log('busqueda');
		$('#buscador').toggle(); 
	});

	if(miubicacion[0]<=0) {
		$('#dondeestoy').html('');
		$("#dondeestoy").append('<p>Cargando localizacion, por favor espere..</p>');
		$('#dondeestoy').css('display', 'inline');
		$("#dondeestoy").removeClass().addClass("fadeInUp"); 
		setTimeout(function() {  
			$('#dondeestoy').removeClass().addClass("fadeOutUp"); 
		}, 4000);	
	} else  { 
		//console.log('Ubicado: '+miubicacion[0]+','+miubicacion[1]); 
	}

	$("#ubicacion").on('click', function() { 
		//console.log('ubicacion');
	    $('#dondeestoy').html('');
		$("#dondeestoy").append('<p>Estas cerca de '+miubicacion[0]+','+miubicacion[1]+'</p>');
		$('#dondeestoy').css('display', 'inline');
		$("#dondeestoy").removeClass().addClass("fadeInDown"); 
		setTimeout(function() {  
			$('#dondeestoy').removeClass().addClass("fadeOutDown"); 
		}, 3000);
	});

	// JQuery Tags
    $('#w').tagit();
    var sampleTags = "";
    var eventTags = $('#eventTags');
    var addEvent = function(text) {
        $('#events_container').append(text + '<br>');
    };
    eventTags.tagit({
        availableTags: sampleTags,
        beforeTagAdded: function(evt, ui) {
            if (!ui.duringInitialization) {
                addEvent('beforeTagAdded: ' + eventTags.tagit('tagLabel', ui.tag));
            }
        },
        afterTagAdded: function(evt, ui) {
            if (!ui.duringInitialization) {
                addEvent('afterTagAdded: ' + eventTags.tagit('tagLabel', ui.tag));
            }
        },
        beforeTagRemoved: function(evt, ui) {
            addEvent('beforeTagRemoved: ' + eventTags.tagit('tagLabel', ui.tag));
        },
        afterTagRemoved: function(evt, ui) {
            addEvent('afterTagRemoved: ' + eventTags.tagit('tagLabel', ui.tag));
        },
        onTagClicked: function(evt, ui) {
            addEvent('onTagClicked: ' + eventTags.tagit('tagLabel', ui.tag));
        },
        onTagExists: function(evt, ui) {
            addEvent('onTagExists: ' + eventTags.tagit('tagLabel', ui.existingTag));
        }
    });
    $('#readOnlyTags').tagit({
        readOnly: true
    });
    $('#methodTags').tagit();
    $('#allowSpacesTags').tagit({
        allowSpaces: true
    });
    $('#removeConfirmationTags').tagit({
        removeConfirmation: true
    });


    /* Contador de anuncios */
	$('.timer').countTo({
        from: 0,
        to: 1000000,
        speed: 7000,
        refreshInterval: 50,
        onComplete: function(value) {
            //console.debug(this);
            $("#gratis").hide();
        }
    })

    /* Quick Start by parse.com
    var User = Parse.Object.extend("User");
    var User = new User();
    User.save({
    	username: "user"+randomFromInterval(100,250)+"", 
    	password: ""+randomFromInterval(100,250)+"", 
    	email:""+randomFromInterval(100,250)+"@gmail.com"
    }, {
		success: function(object) {
		setTimeout(function() {  
			$("#gratis").show();
			$("#gratis").html('<span>"yay! it worked"</span>');
			console.log("Parse it!");
		}, 5000);	
	}
	});
	*/

	/* El menu */
	var menuStatus;
	$("#elmenu").on('click', function() {
		$('#opciones').toggle();
	});

    /* Tooltip */
    $('.fs1').qtip({
    	style: { classes: 'qtip-light qtip-shadow' }
    });

	/* Anuncios similares */
	$("#contenido2").html('<ul></ul>');	
	for(var i=1; i<=4; i++) {	
		$("#contenido2").append('<li class="box" id="idem'+i+'"><a href="#'+i+'"><img src="http://placehold.it/'+ data[i][0] +'x'+ data[i][1] +'" alt=""></a>Similiar '+i+' Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.</li>');
		$("#idem"+ i).css('height', data[i][1]+60);
		//console.log(data[i][0] +'->'+ data[i][1]);
	}
	
	$("#contenido2").masonry({
	  	itemSelector: 'li'
	});

	/* ET Go Home! */
	$("#logo").on('click', function(){
		window.location = "/";
		//console.log('Home');
	});

	var Lang = (navigator.language || navigator.systemLanguage || navigator.userLanguage || 'en').substr(0, 2).toLowerCase();
	//console.log(Lang);
//
});