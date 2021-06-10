<template>
  <section class="__column">
    <span class="fragment highlight-red" data-fragment-index="1">
      Singelturneringen
    </span>
    <span class="fragment fade-in" data-fragment-index="2">
      Tee time Fredag 09:30-09:50 Lumine Hills
    </span>
    <span class="fragment fade-in" data-fragment-index="3" style="margin:0.5em 0;">
      18 hål, par 72, 5982 meter från gul tee.
    </span>
    <span class="fragment fade-in" data-fragment-index="4">
      Lumine Hills erbjuder de mest häpnadsväckande vyerna över Medelhavet, 
      med fairways som går genom ett tätt tall- och olivträdslandskap. 
      Denna par 71-bana på 6,3 km smälter in i landskapet på ett organiskt sätt, 
      och erbjuder en varierad och utmanande golfrunda
    </span>
  </section>

  <section class="__column" data-transition="zoom">
    <img class="r-stretch" src="static/img/lumine-Hills-2.jpg">
  </section>

  <section class="__column" data-transition="zoom">
    <img class="r-stretch" src="static/img/LUMINE_Hills_Hole-13d.jpg">
  </section>

  <section class="__column">
    <span class="fragment fade-in highlight-red grow" data-fragment-index="1">
      Sommarpokalen
    </span >
    <span class="fragment fade-in" data-fragment-index="2">
      <div style="display:flex;flex-direction:column;">
        <span>Tee time Fredag 10:20-10:40 Lumine Lakes</span>
        <span>Tee time Lördag 10:10-10:30 Lumine Lakes</span>
      </div>
    </span>

    <span class="fragment fade-in" data-fragment-index="3" style="margin:0.5em 0;">
      18 hål, par 71, 5934 meter från gul tee.
    </span>

    <span class="fragment fade-in" data-fragment-index="4">
      Lumine Lakes banan är designad av Greg Norman och är en 18-håls mästerskapsbana,
      vilket är en spännande utmaning där du verkligen kommer att utmanas.
      Hålen placeras kärleksfullt i ett fågelreservat med fantastisk natur och flera stora sjöar.
    </span>      
  </section>

  <section class="__column" data-transition="zoom">
    <img class="r-stretch" src="static/img/lakes1.jpg">  </section>

  <section class="__column" data-transition="zoom">
    <img class="r-stretch" src="static/img/lakes5.jpg">  </section>

  <section class="__column">
    <span class="fragment highlight-red" style="margin: 0, 0, 0.5em 0;" data-fragment-index="1">
      Lagen
    </span>
    <span class="fragment fade-in" data-fragment-index="2">
      Inför årets tävling har vi valt att återgå till förskapade lag.
    </span>
    <span class="fragment fade-in-then-semi-out" style="margin: 0.5em 0;" data-fragment-index="3">
      Dels för att att handikappsgapet är lite för stort i år.
    </span>
    <span class="fragment fade-in" data-fragment-index="4">
      Dels för att vi är trötta på att se Carl och Joel vinna.
    </span>
    <span class="fragment fade-in" style="margin: 0.5em 0;" data-fragment-index="5">
      Så, låt oss presentera lagen för Sommarpokalen ano 2021.
    </span>
    <span class="fragment fade-in" data-fragment-index="6">
      Trummvirvel..
    </span>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Intro'
});
</script>