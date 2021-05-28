<template>
    <section>
            <div class="card-container">
                <div v-for="(produto, indice) in state.produtos" :key="indice" class="card-content">
                    <ComponetCar :nome="produto.nome" :descricao="produto.descricao" :preco="produto.preco" class="card" />
                </div>
            </div>
            
    </section>
</template>

<script>
import { getState } from '@/store'
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import ComponetCar from '../modules/bulma/Card'

export default {
    components: {
        ComponetCar
    },
    setup() {
        const state = reactive({
            produtos: getState.produtos
        })

        watch(
            () => getState.resultadoPesquisaProduto,
            (atual, anterior) => {
                console.log(atual, anterior)
                state.produtos = getState.produtos.filter(produto => produto.nome.toLowerCase().indexOf(atual.toLowerCase()) >= 0)
            }
        )

        return {
            getState,
            state
        }

    }
}
</script>

<style scoped>
    section {
        max-width: 51em;
        margin: auto;
    }
    .card-container {
        display: flex;
        flex-wrap: wrap;
    }
    .card-content {
        margin: -8px;
    }

    .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    }
</style>