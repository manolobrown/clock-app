<template>
  <div class="container">
    <Quote :quotes="quotes" @get-quote="fetchQuote()" />
    <Time
      :txt="`${timeStatus ? timeStatusTxt : 'Evening'}`"
      :imgPath="`${timeStatus ? iconDay : iconNight}`"
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

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { ref } from "vue";

import useResource from "../composables/useResource";

const { items: timeValues, fetchAll: fetchTime } = useResource(
  "https://worldtimeapi.org/api/ip"
);

const { items: locations, fetchAll: fetchAllLocations } = useResource(
  "https://api.freegeoip.app/json/?apikey=2ac58b60-68b1-11ec-a8dc-c5381b826ec6"
);

const { items: quotes, fetchAll: fetchQuote } = useResource(
  "https://api.quotable.io/random"
);

const { items: sunData, fetchAll: fetchSunData } = useResource(
  `https://api.sunrise-sunset.org/json?lat=${locations.value.latitude}&lng=${locations.value.longitude}&date=today`
);

fetchAllLocations();
fetchQuote();

import Quote from "../components/Quote.vue";
import Time from "../components/Time.vue";
import Button from "../components/Button.vue";
import Location from "../components/Location.vue";

const isActive = ref(false);
const location = "location";
const txt = "More";
const iconDown = "/images/desktop/icon-arrow-down.svg";
const iconUp = "/images/desktop/icon-arrow-up.svg";
const iconDay = "/images/desktop/icon-sun.svg";
const iconNight = "/images/desktop/icon-moon.svg";
let timeStatus = ref(false);
let timeStatusTxt = ref("Morning");

(async () => {
  await fetchSunData();
  await fetchTime();

  const getDate = new Date();
  const getHours = getDate.getHours();
  const getTime = getDate.toLocaleTimeString();
  const getSunset = sunData.value.results.sunset;
  const body = document.querySelector("body");

  if (getHours > 12 && getTime < getSunset) {
    body.classList.add("day");
    timeStatus.value = true;
    timeStatusTxt.value = "Afternoon";
  } else if (getTime < getSunset) {
    timeStatus.value = true;
    body.classList.add("day");
    timeStatusTxt.value = "Morning";
  } else {
    body.classList.add("night");
  }

  const getCurrentTime = new Date(timeValues.value.datetime);
  const newTime = getCurrentTime
    .toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
    })
    .replace("AM", "")
    .replace("PM", "");

  document.querySelector(".utc h1").textContent = newTime;
})();
</script>
