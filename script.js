const cep = document.getElementById("cep");
const cepMostra = document.querySelector(".cep");
const logradouro = document.querySelector(".logradouro");
const bairro = document.querySelector(".bairro");
const cidade = document.querySelector(".cidade");
const estado = document.querySelector(".estado");
const btn = document.querySelector(".buscaCep");
btn.addEventListener("click", handleClick);
function handleClick(event) {
  const cep2 = cep.value;
  buscaCep(cep2);
  event.preventDefault();
}
function buscaCep(cep) {
  const url = fetch(`https://viacep.com.br/ws/${cep}/json/`);
  url.then((response) => {
    response.json().then((cp) => {
      if (cp.erro != true) {
        logradouro.innerText = cp.logradouro;
        bairro.innerText = cp.bairro;
        cidade.innerText = cp.localidade;
        estado.innerText = cp.uf;
        cepMostra.innerHTML = cp.cep;
      } else {
        cepMostra.innerHTML = "CEP DIGITADO É INVÁLIDO!";
      }
    });
  });
}
