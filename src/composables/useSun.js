import { ref } from "vue";

export default function useSunData() {
  const sunData = ref([]);

  const fetchSunData = async (lat, lon) => {
    const response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lon}&date=today`
    );
    sunData.value = await response.json();
  };

  return {
    sunData,
    fetchSunData,
  };
}
