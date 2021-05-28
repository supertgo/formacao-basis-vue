<template>
            <section>
                <div class="input-pesquisa">
                    <input class="input is-info" type="text" placeholder="Pesquisar produto" v-model="state.nomeProduto">
                </div>
                <div class="botoes-acoes">
                    <button class="button is-normal">Cadastro</button>
                    <button class="button is-normal">Login</button>
                    <Carrinho class="carrinho"/>
                </div>
            </section>            
</template>

<script>
import Carrinho from "../carrinho/Index"
import { setState } from '@/store'
import { reactive, watch } from '@vue/runtime-core'

export default {
    components: {
        Carrinho
    },
    setup () {
        const state = reactive({
            nomeProduto: null
        })

        watch(
            () => state.nomeProduto,
            (atual, anterior) => {
                console.log(atual, anterior)
                setState('resultadoPesquisaProduto', atual)
            }
        )

        return {
            state
        }        
    }
    
}
</script>
<style lang="scss" scoped>
    .botoes-acoes {
        float: right;
        min-width: 14em;
        justify-content: space-between;
        display: flex;
    }
    .botoes-acoes button {
        margin-left: 5px;
    }
    .input {
        width: 100%;
    }
    section {
        display: flex;
        flex: 1;
        max-width: 77%;
        padding: 1em 0 1em 0;
    }
    .input-pesquisa {
        width: 100%;
        margin-right: 15px;
    }
    .carrinho {
        margin-left: 15px;
    }
</style>