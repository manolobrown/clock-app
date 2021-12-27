import { ref } from "vue";

export default function useLocation() {
  const location = ref([]);

  const fetchAll = async () => {
    const response = await fetch(
      "https://api.freegeoip.app/json/?apikey=XXXXXXXXXXXXXX"
    );
    location.value = await response.json();
  };

  return {
    location,
    fetchAll,
  };
}
