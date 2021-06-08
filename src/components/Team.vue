<template>
  <section>
    <span class="team-desc">{{team.desc}}</span>
  </section>
  <section>
    <div class="team-wrapper">
      <Player
        v-for="(player, idx) in team.players"
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
    team: {
      type: Object,
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
.team-desc {
  white-space: pre-line;
}
.team-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>