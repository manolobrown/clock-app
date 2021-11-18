<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="location">
    <div class="location__wrapper">
      <div class="timezone">
        <h6>Current Timezone</h6>
        <h2>Europe/London</h2>
      </div>
      <div class="day-of-year">
        <h6>Day of the year</h6>
        <h2>295</h2>
      </div>
      <div class="day-of-week">
        <h6>Day of the week</h6>
        <h2>5</h2>
      </div>
      <div class="week-number">
        <h6>Week number</h6>
        <h2>42</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;

.location {
  padding: rem(24);
  color: var(--blackv2);
  position: relative;
  background: rgba(255, 255, 255, 0.75);

  &__wrapper {
    max-width: rem(1100);
    margin: 0 auto;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  h6 {
    text-transform: uppercase;
    font-weight: 300;
  }
  h2,
  h6 {
    margin-block-end: 0;
  }

  @include breakpoint(medium) {
    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: rem(60) rem(80);
    }

    padding: rem(64);

    &__wrapper > div {
      display: block;
    }
  }
}
</style>
