<template>
    <div class="notification is-warning">
        Produto adicionado
    </div>    
</template>
<script>
import { onUnmounted } from '@vue/runtime-core'
export default {
    setup() {
        onUnmounted(() => {
            console.log('aa')
        })
    },
}
</script>
<style scoped>
    .notification {
        height: 4em;
    }
</style>