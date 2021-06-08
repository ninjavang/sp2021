<template>
  <div class="app">
    <span></span>
    <div class="reveal">
      <div class="slides">
        <Intro/>
        <section>
          <h2 class="r-fit-text">Var ska vi va?</h2>
        </section>
        <CourseVideo/>
        <section>
          <h2>Och lagen?</h2>
        </section>
        <Team 
          v-for="(team, idx) in teams"
          :key="idx"
          :players="team"
        />
        <section>
          <h2>Tack och adjö!</h2>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import CourseVideo from '@/components/CourseVideo.vue';
import Team from '@/components/Team.vue';
import Intro from '@/components/Intro.vue';
import Reveal from 'reveal.js';
import teamData from '@/teams.data';

export default defineComponent({
  name: 'App',

  components: {
    CourseVideo,
    Intro,
    Team
  },

  setup(props, ctx) {
    onMounted(() => {
      Reveal.initialize({
        autoPlayMedia: true,
        controlsLayout: 'edges'
      });
    });
    const teams = reactive(teamData);

    return { teams };
  }
});
</script>

<style style="scss">
@import url('../node_modules/reveal.js/dist/reveal.css');
@import url('../node_modules/reveal.js/dist/theme/black.css');
@font-face {
    font-family: "Backslash";
    src: "../public/static/fonts/Backslash-RpJol.otf" format("otf");
}

#app {
  height: 100%;
}
.app {
  height: 100%;
}
.iframe {
  height: 100%;
  width: 100%;
}
</style>
