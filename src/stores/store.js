import { defineStore } from 'pinia'
import config from '@/assets/json/config.json'

export const useArmazenar = defineStore({
    id: "armazenar",

    state: () => ({
        jogoConfig: {
            theme: 0,
            jogadores: 0,
            tamanho: 0
        },
        config: config,
        jogoIniciado: false,
        reiniciando: false,
        jogoInstancia: {},
        temporizador: null,
        menuMovel: false
    }),

    getters: {
        ehMultiJogador: (state) => state.jogoInstancia?.pontuacoes?.length > 1,
        getGradeTamanho: (state) => 
           Number(state.config?.tamanho?.opcoes[state.jogoConfig.tamanho].split("x")[0]),
        ehFimDeJogo: (state) => state.jogoInstancia.resolvido.length === state.jogoInstancia.grade.length
    },
    actions: {
        iniciarJogo() {
            const pontuacoes = () => {
                const pontuacoes = []
                for(let i = 0; i <= this.jogoConfig.jogadores; i++) {
                    pontuacoes.push(0)
                }
                return pontuacoes
            }
            const grade = () => {
                let grade = []
                let numeros = []
                if (this.jogoConfig.tamanho === 0) {
                    for(let i = 1; i <= Math.pow(this.getGradeTamanho, 2) / 2; i++) {
                        numeros.push(i, i)
                    }
                } else {
                    for(let i = 1; i <= Math.pow(this.getGradeTamanho, 2) / 4; i++) {
                        numeros.push(i, i, i, i)
                    }
                }
                numeros.sort(() => 0.5 - Math.random())
                grade = numeros 
                return grade
            }
            this.definirInstanciaJogo({ pontuacoes: pontuacoes(), grade: grade() })
            this.jogoIniciado = true
            this.retomarJogo()

        },
        reiniciarJogo() {
            this.pausarJogo()
            this.iniciarJogo()
            this.reiniciando = true 
            setTimeout(() => {
                this.reiniciando = false
            }, 500)
        },

        novoJogo() {
            clearTimeout(this.temporizador)
            this.$reset()
        },
        pausarJogo() {
            clearTimeout(this.temporizador)
        },
        retomarJogo() {
            this.temporizador = setInterval(() => {
                this.jogoInstancia.tempo += 1
            }, 1000)
        },
        definirInstanciaJogo({
            theme = this.theme,
            pontuacoes,
            tamanho = this.tamanho,
            grade = this.grade,
            rodada = 0,
            resolvido = [],
            tempo = 0,
            selecionarPar = [],
        }) {
            this.jogoInstancia = {
                theme: theme,
                pontuacoes: pontuacoes,
                tamanho: tamanho,
                grade: grade,
                rodada: rodada,
                resolvido: resolvido,
                tempo: tempo,
                selecionarPar: selecionarPar
            }
        },
        marcarComoResolvido(par) {
            this.jogoInstancia.resolvido.push(...par)
            if (this.ehMultiJogador) {
                this.jogoInstancia.pontuacoes[this.jogoInstancia.rodada] += 1
            } else {
                this.jogoInstancia.pontuacoes[0] += 1
                this.proximaRodada()
            }
        },
        proximaRodada() {
            if (this.ehMultiJogador) {
                const ehUltimoJogador = this.jogoInstancia.rodada === this.jogoConfig.jogadores
                this.jogoInstancia.rodada = ehUltimoJogador ? 0 : this.jogoInstancia.rodada + 1

            } else {
                this.jogoInstancia.rodada += 1
            }
        }
    }
})