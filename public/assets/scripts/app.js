document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('carousel-inner')) carregarIndex();
  else carregarDetalhes();
});

async function carregarIndex() {
  try {
    const response = await fetch('http://localhost:3000/receitas');
    const receitas = await response.json();

    const ci = document.getElementById('carousel-inner');
    const cc = document.getElementById('cardContainer');

    receitas.filter(r => r.destaque).forEach((r, i) => {
      ci.innerHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${r.imagem_principal}" class="d-block w-100" alt="${r.titulo}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${r.titulo}</h5><p>${r.descricao}</p>
          </div>
        </div>`;
    });

    receitas.forEach(r => {
      cc.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${r.imagem_principal}" class="card-img-top" alt="${r.titulo}">
            <div class="card-body">
              <h5 class="card-title">${r.titulo}</h5>
              <p class="card-text">${r.descricao}</p>
              <a href="detalhes.html?id=${r.id}" class="btn btn-primary">Ver Receita</a>
            </div>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error('Erro ao carregar receitas:', error);
  }
}

async function carregarDetalhes() {
  try {
    const id = new URLSearchParams(location.search).get('id');
    const response = await fetch(`http://localhost:3000/receitas/${id}`);
    const r = await response.json();

    if (!r) return;

    document.getElementById('detalhes-container').innerHTML = `
      <h2 class="mt-3">${r.titulo}</h2>
      <img src="${r.imagem_principal}" class="img-fluid mb-3" alt="${r.titulo}">
      <p>${r.descricao}</p>
      <h4>Ingredientes</h4><ul>${r.ingredientes.map(i => `<li>${i}</li>`).join('')}</ul>
      <h4>Modo de Preparo</h4><pre>${r.modo_preparo}</pre>
      <h4>Fotos Complementares</h4>
      <div class="row mb-3">${r.imagens_complementares.map(img => `
        <div class="col-6 mb-3">
          <img src="${img.src}" class="img-fluid" alt="${img.descricao}">
          <p>${img.descricao}</p>
        </div>`).join('')}</div>
      <p><strong>Autor:</strong> ${r.autor}</p>
      <p><strong>Data:</strong> ${r.data}</p>`;
  } catch (error) {
    console.error('Erro ao carregar detalhes:', error);
  }
}
