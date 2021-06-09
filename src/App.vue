<template>
  <div class="app">
    <audio autoplay="autoplay" id="music1">
      <source src="static/audio/ameno.mp3">
    </audio>
    <audio autoplay="autoplay" id="music2">
      <source src="static/audio/desenchantee.mp3">
    </audio>
    <audio autoplay="autoplay" id="music3">
      <source src="static/audio/champions.mp3">
    </audio>

    <div class="reveal">
      <div class="slides">
        <Intro 
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
  },

  data() {
    return {
      teams: teamData,
      showImage: false,
      showText: false,
      showYear: false,
      index: 0
    }
  },

  mounted() {
    Reveal.initialize({
      autoPlayMedia: true,
      controls: false
    });

    Reveal.on('slidechanged', async (ev: any) => this.onIndexChange(ev.indexh));
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
    playChampions() {
      var audio = document.getElementById("music3") as HTMLAudioElement;
      if (audio) {
        audio.play();
      }
    },
    stopChampions() {
      var audio = document.getElementById("music3") as HTMLAudioElement;
      if (audio) {
        audio.pause();
      }
    },
    playDeschantee() {
      var audio = document.getElementById("music2") as HTMLAudioElement;
      if (audio) {
        audio.play();
      }
    },
    async onIndexChange(idx: number) {
      this.index = idx;
      console.log(idx);
      switch (idx) {
        case 1:
          this.playAnimo();
          await sleep(2500);
          this.showImage = true;
          await sleep(2000);
          this.showText = true;
          await sleep(2500);
          this.showYear = true;
          
          this.tryNext(idx, 3500);

          break;
        case 2:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 3:
          this.tryNext(idx, 2500);
          break;
        case 4:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 5:
          this.stopAnimo();
          this.tryNext(idx, 51000)
          break;
        case 6:
          this.playChampions();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 7: case 8:
          this.tryNext(idx, 3000);
          break;
        case 9:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 10: case 11:
          this.tryNext(idx, 3000);
          break;
        case 12:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 13: case 15: case 17: case 19: case 21:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(3500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 14: case 16: case 18: case 20: case 22:
          this.tryNext(idx, 10000);
          break
        case 23:
          this.stopChampions();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        case 24:
          this.playDeschantee();
          this.tryNext(idx, 3000);
          break;
        case 25: case 26: case 27:
          this.tryNext(idx, 3000);
          break;
        case 28: case 29:
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          await sleep(1500);
          Reveal.nextFragment();
          this.tryNext(idx, 2000);
          break;
        default: break;
      }
    },
    async tryNext(idx: number, ms: number) {
      await sleep(ms);
      if (this.index == idx) {
        Reveal.next();
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
