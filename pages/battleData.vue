<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="myTeam"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              v-for="(myPoke, index) in myPokemonList"
              :key="index"
              label-cols-sm="3"
              :label="index"
              label-align-sm="right"
            >
              <b-form-input list="pokeNameList"></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="enemyTeam"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group
              v-for="(myPoke, index) in enemyPokemonList"
              :key="index"
              label-cols-sm="3"
              :label="index"
              label-align-sm="right"
            >
              <b-form-input list="pokeNameList"></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
      </b-col>
    </b-row>
    <datalist id="pokeNameList">
      <option v-for="pokeName in pokeNameList" :key="pokeName">{{
        pokeName
      }}</option>
    </datalist>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  components: {},
  computed: {
    myPokemonList() {
      return this.$store.state.myTeam.pokemonList
    },
    enemyPokemonList() {
      return this.$store.state.enemyTeam.pokemonList
    },
    pokeNameList() {
      return this.$store.getters['pokeData/getAllPokemonName']
    },
  },
  methods: {
    ...mapMutations('myTeam', {
      setMyPokemonName: 'setPokemonName',
    }),
    ...mapMutations('enemyTeam', {
      setMyPokemonName: 'setPokemonName',
    }),
  },
}
</script>
