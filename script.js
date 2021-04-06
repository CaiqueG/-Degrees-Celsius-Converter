function adicionarValor() {
  var valorEmCelsius = document.querySelector("#valor");
  var valorEmCelsius2 = valorEmCelsius.value;
  var valorEmFahrenheit = (valorEmCelsius2 * 9) / 5 + 32;
  valorEmFahrenheit = valorEmFahrenheit.toFixed(2);
  var valorEmFahrenheit2 =
    "O valor em Fahrenheit é: " + valorEmFahrenheit + "°F";
  var valorFinal = document.getElementById("valorFinal");
  valorFinal.innerHTML = valorEmFahrenheit2;
}
