const key = "a3ee244b6b6c3b72466170329017f28d";

function colocarDadosNaTela(dados) {
  // console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp_max").innerHTML = "Temperatura Máxima " + Math.floor(dados.main.temp_max) + "ºC";
  document.querySelector(".temp").innerHTML = "Temperatura Atual "+ Math.floor(dados.main.temp) + "ºC";
  document.querySelector(".temp_min").innerHTML = "Temperatura Mínima " + Math.floor(dados.main.temp_min) + "ºC";
  document.querySelector(".texto-previsao").innerHTML =
    dados.weather[0].description;
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
  document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

return dados;
}

function cliqueiNoBotao() {
  const cidade = document.querySelector(".input-cidade").value;

  // Modifique para utilizar o retorno da função
  buscarCidade(cidade)
    .then((dados) => {
      colocarDadosNaTela(dados);
    })
    .catch((erro) => {
      console.error("Erro ao buscar dados da cidade:", erro);
    });
}
