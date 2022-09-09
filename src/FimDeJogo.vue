<template>
    <div class="z-10 bg-black/25 fixed flex top-0 left-0 min-w-full min-h-full flex-col items-center justify-center">
       <div class="bg-white w-11/12 max-w-xs p-6 pt-8 flex flex-col gap-6 rounded-xl
    sm:max-w-sm sm:p-14 sm:pb-16 sm:gap-10">
          <div class="flex flex-col gap-4 text-lg sm:flex-row">
            <BtnPrimario class="w-full sm:py-3" @click="reiniciar">Reiniciar</BtnPrimario>
            <BtnSecundario class="w-full sm:py-3" @click="novo">Novo Jogo</BtnSecundario>
          </div>
       </div>
    </div>
</template>
<script setup>
import BtnPrimario from './components/botoes/Primario.vue'
import BtnSecundario from './components/botoes/Secundario.vue'

import { useArmazenar } from '@/stores/store'
import { onMounted } from 'vue'


const armazenar = useArmazenar()

const reiniciar = () => {
    armazenar.reiniciarJogo()
}

const novo = () => {
    armazenar.novoJogo()
}

onMounted(() => {
    armazenar.pausarJogo()
})
</script>