<template>
    <div class="z-10 bg-black/25 fixed flex top-0 left-0 min-w-full min-h-full flex-col items-center justify-center">
        <div class="bg-white w-11/12 max-w-xs p-6 flex flex-col gap-4 rounded-xl">
           <BtnPrimario @click="reiniciar">Reiniciar</BtnPrimario>
           <BtnSecundario @click="novoJogo">Novo Jogo</BtnSecundario>
           <BtnSecundario @click="retomarJogo">Retomar Jogo</BtnSecundario>
        </div>
    </div>
</template>
<script setup>
import BtnPrimario from './botoes/Primario.vue'
import BtnSecundario from './botoes/Secundario.vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

const reiniciar = () => {
    armazenar.reiniciarJogo()
    armazenar.menuMovel = false 
}

const novoJogo = () => {
    armazenar.novoJogo()
    armazenar.menuMovel = false
}

const retomarJogo = () => {
    armazenar.menuMovel = false
}
</script>