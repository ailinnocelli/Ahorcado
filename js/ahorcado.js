$(document).on("ready", function(){
	
	var sumatoria = new Array();
	var contador= 0;
	var palabra = new Array();

	$("#btnAceptar").on("click", function(){
		cambiarClase();
		palabra=ingresarPalabra();
	})

	$("#txtLetraIngresada").on ("keyup", function(){
		var ganar = ejecutarJuego(palabra,sumatoria,ganar,contador);
		mostrarResultado(palabra, ganar);
		perdiste(palabra, ganar);
	})


})	


function cambiarClase(){
	$("#botoneraPalabra").addClass("off");
	$("#botoneraLetra").removeClass("off");

}
function ingresarPalabra(){
	var palabraIngresadaPorElUsuario = $("#txtPalabraIngresada").val();
	$("#txtPalabraIngresada").val("");
	var palabraIngresadaPorElUsuarioEnFormatoArray = palabraIngresadaPorElUsuario.split("");
	return palabraIngresadaPorElUsuarioEnFormatoArray;
} 

function ingreseLetra(){
	var letraIngresada = $("#txtLetraIngresada").val();
	$("#txtLetraIngresada").val("");
	return letraIngresada;
}

function compararLetras(letraIngresada,palabraDeAca,sumatoria){
	var largo = palabraDeAca.length;
	var verificarLetra =false;
	var index=0;
	for(index==0; index<largo; index++){
		if(letraIngresada==palabraDeAca[index]){
			verificarLetra=true;
			sumatoria=guardaResultado(index, sumatoria, letraIngresada);
		}
	}
	return verificarLetra;
}

function guardaResultado(indexS, sumatoria, letraIngresada){
	sumatoria[indexS]=letraIngresada; 
	return sumatoria;
}


function ganador(sumatoria, palabra, ganar){
	if(sumatoria == palabra){
		ganar=true;
	}else{
		ganar=false;
	}
	return ganar;
}

function mostrarResultado(palabra,ganar){
	var resultado = palabra.join();
	if(ganar==true){
		alert("Ganaste! La palabra era:" + "" + resultado);
	}
}

function perdiste(palabra, ganar){
	var resultado = palabra.join();
	if(ganar==false){
		alert("Perdiste! La palabra era:" + "" + resultado);
	}
}

function ejecutarJuego(palabra,sumatoria,ganar,contador){
	while(ganar!= true && contador<=10){
		var letraIngresada= ingreseLetra();
		var verificarLetra= compararLetras(letraIngresada,palabra,sumatoria);
		if(verificarLetra==true){
			ganar= ganador(sumatoria, palabra, ganar);
		}if(verificarLetra==false){
			contador ++;
		}
	}
	return ganar;
}




/*while(condicion){
                 
}*/





