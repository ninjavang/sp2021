<template>
  <section class="__column">
    <span class="fragment highlight-red">
      Resan
    </span>
    <span class="fragment fade-in">
      Samling 12:45 Arlanda Airport
    </span>
    <span class="fragment fade-in">
      Flyget avgår 14:25
    </span>
    <span class="fragment fade-in">
      Till..
    </span>
  </section>

  <section data-background-image="static/img/barcelona.jpg">
    <span>Barcelona</span>
  </section>

  <section class="__column" data-background-image="static/img/Transport-Barcelona.jpg">
    <span class="fragment highlight-red">
      Vi landar
    </span>
    <span class="fragment fade-in">
      Lätt överförfriskande kliver ut från El Prat airport
    </span>
    <span class="fragment fade-in">
      Där står det en privattransfer väntandes
    </span>
    <span class="fragment fade-in">
      Som tar oss till..
    </span>
  </section>

  <section>
    <iframe 
      class="r-stretch"
      data-src="https://www.youtube.com/embed/bwjAotN1pXk?autoplay=1"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    ></iframe>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro'
});
</script>
