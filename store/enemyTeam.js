export const state = () => ({
  pokemonList: {
    Pokemon1: {
      name: '',
    },
    Pokemon2: {
      name: '',
    },
    Pokemon3: {
      name: '',
    },
    Pokemon4: {
      name: '',
    },
    Pokemon5: {
      name: '',
    },
    Pokemon6: {
      name: '',
    },
  },
})

export const getters = {
  getPokemonList(state) {
    return state.pokemonList
  },
}

export const mutations = {
  setPokemonName(state, { index: idx, name: str }) {
    state.pokemonList[idx].name = str
  },
}
