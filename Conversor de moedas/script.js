function Converter() {
  var valorOriginal = document.getElementById("valor").value;
  var moeda1 = document.getElementById("moeda1").value;
  var moeda2 = document.getElementById("moeda2").value;
  var resultado = document.getElementById("resultado");

  if (moeda1 === "real") {
    if (moeda2 === "real") {
      resultado.innerHTML = "R$ " + valorOriginal;
    } else if (moeda2 === "dolar") {
      var resultadoD = valorOriginal * 0.19633;
      resultado.innerHTML = "$ " + resultadoD.toFixed(2);
    } else if (moeda2 === "euro") {
      var resultadoE = valorOriginal * 0.19391;
      resultado.innerHTML = "€ " + resultadoE.toFixed(2);
    } else if (moeda2 === "bob") {
      var resultadoP = valorOriginal * 1.40000;
      resultado.innerHTML = "bob b " + resultadoP.toFixed(2);
    }
  } else if (moeda1 === "dolar") {
    if (moeda2 === "dolar") {
      resultado.innerHTML = "$ " + valorOriginal;
    } else if (moeda2 === "real") {
      var resultadoR = valorOriginal * 5.0935;
      resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
    } else if (moeda2 === "euro") {
      var resultadoE = valorOriginal * 0.98762;
      resultado.innerHTML = "€ " + resultadoE.toFixed(2);
    } else if (moeda2 === "bob") {
      var resultadoP = valorOriginal * 6.9198;
      resultado.innerHTML = "bob b " + resultadoP.toFixed(2);
    }
  } else if (moeda1 === "euro") {
    if (moeda2 === "euro") {
      resultado.innerHTML = "€ " + valorOriginal;
    } else if (moeda2 === "real") {
      var resultadoR = valorOriginal * 5.1562;
      resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
    } else if (moeda2 === "dolar") {
      var resultadoD = valorOriginal * 1.0123;
      resultado.innerHTML = "$ " + resultadoD.toFixed(2);
    } else if (moeda2 === "bob") {
      var resultadoP = valorOriginal * 7.9000;
      resultado.innerHTML = "bob b " + resultadoP.toFixed(2);
    }
  } else if (moeda1 === "bob") {
    if (moeda2 === "bob") {
      resultado.innerHTML = valorOriginal;
    } else if (moeda2 === "real") {
      var resultadoR = valorOriginal * 0.071000;
      resultado.innerHTML = "R$ " + resultadoR.toFixed(2);
    } else if (moeda2 === "euro") {
      var resultadoE = valorOriginal * 0.001300;
      resultado.innerHTML = "€ " + resultadoE.toFixed(2);
    } else if (moeda2 === "dolar") {
      var resultadoD = valorOriginal * 0.001400;
      resultado.innerHTML = "$ " + resultadoD.toFixed(2);
    }
  }
}