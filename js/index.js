function hazMagia() {
	//Esta función se llama mediante el evento del DOM onload()
	const limite = 20;
	let ctrlSalida = document.getElementById("resultado");
	let arrFibonacci = fibonacci_series(limite);
	var losNumeros;
	for (let i = 0; i < arrFibonacci.length; i++) {
		ctrlSalida.innerHTML += arrFibonacci[i] + ", ";
	}
	ctrlSalida.innerHTML += "<br>Terminé!";
}
// decía -- let ctrlSalida = document.getElementfId ...

/** La siguiente es una función recursiva, es decir, que se llama a sí misma...
 */
function fibonacci_series(n) {
	if (n===1)  {
		return [0, 1];
	} else {
		var s = fibonacci_series(n - 1);
		s.push(s[s.length - 1] + s[s.length - 2]);
		return s;
	}
}
