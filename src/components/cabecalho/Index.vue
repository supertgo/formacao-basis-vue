<template>
    <div>
        <Botoes />
    </div>
    
</template>

<script>
import Botoes from './botoes-acoes/Index'

export default {
    components: {
        Botoes
    }
}
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        position: fixed;
        z-index: 2;
        width: 100%;
        box-shadow: #ccc 1px 1px 18px;
        background-color: #fff;
    }
    
</style>