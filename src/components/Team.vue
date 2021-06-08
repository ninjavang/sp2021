<template>
  <section class="team-presentation">
    <span class="fragment highlight-red">
      {{ team.name }}
    </span>
    <span class="fragment fade-in team-desc">
      {{ team.desc }}
    </span>
    <span class="fragment fade-in team-desc">
      Låt oss presentera...
    </span>
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
.team-presentation {
  display: flex !important;
  flex-direction: column;
  span:nth-child(2) {
    margin: 1em 0;
  }
  span:nth-child(3) {
    font-size: 20px;
  }
}
</style>