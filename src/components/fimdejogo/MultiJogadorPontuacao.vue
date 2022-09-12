<template>
    <div class="flex flex-col gap-6 sm:gap-10">
        <div class="text-center">
            <h2 class="text-body-bg font-bold text-2xl flex justify-center items-center sm:text-6xl">
                {{ ehEmpate.length === 1 ? `Jogador ${pontuacoesJogador[0].jogador} Vitórias! ` : "É Empate!" }}
            </h2>
            <p class="text-title font-bold text-sm sm:text-lg">Fim de jogo! Aqui estão os resultados...</p>
        </div>
        <div class="flex flex-col gap-2 sm:gap-4">
            <div v-for="({ jogador, pontuacao}, index) in pontuacoesJogador" :key="index" class="rounded-lg font-bold px-4 py-3 flex justify-between items-center sm:px-8"
            :class="pontuacao === maiorPontuacao ? ['bg-body-bg', 'text-white'] : ['bg-secondary-idle', '[&>p:first-child]:text-title', '[&>p:last-child]:text-dark-active']">
               <p class="text-xs sm:text-lg">Jogador {{ jogador }} <span v-if="pontuacao === maiorPontuacao">(Vencedor)</span></p>
               <p class="text-xl sm:text-3xl">{{ pontuacao }} Pares</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useArmazenar } from '@/stores/store'
import { computed } from 'vue'

const armazenar = useArmazenar()

const pontuacoesJogador = computed(() => {
    const pontuacoes = armazenar.jogoInstancia.pontuacoes.map((pontuacao, index) => {
        return { jogador: index + 1, pontuacao: pontuacao }
    })
    return pontuacoes.sort((a, b) => a.pontuacao - b.pontuacao).reverse()
})
const maiorPontuacao = computed(() => {
    return Math.max(...armazenar.jogoInstancia.pontuacoes)
})

const ehEmpate = computed(() => {
    return armazenar.jogoInstancia.pontuacoes.filter(e => e === maiorPontuacao.value)
})
</script>
