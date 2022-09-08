<template>
    <div class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 max-w-xs 
  sm:max-w-sm">
      <h1 class="font-bold text-center text-white text-3xl pb-12">Memória Menu</h1>
      <IniciarJogoPagina />
    </div>
</template>
<script setup>
import IniciarJogoPagina from './menuPrincipal/IniciarJogo.vue'
import { onMounted } from 'vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

onMounted(() => {
  armazenar.$reset
})

</script>