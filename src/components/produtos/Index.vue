<template>
    <section>
            <div class="card-container">
                <div v-for="(produto, indice) in state.produtos" :key="indice" class="card-content">
                    <CompontenteCard 
                        :produto="produto" 
                        :adicionarItensCarrinho="adicionarItensCarrinho"
                        class="card" />
                </div>
            </div>
    </section>
</template>

<script>
import { getState, setItensCarrinho } from '@/store'
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'
import CompontenteCard from '../modules/bulma/Card'

export default {
    components: {
        CompontenteCard
    },
    setup() {
        const state = reactive({
            produtos: getState.produtos
        })

        const adicionarItensCarrinho = (produto) => {
            setItensCarrinho(produto)
        }

        watch(
            () => getState.resultadoPesquisaProduto,
            (resultadoPesquisaProduto) => {

                state.produtos = getState.produtos.filter(produto => {
                    return produto.nome.toLowerCase().indexOf(resultadoPesquisaProduto.toLowerCase()) >= 0
                })
            }
        )

        return {
            getState,
            state,
            adicionarItensCarrinho,
            setItensCarrinho
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
        justify-content: center;
    }
    .card-content {
        margin: -8px;
    }
</style>