var palabra = prompt("escoge una palabra");
var hombre, l;
//declaro la clase ahoracado
var ahorcado = function (con){
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;

	this.dibujar();
};
ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

    //Dibujando el poste
    dibujo.beginPath();
    dibujo.moveTo(150,100);
    dibujo.lineTo(150,50);
    dibujo.lineTo(400,50);
    dibujo.lineTo(400,350);
    dibujo.lineWidth = 15;
    dibujo.strokeStyle = "#000";
    dibujo.stroke();
    dibujo.closePath();

	if(this.intentos > 0)
    {
        // intentos = 1 --> rostro
        dibujo.beginPath();
        dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
        dibujo.strokeStyle = "red";
        dibujo.lineWidth = 5;
        dibujo.stroke();
        dibujo.closePath();


		if(this.intentos > 1)
        {
            // intentos = 2 --> torso
            dibujo.beginPath();
            dibujo.moveTo(150,180);
            dibujo.lineTo(150,250);
            dibujo.strokeStyle = "red";
            dibujo.lineWidth = 5;
            dibujo.stroke();
       
            if(this.intentos > 2)
            {
                // intentos = 3 --> brazos
                dibujo.beginPath();
                dibujo.moveTo(120,220);
                dibujo.lineTo(150,180);
                dibujo.lineTo(180,220);
                dibujo.strokeStyle = "red";
                dibujo.lineWidth = 5;
                dibujo.stroke();
                dibujo.closePath();
		
				if(this.intentos > 3)
                {
                    // intentos = 4 --> piernas
                    dibujo.beginPath();
                    dibujo.moveTo(120,290);
                    dibujo.lineTo(150,250);
                    dibujo.lineTo(180,290);
                    dibujo.strokeStyle = "red";
                    dibujo.lineWidth = 5;
                    dibujo.stroke();
                    dibujo.closePath();
		
					if(this.intentos > 4)
                    {
                        // intentos = 5 --> ojos muertos
                        dibujo.beginPath();
                        //Ojo izquierdo
                        dibujo.moveTo(125,120);
                        dibujo.lineTo(145,145);
                        dibujo.moveTo(145,120);
                        dibujo.lineTo(125,145);

                        //Ojo derecho
                        dibujo.moveTo(155,120);
                        dibujo.lineTo(175,145);
                        dibujo.moveTo(175,120);
                        dibujo.lineTo(155,145);

                        dibujo.strokeStyle = "blue";
                        dibujo.lineWidth = 5;
                        dibujo.stroke();
                        dibujo.closePath();
                    }
                }
            }

        }

    }
}
ahorcado.prototype.trazar = function ()
{
	this.intentos++;
	if(this.intentos >= this.maximo)
	{
		this.vivo = false;
		alert('estas muerto Torpe!!!')
	}
	this.dibujar();
};

function iniciar (){
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	hombre = new ahorcado(contexto);
	//convierte la palabra en minuscula
	palabra = palabra.toLowerCase();
	espacio = new Array(palabra.length);

	b.addEventListener('click', agregarLetra);

	mostrarPista(espacio);
}
function agregarLetra (){
	var letra = l.value;
	l.value = '';
	mostrarPalabra(palabra, hombre, letra);
}
function mostrarPalabra (palabra, ahoracado, letra){
	var encontrado = false;
	var p;
	letra = letra.toLowerCase();
	for(p in palabra){
		if(letra == palabra[p]){
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);
	if(!encontrado){
		ahoracado.trazar();
	}
	if(!ahorcado.vivo){
		//mostrar la palabra entera
	}
}
function mostrarPista (espacio){
	var pista = document.getElementById('pista');
	var texto = '';	
	var i;
	var largo = espacio.length;
	for(i = 0; i<largo; i++){
		if(espacio[i] != undefined){
			texto += espacio[i] + ' '; 
		}
		else{
			texto += "_ ";
		}
	}
	pista.innerText = texto;
}