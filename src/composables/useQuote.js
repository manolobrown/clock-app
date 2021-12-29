import { ref } from "vue";

export default function useQuote() {
  const quotes = ref([]);

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");

    quotes.value = await response.json();
  };

  return {
    quotes,
    fetchQuote,
  };
}
