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
    <span id="barcelona">Barcelona</span>
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

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

#barcelona {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: block;
  color: #cf1b1b;
  font-size: 124px;
  letter-spacing: 8px;
  cursor: pointer;
}

#barcelona::before {
  content: "Barcelona";
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    45deg,
    transparent 0,
    transparent 2px,
    white 2px,
    white 4px
  );
  -webkit-background-clip: text;
  top: 0px;
  left: 0;
  z-index: -1;
  transition: 1s;
}

#barcelona::after {
  content: "Barcelona";
  position: absolute;
  color: transparent;
  background-image: repeating-linear-gradient(
    135deg,
    transparent 0,
    transparent 2px,
    white 2px,
    white 4px
  );
  -webkit-background-clip: text;
  top: 0px;
  left: 0px;
  transition: 1s;
}

#barcelona:hover:before {
  top: 10px;
  left: 10px;
}

#barcelona:hover:after {
  top: -10px;
  left: -10px;
}
</style>