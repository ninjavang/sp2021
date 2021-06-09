<template>
  <section class="__column intro" data-transition="fade-out">
    <span>
      1. Ta dig en öl, kaffe eller glas vatten beroende dagsform
    </span>
    <span>
      2. Sätt på dig hörlurarna och pumpa upp volymen
    </span>
    <span>
      3. Du kan nu luta dig tillbaka och koppla av.<br>
    </span>
    <span>
      Skulle du tycka det går för segt kan du alltid trycka "space" för att hoppa vidare.
    </span>
    <span class="fragment highlight-red">
      Press "Space" to continue..
    </span>
  </section>
</template>

<style lang="scss" scoped>
.rese-section {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.intro {
  span:nth-child(1) {
    margin: 2em 0;
  }
  span:nth-child(2) {
    margin: 0;
  }
  span:nth-child(3) {
    margin: 2em 0 0 0;
  }
  span:nth-child(4) {
    font-size: 16px;
    margin: 0 0 2em 0;
  }
}

</style>