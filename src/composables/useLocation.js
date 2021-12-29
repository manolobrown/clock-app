import { ref } from "vue";

export default function useLocation() {
  const locations = ref([]);

  const fetchAllLocations = async () => {
    const response = await fetch(
      "https://api.freegeoip.app/json/?apikey=2ac58b60-68b1-11ec-a8dc-c5381b826ec6"
    );
    locations.value = await response.json();
  };

  return {
    locations,
    fetchAllLocations,
  };
}
