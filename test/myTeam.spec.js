import Vuex from 'vuex'
import * as myTeam from '@/store/myTeam'
import { createLocalVue } from '@vue/test-utils'
import _ from 'lodash'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/pokeData.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(myTeam))
  })
  describe('mutations', () => {
    describe('setPokemonName', () => {
      test('名前がセットできること', () => {
        store.commit('setPokemonName', {
          index: 'Pokemon1',
          name: 'フシギダネ',
        })
        expect(store.state.pokemonList.Pokemon1.name).toBe('フシギダネ')
      })
    })
  })
  describe('getters', () => {
    describe('getPokemonList', () => {
      test('リストが取得できること', () => {
        const obj = {
          Pokemon1: {
            name: 'リザードン',
          },
        }
        store.commit('setPokemonName', {
          index: 'Pokemon1',
          name: 'リザードン',
        })
        expect(store.getters['getPokemonList']).toEqual(
          expect.objectContaining(obj)
        )
      })
    })
  })
})
