<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import useTime from "./composables/useTime";
const { timeValues, fetchAll } = useTime();

fetchAll();

import Quote from "./components/Quote.vue";
import Time from "./components/Time.vue";
import Button from "./components/Button.vue";
import Location from "./components/Location.vue";

import { ref } from "vue";

const isActive = ref(false);
const location = "#location";
const txt = "More";
const iconDown = "/images/desktop/icon-arrow-down.svg";
const iconUp = "/images/desktop/icon-arrow-up.svg";
</script>

<template>
  <div class="container">
    <Quote />
    <Time :timeValues="timeValues" />
    <Button
      :txt="`${!isActive ? txt : 'Less'}`"
      :location="location"
      :imgPath="`${!isActive ? iconDown : iconUp}`"
      @click="isActive = !isActive"
    />
  </div>

  <Location
    :timeValues="timeValues"
    :id="location"
    :class="{ active: isActive }"
  />
</template>
<style>
#app {
  height: 100%;
}
</style>
