<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img :src="imagem || 'https://bulma.io/images/placeholders/96x96.png'" alt="Placeholder image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">{{produto.nome}}</p>
                    <p class="subtitle is-6">{{produto.preco}}</p>
                </div>
            </div>

            <div class="content">
                <p>{{produto.descricao}}</p>
                <div>
                    <button class="button is-info is-outlined is-small" @click="adicionarItensCarrinho(produto)">Comprar</button>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    props: ['produto', 'adicionarItensCarrinho']
}
</script>
<style scoped>
    .card {
        width: 15em;
        box-shadow: #ccc 0px 1px 0px 2px;
        height: 14em;
    }
    button {
        float: right;
        margin-top: .7em;
    }
    .media {
        margin-bottom: 2em !important;
    }
    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 1em; 
    }
</style>