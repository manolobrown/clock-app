<script setup>
import { ref } from "vue";

const props = defineProps({
  quotes: Object,
});
</script>

<template>
  <div class="quote">
    <div class="message">
      <span>
        {{ quotes.content }}
      </span>

      <button @click="$emit('get-quote')" class="refresh">
        <img src="/images/desktop/icon-refresh.svg" alt="" />
      </button>
    </div>
    <div class="by">
      <strong>{{ quotes.author }}</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
.quote {
  .message {
    margin-block-end: rem(10);
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  span {
    padding-right: rem(5);
  }

  .refresh {
    position: relative;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0.5;

    transition: 0.2s opacity ease-in-out;

    top: 6px;

    &:hover {
      opacity: 1;
    }
  }

  @include breakpoint(medium) {
    width: 50ch;
  }
}
</style>
