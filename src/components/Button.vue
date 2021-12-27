<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  txt: String,
  location: String,
  imgPath: String,
});
</script>

<template>
  <a :href="props.location" class="btn"
    >{{ props.txt }} <img :src="props.imgPath" alt=""
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
