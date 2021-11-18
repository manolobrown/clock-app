<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Quote from "./components/Quote.vue";
import Time from "./components/Time.vue";
import Button from "./components/Button.vue";
import Location from "./components/Location.vue";
</script>

<template>
  <div class="container">
    <Quote />
    <Time />
    <Button />
  </div>

  <Location />
</template>
<style>
#app {
  height: 100%;
}
</style>
