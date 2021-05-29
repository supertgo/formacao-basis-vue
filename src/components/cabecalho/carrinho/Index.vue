<template>
    <div>
        <span @click="state.exibirItensCarrinho = !state.exibirItensCarrinho">
            <svgIcon type="mdi" :path="mdiCartOutline" size=40 />
            <div class="quantidade-itens-carrinho">{{getState.itensAdicionadosCarrinho.length}}</div>
        </span>
        <transition name="fade">
            <ItensCarrinho :produtos="getState.itensAdicionadosCarrinho" v-if="state.exibirItensCarrinho" />
        </transition>    
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartOutline, mdiAccountArrowLeft } from '@mdi/js';
import { getState } from '@/store'
import ItensCarrinho from '../../modules/bulma/ItensCarrinho'
import { reactive } from '@vue/reactivity';

export default {
    components: {
        SvgIcon,
        ItensCarrinho
    },
    computed: {
        totalItensCarrinho: () => {
            return getState.itensAdicionadosCarrinho.length
        }
    },    
    setup() {
        const state = reactive({
            exibirItensCarrinho: false
        })

        return {
            SvgIcon,
            mdiCartOutline,
            mdiAccountArrowLeft,
            getState,
            state
            
        }
    }
}
</script>

<style scoped>
    .quantidade-itens-carrinho {
        position: absolute;
        top: 11px;
        margin-left: 23px;
        background-color: red;
        border-radius: 100%;
        height: 23px;
        width: 23px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 14px;    
    }
    .quantidade-itens-carrinho span {

    }
    span:hover {
        cursor: pointer;
    }
</style>