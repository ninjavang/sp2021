<template>
  <div class="player-wrapper">
    <img class="img" :data-src="`static/img/${player.id}.png`">
    <div class="player-text">
      <h4 class="player-text-title"> {{player.firstname}} '{{player.nickname}}' {{player.lastname}}</h4>
      <p class="player-text-desc"> {{player.desc}} </p>
    </div>
    
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  setup(props, ctx) {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.player-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  width: 40%;
}
.img {
  width: 100%;
}
.player-text {
  max-width: 400px;
  text-align: justify;
}
.player-text-title {
  font-size: 24px;

}
.player-text-desc {
  font-size: 16px;
}
</style>