async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const resposta = await conexao.json();

  return resposta;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil vizualizações`,
      url: url,
      imagem: imagem,
    }),
  });
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const resposta = await conexao.json();
  return resposta;
}

async function buscaVideos(termoDeBusca) {
  const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
  const resposta = await conexao.json();

  return resposta;
}

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideos,
};
