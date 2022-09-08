<template>
    <div class="flex">
        <MenuSelecaoPagina class="py-2" @click="$emit('update:state', index)" v-for="(opcao, index) in opcoes" :key="index" :selecionado="state === index">
            {{ opcao }}
        </MenuSelecaoPagina>
    </div>
</template>
<script setup>
import MenuSelecaoPagina from '../botoes/MenuSelecao.vue'

const props = defineProps({
    opcoes: {
        type: Object,
        required: true
    },
    state: {
        type: Number,
        required: true
    }
})
</script>