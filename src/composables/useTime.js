import { ref } from "vue";

export default function useTime() {
  const timeValues = ref([]);

  const fetchAll = async () => {
    const response = await fetch("https://worldtimeapi.org/api/ip");
    timeValues.value = await response.json();
  };

  return {
    timeValues,
    fetchAll,
  };
}
