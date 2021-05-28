import { reactive } from "@vue/reactivity"

const getState = reactive ({
    produtos: [
        {
            nome: 'Caderno',
            preco: 'R$ 5.00',
            descricao: 'Caderno sem pauta'
        },
        {
            nome: 'Apontador',
            preco: 'R$ 10.00',
            descricao: 'Apontador de lápis'
        },
        {
            nome: 'Mochila',
            preco: 'R$ 50.00',
            descricao: 'Mochila tamanho G'
        },
        {
            nome: 'Uniforme escolar',
            preco: 'R$ 10.00',
            descricao: 'Uniforme tamanho M'
        },
        {
            nome: 'Lápis',
            preco: 'R$ 10.00',
            descricao: 'Lápis para colorir'
        },
        {
            nome: 'Borracha',
            preco: 'R$ 5.00',
            descricao: 'Borrachar apaga texto'
        },
        {
            nome: 'Caneta',
            preco: 'R$ 2.00',
            descricao: 'Caneta azul'
        },
        {
            nome: 'Lapizeira',
            preco: 'R$ 2.00',
            descricao: 'Lapizeira para texto'
        }                                                                        
    ],
    resultadoPesquisaProduto: '',
    itensAdicionadosCarrinho: []
})

const setState = (propriedade, valor)  => {
    getState[propriedade] = valor
}

export {
    getState,
    setState
}