const pacotes = [];

pacotes.push({
  codigo: "888555555123888",
});
pacotes.push({
  codigo: "333333555584333",
});
pacotes.push({
  codigo: "222333555124000",
});
pacotes.push({
  codigo: "000111555874555",
});
pacotes.push({
  codigo: "111888555654777",
});
pacotes.push({
  codigo: "111333555123333",
});
pacotes.push({
  codigo: "555555555123888",
});
pacotes.push({
  codigo: "888333555584333",
});
pacotes.push({
  codigo: "111333555124000",
});
pacotes.push({
  codigo: "333888555584333",
});
pacotes.push({
  codigo: "555888555123000",
});
pacotes.push({
  codigo: "111888555123555",
});
pacotes.push({
  codigo: "888000555845333",
});
pacotes.push({
  codigo: "000111555874000",
});
pacotes.push({
  codigo: "111333555123555",
});

const regiao = {
  111: "Centro-oeste",
  333: "Nordeste",
  555: "Norte",
  888: "Sudeste",
  "000": "Sul",
};

const tipo = {
  "000": "Jóias",
  111: "Livros",
  333: "Eletrônicos",
  555: "Bebidas",
  888: "Brinquedos",
};

const qntPacotesVendedor = {};

for (let i = 0; i < pacotes.length; i++) {
  indenticarOrigem(i);
  indenticarDestino(i);
  indenticarVendedor(i);
  indenticarTipo(i);
  indenticarValidade(i);
}

console.log("Destino dos pacotes:");
for (let i = 0; i < pacotes.length; i++) {
  console.log("Pacote " + (i + 1) + " tem como origem " + pacotes[i].destino);
}

console.log();
console.log("Pacotes válidos:");
for (let i = 0; i < pacotes.length; i++) {
  if (pacotes[i].valido) {
    console.log("Pacote " + (i + 1));
  }
}

console.log();
console.log("Pacotes inválidos:");
for (let i = 0; i < pacotes.length; i++) {
  if (!pacotes[i].valido) {
    console.log("Pacote " + (i + 1));
  }
}

console.log();
console.log(
  "Pacotes que têm como origem a região Sul e têm Brinquedos em seu conteúdo:",
);
for (let i = 0; i < pacotes.length; i++) {
  if (pacotes[i].origem == "Sul" && pacotes[i].tipo == "Brinquedo") {
    console.log("Pacote " + (i + 1));
  }
}

console.log();
for (var destino of Object.values(regiao)) {
  const pacotesRegiao = [];

  for (let i = 0; i < pacotes.length; i++) {
    if (pacotes[i].destino == destino && pacotes[i].valido) {
      pacotesRegiao.push("Pacote " + (i + 1));
    }
  }

  console.log("Pacotes válidos com destino à " + destino + ":");
  pacotesRegiao.forEach((p) => console.log(p));
  console.log();
}

console.log();
for (var [vendedor, qnt] of Object.entries(qntPacotesVendedor)) {
  console.log("Quantide de pacotes do vendedor " + vendedor + " é " + qnt);
}

console.log();
for (var destino of Object.values(regiao)) {
  const tiposRegiao = {};

  for (let i = 0; i < pacotes.length; i++) {
    if (pacotes[i].destino == destino && pacotes[i].valido) {
      if (tiposRegiao[pacotes[i].tipo] == undefined) {
        const nomePacote = "Pacote " + (i + 1);
        tiposRegiao[pacotes[i].tipo] = [nomePacote];
      } else {
        const nomePacote = "Pacote " + (i + 1);
        tiposRegiao[pacotes[i].tipo].push(nomePacote);
      }
    }
  }

  console.log("Pacotes válidos com destino à " + destino + ":");
  for (var [tipoPacote, pacotesTipo] of Object.entries(tiposRegiao)) {
    console.log("-" + tipoPacote + ":");
    pacotesTipo.forEach((p) => console.log(p));
  }
  console.log();
}

function indenticarOrigem(index) {
  const pacote = pacotes[index];

  const trincaOrigem = pacote.codigo.substring(0, 3);
  const origemPacote = regiao[trincaOrigem];

  pacote.origem = origemPacote;
}

function indenticarDestino(index) {
  const pacote = pacotes[index];

  const trincaDestino = pacote.codigo.substring(3, 6);
  const destinoPacote = regiao[trincaDestino];

  pacote.destino = destinoPacote;
}

function indenticarVendedor(index) {
  const pacote = pacotes[index];

  const trincaVendendor = pacote.codigo.substring(9, 12);
  pacote.vendedor = trincaVendendor;

  if (qntPacotesVendedor[trincaVendendor] == undefined && pacotes[i].valido) {
    qntPacotesVendedor[trincaVendendor] = 1;
  } else{
    const qnt = qntPacotesVendedor[trincaVendendor];
    qntPacotesVendedor[trincaVendendor] = qnt + 1;
  }
}

function indenticarTipo(index) {
  const pacote = pacotes[index];

  const trincaTipo = pacote.codigo.substring(12, 15);
  const tipoPacote = tipo[trincaTipo];

  pacote.tipo = tipoPacote;
}

function indenticarValidade(index) {
  const pacote = pacotes[index];

  if (pacote.tipo == undefined) {
    pacote.valido = false;
  } else if (pacote.tipo == "Jóias" && pacote.origem == "Centro-oeste") {
    pacote.valido = false;
  } else if (pacote.vendedor == "584") {
    pacote.valido = false;
  } else {
    pacote.valido = true;
  }
}
