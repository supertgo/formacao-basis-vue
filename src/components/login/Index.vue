<template>
    <section>
        <div class="cabecalho-login">
            <material-icon type="mdi" :path="mdiLockOpenCheckOutline" size=40 /> Login
        </div>
        <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
                <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
            </div>
        </div>
        
        <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="password" placeholder="Senha">
            </div>
        </div>
        
        <div class="buttons">  
            <button class="button" @click="$router.push({ name: 'home' })">
                <material-icon type="mdi" :path="mdiArrowLeft" size="20" />
            </button>
            <button class="button is-success">Entrar</button>
        </div>
        <div class="buttons cadastro">
            <button class="button is-success" @click="$router.push({ name: 'cadastro' })">Não possui cadastro</button>
        </div>
    </section>
</template>
<script>
import { mdiLockOpenCheckOutline, mdiArrowLeft } from '@mdi/js';

export default {

    setup() {
        return {
            mdiLockOpenCheckOutline,
            mdiArrowLeft
        }
    },
}
</script>

<style scoped>
    section {
        max-width: 30em;
        margin: auto;
        display: flex;
        box-shadow: #00000073 1px 4px 16px 0px;
        background-color: #00000003;
        padding: 15px;
        margin-top: 5em;
        flex-direction: column;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 1em;
        margin-bottom: 1em;        
    }
    .cadastro button {
        width: 100%;
    }
    .cabecalho-login {
        margin: auto;
        margin-top: .7em;
        margin-bottom: .7em;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 4.2em;
        font-size: 2em;    
    }
</style>