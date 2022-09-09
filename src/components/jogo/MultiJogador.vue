<template>
    <div class="flex judtify-center gap-6">
        <div class="text-center rounded p-3 w-full relative sm:text-left sm:w-64 sm:px-5 lg:flex lg:items-center lg:justify-between lg:rounded-xl"
        :class="armazenar.jogoInstancia.rodada === index ? ['bg-primary-idle', 'arrow-up', 'current-turn'] : ['bg-secondary-idle']"
        v-for="(pontuacao, index) in armazenar.jogoInstancia.pontuacoes" :key="index">
           <p class="font-bold lg:text-lg" :class="armazenar.jogoInstancia.rodada === index ? ['text-white'] : ['text-title']">
               <span class="sm:hidden">J</span><span class="hidden sm:inline">Jogador</span> {{ index + 1 }}
           </p>
           <p class="text-2x1 font-bold lg:text-3x1"
           :class="armazenar.jogoInstancia.rodada === index ? ['text-white'] : ['text-dark-active']">
               {{ pontuacao }}
           </p>
        </div>
    </div>
</template>
<script setup>
import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()
</script>