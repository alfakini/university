import React from 'react';
import renderer from 'react-test-renderer';

// Implemente o componente React que renderiza uma receita de Tofu Assado
// Na pasta __snapshots__ você vai encontrar o componente alvo renderizado

describe('React', function() {
  const items = [
    {
      nome: "Tofu Assado",
      ingredientes: [
        "1 Tofu",
        "1 Copo de Noses",
        "2 Copos Alface",
        "1 Abóbora Amarela",
        "1/2 Copo de Óleo de Oliva",
        "3 Dentes de Alho"
      ],
      preparo: [
        "Pré-aqueça o forno a 350 graus.",
        "Espalhe o óleo de oliva em torno de uma vasilha de vidro.",
        "Adicione o Tofu, o alho e as nooses ao prato.",
        "Asse por 15 minutos.",
        "Adicione a abóbora amarela e coloque-a no forno por 30 minutos.",
        "Retire do forno e deixe esfriar por 15 minutos. Adicione a alface e sirva."
      ]
    },
    {
      nome: "Chocolate quente",
      ingredientes: [
        "2 colheres de sopa de abóbora (cozinhada a vapor)",
        "1/2 colher de chá de mistura de especiarias (cardamomo, canela, noz moscada, pimenta preta)",
        "1 tâmara medjool",
        "2 colheres de sopa de essência de baunilha ou vagem de baunilha",
        "2 +1/2 chávenas de bebida vegetal de avelã",
        "1 colher de cacau em pó",
        "Chantili vegan para servir"
      ],
      preparo: [
        "Num tacho pequeno cozinhar a abóbora com as especiarias, cerca de dois minutos mexendo sempre.",
        "Picar a tâmara e adicionar à abóbora.",
        "Juntar a baunilha em vagem ou essência e continuar a mexer.",
        "Adicionar a bebida vegetal à abóbora e continuar a mexer, sem deixar aquecer.",
        "Colocar a mistura num liquidificador e bater até ficar bem liquido. (Se utilizares vagem de baunilha, retira antes de liquidificar)",
        "Aquecer 1/2 chávena de bebida vegetal e adicionar o chocolate",
        "Juntar com a abóbora e mexer",
        "Decorar com chantili ou marshmallows vegan."
      ]
    }
  ]

  function createReceitas(receitas) {
    return // IMPLEMENTE. Implemente qualquer outra função extra que achar necessário
  }

  it('renderiza corretamente o componente gerado pela função createReceitas', function() {
    const component = renderer.create(createReceitas(items));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
