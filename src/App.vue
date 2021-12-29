<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref, computed } from "vue";

import useTime from "./composables/useTime";
import useLocation from "./composables/useLocation";
import useQuote from "./composables/useQuote";
import useSunData from "./composables/useSun";

const { timeValues, fetchAll } = useTime();
const { locations, fetchAllLocations } = useLocation();
const { quotes, fetchQuote } = useQuote();
const { sunData, fetchSunData } = useSunData();

fetchAll();
fetchAllLocations();
fetchQuote();

import Quote from "./components/Quote.vue";
import Time from "./components/Time.vue";
import Button from "./components/Button.vue";
import Location from "./components/Location.vue";

const isActive = ref(false);
const location = "location";
const txt = "More";
const iconDown = "/images/desktop/icon-arrow-down.svg";
const iconUp = "/images/desktop/icon-arrow-up.svg";
const iconDay = "/images/desktop/icon-sun.svg";
const iconNight = "/images/desktop/icon-moon.svg";
let timeStatusTxt = ref(false);

(async () => {
  await fetchSunData(locations.value.latitude, locations.value.longitude);

  const getDate = new Date();
  const getTime = getDate.toLocaleTimeString();
  const getTimeOfDay = sunData.value.results.sunrise;
  const body = document.querySelector("body");

  if (getTime > getTimeOfDay) {
    body.classList.add("day");
    timeStatusTxt = ref(true);
  } else {
    body.classList.add("night");
  }
})();
</script>

<template>
  <div class="container">
    <Quote :quotes="quotes" @get-quote="fetchQuote()" />
    <Time
      :txt="`${timeStatusTxt ? 'Morning' : 'Evening'}`"
      :imgPath="`${timeStatusTxt ? iconDay : iconNight}`"
      :timeValues="timeValues"
      :locations="locations"
    />
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
