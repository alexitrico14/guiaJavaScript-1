let totalDias = parseInt(prompt("Ingrese los dias a calcular"));

let años = Math.floor(totalDias / 365);
let semanas = Math.floor((totalDias % 365) / 7);
let dias = (totalDias % 365) % 7;

alert(`${totalDias} días convertidos en ${años} año/s, ${semanas} semanas y ${dias} dias`)