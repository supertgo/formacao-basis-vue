<template>
    <div class="modal" v-if="state.exibirModal">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">Adicionar item ao carrinho</p>
        <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
        <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button" @click="funcaoExibirOcultarModal(false)">Cancel</button>
        </footer>
    </div>
    </div>    
</template>

<script>
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

export default {
    props: {
        modal: {
            type: Boolean,
            default: false
        },
        funcaoExibirOcultarModal: {
            type: Object,
            required: true
        }
    },
    setup (props) {
        const state = reactive({
            exibirModal: props.modal
        })
    
    watch((props) => props.modal, (modal) => {
        console.log('modal')
        state.exibirModal = modal
    })

        return {
            state
        }
    }
}
</script>
<style scoped>
.modal {
    display: inline;
}
</style>