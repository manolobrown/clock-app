<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="time">
    <div class="time-of-day">
      <h4><img src="/images/desktop/icon-sun.svg" alt="" /> Good Morning</h4>
    </div>
    <div class="utc">
      <h1>11:37</h1>
      <div class="standard">BST</div>
    </div>
    <div class="zone"><h3>In London, UK</h3></div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;

.time {
  margin-top: auto;
}
h4 {
  display: flex;

  img {
    margin-right: rem(15);
  }
}
.utc {
  display: flex;
  align-items: baseline;
  margin-block-end: rem(15);
  h1 {
    margin-block-end: 0;
  }
}
@include breakpoint(medium) {
  .standard {
    font-size: rem(32);
    line-height: rem(28);
  }
}
@include breakpoint(large) {
  .standard {
    font-size: rem(40);
  }
  .utc {
    margin-block-end: rem(40);
  }

  h3 {
    margin-block-end: 0;
  }
}
</style>
