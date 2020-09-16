function escribirTablaMultiplicar(j){

	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

	document.write("<ol>");
	//i++ significa i=i+1;

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(j + " X " + i + " = " + j * i);
		document.write("</li>");
	}

	document.write("</ol>");
}

var numTablas = parseInt(window.prompt("¿cuantas tablas quieres?"));

for(k=1;k<=numTablas;k++){
	document.write("<div>");
	escribirTablaMultiplicar(k);	
	document.write("</div>");
}
