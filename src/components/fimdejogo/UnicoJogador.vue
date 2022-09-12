<template>
    <div class="flex flex-col gap-6" sm:gap-10>
        <div class="text-center">
            <h2 class="text-body-bg font-bold text-2xl sm:text-6xl">
                Você fez isso!
            </h2>
            <p class="text-title font-bold text-2xl sm:text-lg">Fim de jogo! Aqui está como você se saiu...</p>
        </div>
        <div class="flex flex-col gap-2 sm:gap-4">
            <div class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secundary-idle sm:px-8">
                <p class="text-xs text-title sm:text-lg">Tempo decorrido</p>
                <p class="text-xl text-dark-active sm:text-3xl">{{ minutos }}:{{ segundos }}</p>
            </div>
            <div class="rounded-md font-bold px-4 py-3 flex justify-between items-center bg-secondary-idle sm:px-8">
                <p class="text-xs text-title sm:text-lg">Movimentos Realizados</p>
                <p class="text-xl text-dark-active sm:text-3xl">{{ armazenar.jogoInstancia.rodada }} Movimentos</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

const segundos = computed(() => {
    return (armazenar.jogoInstancia.tempo % 60).toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
})

const minutos = computed(() => {
    return Math.floor(armazenar.jogoInstancia.tempo / 60)
})
</script>