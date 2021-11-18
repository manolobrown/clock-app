<script setup>
import { ref } from "vue";

const quote = {
  message:
    "The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
  by: "Ada Lovelace",
};
</script>

<template>
  <div class="quote">
    <div class="message">
      {{ quote.message }}
      <a href="#" class="refresh"
        ><img src="/images/desktop/icon-refresh.svg" alt=""
      /></a>
    </div>
    <div class="by">
      <strong>{{ quote.by }}</strong>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;
.quote {
  .message {
    margin-block-end: rem(10);
    display: flex;
  }

  @include breakpoint(medium) {
    width: 50ch;

    .refresh {
      position: relative;
      right: rem(-10);
    }
  }
}
</style>
