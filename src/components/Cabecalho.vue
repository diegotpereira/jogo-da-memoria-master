<template>
    <header class="flex justify-between items-center">
        <h1 class="text-2x1 font-bold sm-text-4x1">Memória</h1>
        <div class="sm:hidden">
            <BtnPrimario class="px-8">Menu</BtnPrimario>
        </div>
        <div class="hidden sm:flex sm:text-xl sm-gap-4">
            <BtnPrimario class="px-6">Reiniciar</BtnPrimario>
            <BtnSecundario class="px-6">Novo Jogo</BtnSecundario>
        </div>
    </header>
</template>
<script>
import BtnPrimario from '@/components/botoes/Primario.vue'
import BtnSecundario from '@/components/botoes/Secundario.vue'

</script>