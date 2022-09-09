<template>
    <div class="flex justify-center gap-6">
        <div class="text-center  bg-secondary-idle rounded py-3 w-full sm:w-64 sm:flex sm:items-center sm:justify-between sm:px-6">
            <p class="text-title font-bold sm:text-lg">Tempo</p>
            <p class="text-dark-active text-2xl font-bold sm:text-3xl">{{ minutos }}:{{ segundos }}</p>
        </div>
        <div class="text-center  bg-secondary-idle rounded py-3 w-full sm:w-64 sm:flex sm:items-center sm:justify-between sm:px-6">
            <p class="text-title font-bold sm:text-lg">Movimentos</p>
            <p class="text-dark-active text-2xl font-bold sm:text-3xl">{{ armazenar.jogoInstancia.rodada }}</p>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

const segundos = computed(() => {
    return(armazenar.jogoInstancia.tempo % 60).toLocaleString('pt-br', {
        minimumIntegerDigits: 2,
        useGrouping: false
    })
})

const minutos = computed(() => {
    return Math.floor(armazenar.jogoInstancia.tempo / 60)
})
</script>