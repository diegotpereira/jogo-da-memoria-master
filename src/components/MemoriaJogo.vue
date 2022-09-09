<template>
    <div class="flex-flex-col gap-20">
        <div class="grid-gap-3 w-full mx-auto max-w-ws" :class="armazenar.getGradeTamanho === 4 ? tamanhoGrade4 : tamanhoGrade6" 
        :style="[`gridTemplateColumns: repeat(${armazenar.getGradeTamanho}, 1fr)`]">
            <CartaoPagina class="font-bold" @click="selecionarCartao(index)" :selected="armazenar.jogoInstancia?.selecionarPar?.includes(index)"
               :solved="armazenar.jogoInstancia?.solved?.includes(index)" v-for="(item, index) in armazenar.jogoInstancia.grade" :key="index">
                <p v-if="armazenar.jogoConfig.tema === 0" :class="armazenar.reiniciando ? 'hidden' : '' ">
                    {{ item }}
                </p>
                <i class="fa-solid" :class="[jogo.reiniciando ? 'hidden' : '', icons[item]]"></i>
            </CartaoPagina>
        </div>
    </div>
</template>
<script setup>
import CartaoPagina from './components/jogo/Cartao.vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()

const tamanhoGrade4 = ['gap-3', 'text-4xl', 'sm:max-w-[532px]', 'sm:gap-4', 'sm:text-7xl']
const tamanhoGrade6 = ['gap-2', 'text-2xl', 'sm:max-w-[572px]', 'sm:text-5xl']

const icons = [
  '',
  'fa-archway',
  'fa-anchor',
  'fa-apple-whole',
  'fa-award',
  'fa-bahai',
  'fa-briefcase-medical',
  'fa-burger',
  'fa-camera-retro',
  'fa-car'
]

const selecionarCartao = (i) => {

}
</script>