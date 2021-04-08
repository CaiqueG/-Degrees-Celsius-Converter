function adicionarValor() {
  var valorEmCelsius = document.querySelector("#valor");     // Seleciona o campo em branco
  var valorEmCelsius2 = valorEmCelsius.value;                // Seleciona o que foi digitado no campo
  var valorEmFahrenheit = (valorEmCelsius2 * 9) / 5 + 32;
  valorEmFahrenheit = valorEmFahrenheit.toFixed(2);          // Fixa a variável em duas casas depois da vírgula
  var valorEmFahrenheit2 =
    "O valor em Fahrenheit é: " + valorEmFahrenheit + "°F"; 
  var valorFinal = document.getElementById("valorFinal");   // Seleciona a div em que o valor final vai aparecer na tela
  valorFinal.innerHTML = valorEmFahrenheit2;                // exibe o valor na tela
}
