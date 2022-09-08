<template>
    <div class="fliup-box">
        <h1>Cartão</h1>
        <div class="flip-box-inner transition-all duration-500">
            <div class="flip-box-front bg-dark-active hover:bg-dark-hover" />
            <div class="flip-box-back select-none ">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.flip-box {
    background-color: transparent;
    perspective: 1000px;
}

.flip-box-inner {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>