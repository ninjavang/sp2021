<template>
  <div class="app">
    <audio autoplay="autoplay" id="music1">
      <source src="static/audio/ameno.mp3">
    </audio>
    <audio autoplay="autoplay" id="music2">
      <source src="static/audio/desenchantee.mp3">
    </audio>
    <div class="reveal">
      <div class="slides">
        <Intro />
        <Sommarpokalen2021
          :showImage="showImage"
          :showText="showText"
          :showYear="showYear"
        />
        <Resan/>
        <Tavlingen/>
        <Team 
          v-for="(team, idx) in teams"
          :key="idx"
          :team="team"
        />
        <Avslutningen />
        <section>
          <h2>Tack och adjö!</h2>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import Tavlingen from '@/components/Tavlingen.vue';
import Team from '@/components/Team.vue';
import Intro from '@/components/Intro.vue';
import Sommarpokalen2021 from '@/components/Sommarpokalen2021.vue';
import Resan from '@/components/Resan.vue';
import Avslutningen from '@/components/Avslutningen.vue';
import Reveal from 'reveal.js';
import teamData from '@/teams.data';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export default defineComponent({
  name: 'App',

  components: {
    Tavlingen,
    Intro,
    Resan,
    Team,
    Avslutningen,
    Sommarpokalen2021
  },

  data() {
    return {
      teams: teamData,
      showImage: false,
      showText: false,
      showYear: false
    }
  },

  mounted() {
    Reveal.initialize({
      autoPlayMedia: true,
      controls: false,
     // disableLayout: true
    });


    Reveal.on('slidechanged', async (ev: any) => {
      console.log('index: ' + ev.indexh)
      switch (ev.indexh) {
        case 1:
          this.playAnimo();
          await sleep(1000);
          this.showImage = true;
          await sleep(2000);
          this.showText = true;
          await sleep(1500);
          this.showYear = true;
          await sleep(4000);
          Reveal.next();

          break;
        case 5:
          this.stopAnimo();
          break;
        case 21:
          this.playDeschantee();
          break;
        default: break;
      }
    });
  },

  methods: {
    playAnimo() {
      var audio = document.getElementById("music1") as HTMLAudioElement;
      if (audio) {
        audio.play();
      }
    },
    stopAnimo() {
      var audio = document.getElementById("music1") as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    },
    playDeschantee() {
      var audio = document.getElementById("music2") as HTMLAudioElement;
      if (audio) {
        audio.play();
      }
    }
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
.__column {
  display: flex !important;
  flex-direction: column;
  /* justify-content: center;
  align-items: center;
  height: 100%; */
}

</style>
