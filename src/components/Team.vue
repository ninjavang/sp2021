<template>
  <section>
    <div class="team-wrapper">
      <Player
        v-for="(player, idx) in players"
        :key="idx"
        :player="player"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Player from './Player.vue';

export default defineComponent({
  props: {
    players: {
      type: Array,
      required: true
    }
  },

  components: {
    Player
  },

  setup(props, ctx) {
    
    return {

    };
  }
});
</script>

<style lang="scss" scoped>
.team-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>