<template>
    <div>
        <svgIcon type="mdi" :path="mdiCartOutline" size=40 />
        <div class="quantidade-itens-carrinho">
            <span>3</span>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiCartOutline } from '@mdi/js'

export default {
    components: {
        SvgIcon
    },
    setup() {
        return {
            SvgIcon,
            mdiCartOutline
        }
    },
}
</script>

<style scoped>
    .quantidade-itens-carrinho {
    
    }
    .quantidade-itens-carrinho span {
        
    }
</style>