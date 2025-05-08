const dados = {
    "receitas": [
      {
        "id": 1,
        "titulo": "Feijoada Completa",
        "descricao": "Feijoada rica em sabor, com carnes dessalgadas e feijão cozido lentamente.",
        "ingredientes": [
          "1,1 kg de costela de porco salgada",
          "800 g de carne-seca",
          "600 g de lombo de porco salgado",
          "500 g de paio (4 unidades)",
          "3 cebolas picadas",
          "5 dentes de alho picados",
          "¼ xícara (chá) de azeite",
          "3 folhas de louro",
          "1 colher (chá) de cominho em pó",
          "6 l de água para cozimento"
        ],
        "modo_preparo":
  `1. No dia anterior, deixe as carnes de molho em água, trocando a cada 3 h, por 24 h para dessalgar.
  2. Faça um pré-cozimento: coloque as carnes em panela grande, cubra com água, ferva 10 min e descarte a água.
  3. Refogue 3 colheres de azeite com cebola e alho até dourar (8 min), junte cominho e louro por 1 min.
  4. Adicione o feijão demolhado, cubra com 6 l de água e ferva.
  5. Acrescente costela e carne-seca pré-cozidas, cozinhe em fogo baixo por 2 h, mexendo ocasionalmente.
  6. Incorpore o lombo e o paio inteiros, cozinhe mais 3 h em fogo baixo.
  7. Nos últimos 30 min, fatie o paio, volte à panela e finalize o cozimento (total ~5 h).
  8. Sirva com arroz branco, couve refogada, gomos de laranja e farinha de mandioca torrada.`,
        "autor": "Joana",
        "destaque": true,
        "data": "2025-04-25",
        "imagem_principal": "assets/img/feijoada1.jpeg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/img/feijoada.png", "descricao": "Feijoada" },
          { "id": 2, "src": "assets/img/feijoada2.jpeg", "descricao": "Feijoada servida" }
        ]
      },
      {
        "id": 2,
        "titulo": "Moqueca de Peixe",
        "descricao": "Ensopado baiano de peixe em leite de coco e azeite de dendê.",
        "ingredientes": [
          "4 postas de cação ou garoupa (700 g)",
          "Suco de 1 limão",
          "1 cebola grande em rodelas",
          "1 pimentão vermelho em rodelas",
          "1 pimentão verde em rodelas",
          "2 tomates maduros em rodelas",
          "2 colheres (sopa) de coentro picado",
          "200 ml de leite de coco",
          "1 colher (sopa) de azeite de dendê",
          "2 tabletes de caldo de camarão"
        ],
        "modo_preparo":
  `1. Lave o peixe, tempere com suco de limão e deixe descansar 1 h.
  2. Em panela grande, arrume camadas de peixe, cebola, pimentões e tomates; polvilhe coentro.
  3. Esfarele o caldo de camarão no leite de coco e regue o peixe.
  4. Cozinhe em fogo baixo, panela semi­tampada, por 20 min, mexendo ocasionalmente.
  5. Adicione o azeite de dendê, ajuste o sal, misture e desligue.
  6. Sirva com arroz branco, pirão ou farofa.`,
        "autor": "Iris",
        "destaque": true,
        "data": "2025-04-26",
        "imagem_principal": "assets/img/moqueca1.jpeg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/img/moqueca.jpeg", "descricao": "Moqueca servida" },
          { "id": 2, "src": "assets/img/moqueca2.jpeg", "descricao": "Detalhe do prato" }
        ]
      },
      {
        "id": 3,
        "titulo": "Acarajé",
        "descricao": "Bolinho frito de feijão-fradinho, recheado com vatapá e camarão.",
        "ingredientes": [
          "500 g de feijão-fradinho cru",
          "500 g de cebola (1 pequena com casca)",
          "Sal a gosto",
          "500 ml de óleo para fritar",
          "500 ml de azeite de dendê",
          "2 xícaras (chá) de vatapá",
          "150 g de camarão seco"
        ],
        "modo_preparo":
  `1. Bata feijão inteiro e cebola no processador por 3 min até virar pasta lisa.
  2. Deixe a massa descansar 10 min e bata até triplicar de volume.
  3. Aqueça óleo e azeite de dendê com a casca da cebola.
  4. Modele bolinhos com duas colheres e frite 3 min de cada lado até dourar.
  5. Escorra em papel absorvente, abra ao meio e recheie com vatapá e camarão.
  6. Sirva quente.`,
        "autor": "Pedro",
        "destaque": false,
        "data": "2025-04-27",
        "imagem_principal": "assets/img/acaraje.jpeg",
        "imagens_complementares": [
          { "id": 1, "src": "assets/img/acaraje1.jpeg", "descricao": "Bolinhos na fritura" },
          { "id": 2, "src": "assets/img/acaraje2.jpeg", "descricao": "Acarajé recheado" }
        ]
      }
    ]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('carousel-inner')) carregarIndex();
    else carregarDetalhes();
  });
  
  function carregarIndex() {
    const ci = document.getElementById('carousel-inner'), cc = document.getElementById('cardContainer');
    dados.receitas.filter(r=>r.destaque).forEach((r,i) => {
      ci.innerHTML += `
        <div class="carousel-item ${i===0?'active':''}">
          <img src="${r.imagem_principal}" class="d-block w-100" alt="${r.titulo}">
          <div class="carousel-caption d-none d-md-block">
            <h5>${r.titulo}</h5><p>${r.descricao}</p>
          </div>
        </div>`;
    });
    dados.receitas.forEach(r => {
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
  }
  
  function carregarDetalhes() {
    const id = parseInt(new URLSearchParams(location.search).get('id')), r = dados.receitas.find(x=>x.id===id);
    if(!r) return;
    document.getElementById('detalhes-container').innerHTML = `
      <h2 class="mt-3">${r.titulo}</h2>
      <img src="${r.imagem_principal}" class="img-fluid mb-3" alt="${r.titulo}">
      <p>${r.descricao}</p>
      <h4>Ingredientes</h4><ul>${r.ingredientes.map(i=>`<li>${i}</li>`).join('')}</ul>
      <h4>Modo de Preparo</h4><pre>${r.modo_preparo}</pre>
      <h4>Fotos Complementares</h4>
      <div class="row mb-3">${r.imagens_complementares.map(img=>`
        <div class="col-6 mb-3">
          <img src="${img.src}" class="img-fluid" alt="${img.descricao}">
          <p>${img.descricao}</p>
        </div>`).join('')}</div>
      <p><strong>Autor:</strong> ${r.autor}</p>
      <p><strong>Data:</strong> ${r.data}</p>`;
  }