function filterList(parArray) {
  let arreglo = parArray;
  let nuevoArreglo = [];

  for (i = 0; i < arreglo.length; i++) {
    if (typeof arreglo[i] == `number`) {
      nuevoArreglo.push(arreglo[i]);
    } else if (nuevoArreglo.length == 0) {
      return "la lista de numeros esta vacia";
    }
  }
  return nuevoArreglo;
}
