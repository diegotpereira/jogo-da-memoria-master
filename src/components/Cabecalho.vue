<template>
    <header class="flex justify-between items-center">
        <h1 class="text-2x1 font-bold sm-text-4x1">Memória</h1>
        <div class="sm:hidden">
            <BtnPrimario class="px-8" @click="cliqueMovel">Menu</BtnPrimario>
            <MenuMovelPagina v-if="armazenar.menuMovel && armazenar.jogoIniciado" />
        </div>
        <div class="hidden sm:flex sm:text-xl sm-gap-4">
            <BtnPrimario class="px-6" @click="reiniciar">Reiniciar</BtnPrimario>
            <BtnSecundario class="px-6" @click="novo">Novo Jogo</BtnSecundario>
        </div>
    </header>
</template>
<script setup>
import BtnPrimario from '@/components/botoes/Primario.vue'
import BtnSecundario from '@/components/botoes/Secundario.vue'
import MenuMovelPagina from '@/components/MenuMovel.vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

const reiniciar = () => {
    armazenar.reiniciarJogo()
}

const novo = () => {
    armazenar.novoJogo()
}

const cliqueMovel = () => {
    armazenar.menuMovel = true
}

</script>