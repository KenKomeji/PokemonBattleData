import pokedata from '~/assets/pokedata.json'

export const state = () => ({
  data: pokedata,
})

export const getters = {
  getAllPokemonName(state) {
    return state.data.map((row) => row.Name_JP)
  },
}
