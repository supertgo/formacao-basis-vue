<template>
    <div>
        <svgIcon type="mdi" :path="mdiCartOutline" size=40 />
        <div class="quantidade-itens-carrinho">
            <span>{{totalItensCarrinho}}</span>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartOutline, mdiAccountArrowLeft } from '@mdi/js';
import { getState } from '@/store'

export default {
    components: {
        SvgIcon
    },
    computed: {
        totalItensCarrinho: () => {
            return getState.itensAdicionadosCarrinho.length
        }
    },    
    setup() {
        return {
            SvgIcon,
            mdiCartOutline,
            mdiAccountArrowLeft,
            getState
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
</style>