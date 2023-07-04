function drawX(tamano) {
  for (let i = 0; i < tamano; i++) {
    let fila = "";
    for (let j = 0; j < tamano; j++) {
      if (j === i || j === tamano - 1 - i) {
        fila += "*";
      } else {
        fila += " ";
      }
    }
    console.log(fila);
  }
}

drawX(5);
