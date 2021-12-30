import { ref } from "vue";

export default function useResource(resource) {
  const items = ref([]);

  const fetchAll = async () => {
    const response = await fetch(resource);
    items.value = await response.json();
  };

  return {
    items,
    fetchAll,
  };
}
