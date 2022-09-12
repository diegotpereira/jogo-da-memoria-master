<template>
    <div class="flex flex-col gap-20">
        <div class="grid gap-3 w-full mx-auto max-w-xs" :class="armazenar.getGradeTamanho === 4 ? tamanhoGrade4 : tamanhoGrade6" 
        :style="[`gridTemplateColumns: repeat(${armazenar.getGradeTamanho}, 1fr)`]">
            <CartaoPagina class="font-bold" @click="selecionarCartao(index)" :selecionado="armazenar.jogoInstancia?.selecionarPar?.includes(index)"
               :resolvido="armazenar.jogoInstancia?.resolvido?.includes(index)" v-for="(item, index) in armazenar.jogoInstancia.grade" :key="index">
                <p v-if="armazenar.jogoConfig.theme === 0" :class="armazenar.reiniciando ? 'hidden' : '' ">
                    {{ item }}
                </p>
                <i v-else class="fa-solid" :class="[armazenar.reiniciando ? 'hidden' : '', icons[item]]"></i>
            </CartaoPagina>
        </div>
        <MultiJogadorPagina v-if="armazenar.ehMultiJogador" />
        <UnicoJogadorPagina v-else />
        <FimDeJogoPagina v-if="armazenar.ehFimDeJogo" />
    </div>
</template>
<script setup>
import CartaoPagina from './jogo/Cartao.vue'
import MultiJogadorPagina from './jogo/MultiJogador.vue'
import UnicoJogadorPagina from './jogo/UnicoJogador.vue'
import FimDeJogoPagina from './FimDeJogo.vue'

import { useArmazenar } from '@/stores/store'
import { ref } from 'vue'

const armazenar = useArmazenar()

const tamanhoGrade4 = ['gap-3', 'text-4xl', 'sm:max-w-[532px]', 'sm:gap-4', 'sm:text-7xl']
const tamanhoGrade6 = ['gap-2', 'text-2xl', 'sm:max-w-[572px]', 'sm:text-5xl']

const podeInteragir = ref(true)
const prevSelecionado = ref(null)

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

    console.log(i);
    // includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
    if (armazenar.jogoInstancia?.resolvido?.includes(i) || prevSelecionado.value === i) {
        return
    }

    if (podeInteragir.value) {
        podeInteragir.value = false

        armazenar.jogoInstancia.selecionarPar.push(i)
        prevSelecionado.value = i 

        if (armazenar.jogoInstancia.selecionarPar.length === 2) {
            if (verifiqueSePar()) {
                console.log("É Par");

                setTimeout(emPar, 1000)
            } else {
                console.log("Não é Par");
                setTimeout(emNaoPar, 1000)
            }
        } else {
            podeInteragir.value = true
        }
    }
}
const verifiqueSePar = () => {
    return armazenar.jogoInstancia.grade[armazenar.jogoInstancia.selecionarPar[0]] === armazenar.jogoInstancia.grade[armazenar.jogoInstancia.selecionarPar[1]]
}
const emPar = () => {
    armazenar.marcarComoResolvido(armazenar.jogoInstancia.selecionarPar)
    limparSelecionado()
}
const emNaoPar = () => {
    armazenar.proximaRodada
    limparSelecionado()
}

const limparSelecionado = () => {
    armazenar.jogoInstancia.selecionarPar = []
    podeInteragir.value = true
}
</script>