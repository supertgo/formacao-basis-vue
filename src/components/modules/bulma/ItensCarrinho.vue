<template>
    <ul v-if="produtos.length">
        <li v-for="(produto, indice) in produtos" :key="indice">
           <p>{{produto.nome}} </p>
           <p>{{produto.preco}} </p>
           <div class="remover-item-carrinho">
                <button class="button is-danger is-small" @click="removeItensCarrinho(indice)">Remover</button>
            </div>    
        </li>
    </ul>
    <ul v-else>
        <li> Não há itens no carrinho</li>
    </ul>
</template>
<script>
import { removeItensCarrinho } from '../../../store'
export default {
    props: ['produtos'],
    setup () {
        return {
            removeItensCarrinho
        }
    }
}
</script>



<style scoped>

ul {
    background-color: #ffffff;
    position: absolute;
    width: 15em;
    padding: 10px;
    margin-top: 1em;
    padding-top: 1em;
    right: 5px;
    overflow-y: auto;
    box-shadow: #797979 -3px 6px 9px -1px;
    max-height: 60vh;
}

ul li {
    padding: 5px 0 5px 0;
    border-bottom: 1px solid #cccccc78;
    display: table;
    width: 100%;
}
.remover-item-carrinho {
    float: right;
}
.is-small {
    font-size: 11px;
    padding: 5px;
    float: right;
}

</style>