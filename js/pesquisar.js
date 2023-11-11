import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideos(evento) {
  evento.preventDefault();

  const pesquisar = document.querySelector("[data-pesquisar=input]").value;
  const busca = await conectaApi.buscaVideos(pesquisar);

  const lista = document.querySelector("[data-lista]");
  //   lista.innerHTML = "";

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
  if (busca.length == 0) {
    lista.innerHTML = `<h2 class="mensagem__titulo">Vídeos não encontrados com o termo "${pesquisar}"</h2>`;
  }
}

const btnPesquisar = document.querySelector("[data-pesquisar=botao]");
btnPesquisar.addEventListener("click", (evento) => {
  buscarVideos(evento);
});

// SEGUNDA ALTERNATIVA

// const pesquisar = document.querySelector("[data-pesquisar=input]");
// const btnPesquisar = document.querySelector("[data-pesquisar=botao]");

// btnPesquisar.addEventListener("click", () => {
//   const regex = /[\u0300-\u036f]/g; // expressão para remover acentos e cedilh

//   const palavraChave = pesquisar.value
//     .toLowerCase()
//     .normalize("NFD")
//     .replace(regex, "");
//   const cardVideos = document.querySelectorAll(".videos__item");

//   cardVideos.forEach((video) => {
//     // normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Comando para remover acentos e cedilha

//     const titulo = video
//       .querySelector("h3")
//       .textContent.toLowerCase()
//       .normalize("NFD")
//       .replace(regex, "");
//     video.style.display = palavraChave
//       ? titulo.includes(palavraChave)
//         ? "block"
//         : "none"
//       : "block";
//   });
// });
