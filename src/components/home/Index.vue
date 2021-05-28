<template>
    <div>
        <Cabecalho />
        <Produtos class="sessao-produtos"/>
    </div>
</template>

<script>
import Cabecalho from '../cabecalho/Index'
import Produtos from '../produtos/Index'

export default {
    components: {
        Cabecalho,
        Produtos
    }
}
</script>

<style scoped>
    .sessao-produtos {
        padding-top: 5em;
    }
</style>