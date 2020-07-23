import Vuex from 'vuex'
import * as index from '@/store/pokeData'
import { createLocalVue } from '@vue/test-utils'
import _ from 'lodash'

import pokedata from '~/assets/pokedata.json'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/pokeData.js', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store(_.cloneDeep(index))

    store.replaceState({
      data: pokedata,
    })
  })

  describe('getAllPokemonName', () => {
    test('名前の一覧が取得できること', () => {
      // expect(store.state.data[0]).toContainEqual('フシギダネ')
      expect(store.getters['getAllPokemonName']).toContainEqual('フシギダネ')
    })
  })
})
