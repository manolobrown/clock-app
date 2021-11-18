<script setup>
import { ref } from "vue";
</script>

<template>
  <a href="#" class="btn"
    >More <img src="/images/desktop/icon-arrow-down.svg" alt=""
  /></a>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;

@include breakpoint(large) {
  .btn {
    margin-top: auto;
    margin-left: auto;
    margin-block-end: 0;
  }
}
</style>
