<template>
    <div class="bg-white p-6 rounded-xl w-full flex flex-col gap-4 sm:p-14">
        <div class="pb-4 flex flex-col gap-5 sm:gap-7">
            <div>
                <h2 class="text-title font-bold pb-2 sm-text-xl sm:pb-4">Selecione Tema</h2>
                <SelecaoPagina class="gap-2.5 sm:gap-5 sm:text-2xl"  :opcoes="config.tema.opcoes" :state="jogoConfig.tema" @update:state="atualizarTema" />
            </div>
            <div>
                <h2 class="text-title font-bold pb-2 sm-text-xl sm:pb-4">Número Jogadores</h2>
                <SelecaoPagina class="gap-2.5 sm:gap-5 sm:text-2xl" :opcoes="config.jogadores.opcoes" :state="jogoConfig.jogadores" @update:state="atualizarJogadores" />
            </div>
            <div>
                <h2 class="text-title font-bold pb-2 sm-text-xl sm:pb-4">Tamanho Grade</h2>
                <SelecaoPagina class="gap-2.5 sm:gap-5 sm:text-2xl" :opcoes="config.tamanho.opcoes" :state="jogoConfig.tamanho" @update:state="atualizarTamanho" />
            </div>
        </div>
        <MenuGrandePagina class="pp-2.5 sm:text-2xl" @click="iniciarJogo">Iniciar Jogo</MenuGrandePagina>
    </div>
</template>
<script setup>
import MenuGrandePagina from '../botoes/MenuGrande.vue'
import SelecaoPagina from './Selecao.vue'

import { useArmazenar } from '@/stores/store'

const armazenar = useArmazenar()
const config = armazenar.config
const jogoConfig = armazenar.jogoConfig


const iniciarJogo = () => {
    armazenar.iniciarJogo()
}

const atualizarTema = (index) => {
    jogoConfig.tema = index
}

const atualizarJogadores = (index) => {
    jogoConfig.jogadores = index 
}

const atualizarTamanho = (index) => {
    jogoConfig.tamanho = index
}

</script>