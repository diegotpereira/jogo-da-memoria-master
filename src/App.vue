<template>
  <div :class="armazenar.jogoIniciado ? ['bg-white'] : ['bg-body-bg']">
    <div class="min-h-screen flex flex-col gap-20 mx-auto w-11/12 max-w-xs py-6 sm:max-w-md lg:max-w-lg sm:py-11 lg:py-16">
       <CabecalhoPagina v-if="armazenar.jogoIniciado" />
       <main>
        <div>
          <MenuPrincipalPagina v-if="!armazenar.jogoIniciado" />
          <MemoriaJogoPagina  v-else />
        </div>
       </main>
    </div>
  </div>
</template>
<script setup>
import CabecalhoPagina from '@/components/Cabecalho.vue'
import MenuPrincipalPagina from './components/MenuPrincipal.vue'
import MemoriaJogoPagina from './components/MemoriaJogo.vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

</script>
<style scoped>
</style>
