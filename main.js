primeraEjecucion = 0

// Creación y configuración del canvas inicial
margen = {x: 20, y: 2};
var canvas = d3.select("body").select(".row")
				.append("svg")
				.attr("width", 1100)
				.attr("height", 640)
				.style("float", "left");

// Defino gradiente graduado en color para barra.
var defs=canvas.append("defs");				
var gradient=defs.append("linearGradient")
	.attr("id","gradient")
	.attr("y1","10%")
	.attr("y2","100%")
	.attr("x1","0%")
	.attr("x2","0%");

gradient.append("stop")
	.attr("offset","0%")
	.attr("stop-color", "green")
	.attr("stop-opacity", 1);

gradient.append("stop")
	.attr("offset","100%")
	.attr("stop-color", "red")
	.attr("stop-opacity", 1);



// Títulos de las variables a ingresar
textTitle = canvas.append("text")
	.attr("x", margen.x + 40)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Actividad");
textTitle = canvas.append("text")
	.attr("x", margen.x + 122)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Independ.");
textTitle = canvas.append("text")
	.attr("x", margen.x + 209)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Concent.");
textTitle = canvas.append("text")
	.attr("x", margen.x + 290)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Amistad");
textTitle = canvas.append("text")
	.attr("x", margen.x + 360)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Tolerancia");
textTitle = canvas.append("text")
	.attr("x", margen.x + 452)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Audacia");
textTitle = canvas.append("text")
	.attr("x", margen.x + 535)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Interés");
textTitle = canvas.append("text")
	.attr("x", margen.x + 610)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("Género");
textTitle = canvas.append("text")
	.attr("x", margen.x + 730)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("SNP4");
textTitle = canvas.append("text")
	.attr("x", margen.x + 855)
	.attr("y", margen.y + 20)
	.attr("font-family", "sans-serif")
	.attr("font-size","16px")
	.attr("fill", "black")
	.attr("font-weight", "bold")
	.text("SNP5");


// Selectores variables cualitativas
vcPosicion = {x: 0, y: 31};
radio = 10;
for (var i = 1; i<6; i++){
	x = margen.x + vcPosicion.x + 20;
 	y = (i * (vcPosicion.y +1)) + margen.y + 30;
	var textLabels = canvas.append("text")
		.attr("x", x)
		.attr("y", y)
		.attr("font-family", "sans-serif")
		.attr("font-size","18px")
		.attr("fill", "black")
		.text(String(i));
}

var i;
var j;
var nivelSel;
var fil;
var col;
for (i=1; i<6; i++) {
	y = (i * (vcPosicion.y - 1)) + margen.y + 30;
	for (j=1; j<8; j++) {
		x = (j * 80) +  margen.x + vcPosicion.x;
		canvas.append("circle")
				.attr("id", "vc" + String(j) + String(i))
				.attr("cx", x)
				.attr("cy", y)
				.attr("r", radio)
				.attr("fill", "white")
				.attr("stroke", "black")
				.on("click",function(){
					// console.log('hizo click' + fil + col);
					d3.select(this)
						.attr("fill", "red");

					// Limpia el resto de circulos					
					nivelSel = d3.select(this).attr("id");
					col = nivelSel.substring(2,3);
					fil = nivelSel.substring(3,4);
					d3.select("#vc"+col+String(1)).attr("fill","white");
					d3.select("#vc"+col+String(2)).attr("fill","white");
					d3.select("#vc"+col+String(3)).attr("fill","white");
					d3.select("#vc"+col+String(4)).attr("fill","white");
					d3.select("#vc"+col+String(5)).attr("fill","white");

					d3.select("#vc"+col+String(parseInt(fil))).attr("fill","red");

					ejecutar();
				});
	};
};


// Selector género
generoPosicion ={x:620, y:31}
x = generoPosicion.x;
y = (1 * generoPosicion.y) + margen.y  + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("Hembra");

x = generoPosicion.x;
y = (2 * generoPosicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("Macho");	

x = generoPosicion.x + 80;
for (j=1; j<3; j++) {
	y = (j * (generoPosicion.y - 4)) + margen.y + 30;
	canvas.append("circle")
			.attr("id", "v8" + String(j))
			.attr("cx", x)
			.attr("cy", y)
			.attr("r", radio)
			.attr("fill", "white")
			.attr("stroke", "black")
			.on("click",function(){
				// console.log('hizo click');
				d3.select(this)
					.attr("fill", "red");

				// Limpia el resto de circulos	
				nivelSel = d3.select(this).attr("id");
				fil = nivelSel.substring(2,3);
				d3.select("#v8"+String(parseInt(fil)+1)).attr("fill","white");
				d3.select("#v8"+String(parseInt(fil)-1)).attr("fill","white");		

				ejecutar();
			});
};


// Selector genético SNP4
snp4Posicion ={x: 730, y:31}
x = snp4Posicion.x
y = (1 * snp4Posicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("GTC/GTC") + 30

x = snp4Posicion.x
y = (2 * snp4Posicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("GTC/GTT") + 30
	
x = snp4Posicion.x
y = (3 * snp4Posicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("GTT/GTT");		


x = (1 * snp4Posicion.x) + 95;
for (j=1; j<4; j++) {
	y = (j * (snp4Posicion.y - 4)) + margen.y + 30;
	canvas.append("circle")
			.attr("id", "v9" + String(j))
			.attr("cx", x)
			.attr("cy", y)
			.attr("r", radio)
			.attr("fill", "white")
			.attr("stroke", "black")
			.on("click",function(){
				console.log('hizo click');
				d3.select(this)
					.attr("fill", "red");

				// Limpia el resto de circulos	
				nivelSel = d3.select(this).attr("id");
				fil = nivelSel.substring(2,3);
				d3.select("#v9"+String(parseInt(fil)+1)).attr("fill","white");
				d3.select("#v9"+String(parseInt(fil)+2)).attr("fill","white");
				d3.select("#v9"+String(parseInt(fil)-1)).attr("fill","white");
				d3.select("#v9"+String(parseInt(fil)-2)).attr("fill","white");

				ejecutar();
			});
};


// Selector genético SNP5
snp5Posicion ={x: 855, y:31}

x = snp5Posicion.x;
y = (1 * snp5Posicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("AGC/AGT");

x = snp5Posicion.x;
y = (2 * snp5Posicion.y) + margen.y + 30;
var textLabels = canvas.append("text")
	.attr("x", x)
	.attr("y", y)
	.attr("font-family", "sans-serif")
	.attr("font-size","18px")
	.attr("fill", "black")
	.text("AGT/AGT");	


x = snp5Posicion.x + 95;
for (j=1; j<3; j++) {
	y = (j * (snp5Posicion.y-4)) + margen.y + 30;
	canvas.append("circle")
		.attr("id", "v10" + String(j))
			.attr("cx", x)
			.attr("cy", y)
			.attr("r", radio)
			.attr("fill", "white")
			.attr("stroke", "black")
			.on("click",function(){
				console.log('hizo click');
				d3.select(this)
					.attr("fill", "red");

				// Limpia el resto de circulos	
				nivelSel = d3.select(this).attr("id");
				fil = nivelSel.substring(3,4);	
				d3.select("#v10"+String(parseInt(fil)+1)).attr("fill","white");
				d3.select("#v10"+String(parseInt(fil)-1)).attr("fill","white");		

				ejecutar();
			});
};


//-----------------------------------------------
// FUNCIONES

// Obtiene los valores seleccionados en el panel
$(document).ready(function(){
		$('#runModel').click(function(){
			primeraEjecucion = 1;
			ejecutar();	
	});
});

function ejecutar(){
	if (primeraEjecucion == 1){
			
		// Limpia el área de la gráfica
		d3.select("body")
			.select(".row")
			.select("svg")
			.selectAll("rect").remove();
		d3.select("body")
			.select(".row")
			.select("svg")
			.selectAll("line").remove();

		// Inicializa variables			
		valActivity = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc1" + String(i)).attr("fill");
			if (valAct == "red"){
				valActivity = i;
			}
		}
		valIndependence = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc2" + String(i)).attr("fill");
			if (valAct == "red"){
				valIndependence = i;
			}
		}
		valFocus = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc3" + String(i)).attr("fill");
			if (valAct == "red"){
				valFocus = i;
			}
		}
		valHumanFriendly = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc4" + String(i)).attr("fill");
			if (valAct == "red"){
				valHumanFriendly = i;
			}
		}
		valDogTolerance = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc5" + String(i)).attr("fill");
			if (valAct == "red"){
				valDogTolerance = i;
			}
		}
		valBold = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc6" + String(i)).attr("fill");
			if (valAct == "red"){
				valBold = i;
			}
		}
		valDummyInterest = 0;
		for(i=1; i<6; i++){
			valAct = d3.select("#vc7" + String(i)).attr("fill");
			if (valAct == "red"){
				valDummyInterest = i;
			}
		}
		valGender = 0;
		for(i=1; i<3; i++){
			valAct = d3.select("#v8" + String(i)).attr("fill");
			if (valAct == "red"){
				valGender = i - 1;
			}
		}
		valSNP4 = 0;
		for(i=1; i<4; i++){
			valAct = d3.select("#v9" + String(i)).attr("fill");
			if (valAct == "red"){
				valSNP4 = i - 1;
			}
		}
		valSNP5 = 0;
		for(i=1; i<3; i++){
			valAct = d3.select("#v10" + String(i)).attr("fill");
			if (valAct == "red"){
				valSNP5 = i - 1;
			}
		}

	  /*****************************************************************
		GRÁFICA DE CASCADA
	   *****************************************************************/
		var origen = {x: 0, y: 230};
		
		// Barra agregadas
		barwidth = 60;
		bargap = 78;

		//Formula regresion log
		variables = {};
		variables.actividad = valActivity;
		variables.independencia = valIndependence;
		variables.concentracion = valFocus;
		variables.amistad = valHumanFriendly;
		variables.tolerancia = valDogTolerance;
		variables.audacia = valBold;
		variables.interes = valDummyInterest;
		variables.sexo = valGender;
		variables.snp4 = valSNP4;
		variables.snp5 = valSNP5;
		
		scoreInicial = 8.8287470;
		
		resultados = {};
		resultados.actividad = (variables.actividad * -0.7682244);
		resultados.independencia = (variables.independencia * -0.1537098);
		resultados.concentracion = (variables.concentracion * -0.6732204);
		resultados.amistad = (variables.amistad * -0.4343263);
		resultados.tolerancia = (variables.tolerancia * -0.1150704);
		resultados.audacia = (variables.audacia * -0.3121782);
		resultados.interes = (variables.interes * -0.3203371);
		resultados.sexo = (variables.sexo * -0.8440419);
		resultados.snp4 = (variables.snp4 * 0.5975664);
		resultados.snp5 = (variables.snp5 * 1.5635239);
		
		scoreFinal = scoreInicial + 
			(resultados.actividad ) + 
			(resultados.independencia ) + 
			(resultados.concentracion ) +
			(resultados.amistad ) + 
			(resultados.tolerancia ) +
			(resultados.audacia ) +
			(resultados.interes ) +
			(resultados.sexo ) + 
			(resultados.snp4 ) + 
			(resultados.snp5 );
		
		//resultados del modelo. Coefic x parametro elegido
		long = [resultados.actividad, 
			resultados.independencia,
			resultados.concentracion,
			resultados.amistad, 
			resultados.tolerancia, 
			resultados.audacia, 
			resultados.interes, 
			resultados.sexo, 
			resultados.snp4, 
			resultados.snp5];
		
		//constante de la regresion logistica
		// acumulado = scoreInicial + origen.y+250;
		function escalado(valorX, valorMaximoPx){
			valorEscalado =  (  ((valorX/15) + 0.0358) * valorMaximoPx   );
			console.log("escalado: " + String(valorEscalado));
			return valorEscalado;	
		}
		scoreFinalEstandar = 1 -    ( (scoreFinal + 6) / 15 )
		//factorescala = scoreFinalEstandar * 400;
		acumulado = origen.y +    ( ((scoreInicial / 15) + 0.0358) * 400    );
		
		rect = canvas.append("line")
			.attr("x1",  origen.x + bargap - 65)
			.attr("y1", acumulado)
			.attr("x2",  origen.x + bargap - 10 + barwidth)
			.attr("y2", acumulado)
			.attr("class", "origin")
			.attr("stroke", "black")
			.attr("stroke-width", "3");
		
		// Punto inicial
		rect = canvas.append("text")
			.attr("x",  origen.x +bargap - 75)
			.attr("y", acumulado - 10)
			.attr("font-family",  "sans-serif")
			.attr("font-size", "12px")
			.attr("fill", "black")
			.text( (1-  ((scoreInicial/15) + 0.0358)  ).toFixed(3)); // Para redondear a 1 decimal
		
		
		 componentes = [];
		 componentes2 = [];
		 for( b=1; b<11; b++){
			// Ajustes de espaciado personalizado 
			if (b==1){
				origen.x = -10;
				ajuste = 0;
			}
			else{
				origen.x = 0;
				ajuste = 0;
			}
			if (b==7){
				ajuste = 20;
			}
			if (b==8){
				origen.x = 20;
				ajuste = 20;
			}
			if (b==9){
				origen.x = 40;
				ajuste = 45;
			}
			if (b==10){
				origen.x = 85;
			}		

			 rectstart = Math.min(acumulado, acumulado + escalado(long[b-1], 400) )
			 objeto={"x":origen.x + (bargap * b), "width":barwidth, "fill":"grey", "y":rectstart, "height": Math.abs(escalado(long[b-1], 400)) }

			 acumulado = acumulado + escalado(long[b-1], 400) ; //* Math.sign(long[b-1])
			 linea={"class":"conector","x1":origen.x + (bargap * b), "y1":acumulado, "x2":origen.x+barwidth+bargap*(b+1)  + ajuste, "y2":acumulado}
			 componentes.push(objeto);
			 componentes2.push(linea);
		 };
		
		barras = canvas.selectAll("rect")
			.data(componentes)
			.enter()
			.append("rect");
		
		lineas = canvas.selectAll("conector")
			.data(componentes2)
			.enter()
			.append("line");

		
		// Agrega barra de resultado
		rectMarco=canvas.append("rect")
			.attr("x", 1000 - 1)
			.attr("y", origen.y - 1)
			.attr("width", 50 + 2)
			.attr("height", 400 + 2)
			.attr("fill", "black");

		rectResultado=canvas.append("rect")
			.attr("x", 1000)
			.attr("y", origen.y)
			.attr("width", 50)
			.attr("height", 400)
			.attr("fill","url(#gradient)");

		// Agrega linea con umbral de corte
		cutoff=canvas.append("line")
			.attr("x1", 1000)
			.attr("x2", 1050)
			.attr("y1", origen.y+220)
			.attr("y2", origen.y+220)
			.style("stroke","black")
			.style("stroke-width",2)
			.style("stroke-dasharray","10,5");        

		// Agrega etiquetas de texto de la barra de resultados
		text0=canvas.append("text")
			.text("0")
			.attr("x", 1065)
			.attr("y", origen.y + 400);

		text100=canvas.append("text")
			.text("1")
			.attr("x", 1065)
			.attr("y", origen.y + 10);

		text_co=canvas.append("text")
			.text("0.45")
			.attr("x", 1065)
			.attr("y", origen.y+220);
	

		// Crea las lineas y rectangulos en el punto inical (antes de la transición)
		rectAttributes = barras
			.attr("x", function(d){return d.x;})
			.attr("y", "471.75")
			.attr("width", function(d){return d.width;})	
			.attr("height", function(d){return d.height;})
			.attr("fill", function(d){return d.fill;});	
		
		linesAttributes = lineas
			.attr("x1", function(d){return d.x1;})
			.attr("y1", "471.75")
			.attr("x2", function(d){return d.x2;})
			.attr("y2", "471.75")
			.attr("class", function(d){return d.class;})
			.attr("stroke", "gray")
			.attr("stroke-dasharray", "2");

		// Linea de resultado con su etiqueta
		resultLin = canvas.append("line")
			.attr("x1",  1000)
			.attr("y1", "471.75")
			.attr("x2",  1000+50)
			.attr("y2", "471.75")
			.attr("class", "conector")
			.attr("stroke", "black")
			.attr("stroke-width", "5");
		
		resultLbl = canvas.append("text")
			.attr("x",  1000+18)
			.attr("y", "471.75")
			.attr("font-family",  "sans-serif")
			.attr("font-size", "12px")
			.attr("fill", "black")
			.attr("font-weight", "bold")
			.text(scoreFinalEstandar.toFixed(3));		
		

		// Hace la transición de las barras, líneas y etiqueta
		tran_time=1500;

		rectAttributes = barras
			.transition()
			.duration(tran_time)
			.attr("y", function(d){return d.y;});	
		
		linesAttributes = lineas
			.transition()
			.duration(tran_time)
			.attr("y1", function(d){return d.y1;})
			.attr("y2", function(d){return d.y2;})
			.attr("class", function(d){return d.class;})
			.attr("stroke", "gray")
			.attr("stroke-dasharray", "2");

			// Linea de resultado con su etiqueta
			resultLinAtt = resultLin
			.transition()
			.duration(tran_time)
			.attr("y1", acumulado)
			.attr("y2", acumulado)
			.attr("class", "conector")
			.attr("stroke", "black")
			.attr("stroke-width", "5");
			
			resultLblAtt = resultLbl
			.transition()
			.duration(tran_time)
			.attr("y", acumulado-10)
			.attr("font-family",  "sans-serif")
			.attr("font-size", "12px")
			.attr("fill", "black")
			.attr("font-weight", "bold")
			.text(scoreFinalEstandar.toFixed(3));									
	}
}
