<template>
  <div class="player-wrapper">
    <img class="img" :data-src="`static/img/${player.id}.png`">
    <h4> {{player.firstname}} '{{player.nickname}}' {{player.lastname}}</h4>
    <p class="desc"> {{player.desc}} </p>
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
}
.img {
  width: 400px;
  height: 300px;
}
.desc {
  font-size: 22px;
}
</style>