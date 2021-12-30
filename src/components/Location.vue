<script setup>
import { ref } from "vue";
const props = defineProps({
  timeValues: Object,
});
</script>

<template>
  <div class="location">
    <div class="location__wrapper">
      <div class="timezone">
        <h6>Current Timezone</h6>
        <h2 v-if="props.timeValues.timezone">
          {{ props.timeValues.timezone.replace("_", " ") }}
        </h2>
      </div>
      <div class="day-of-year">
        <h6>Day of the year</h6>
        <h2>{{ props.timeValues.day_of_year }}</h2>
      </div>
      <div class="day-of-week">
        <h6>Day of the week</h6>
        <h2>{{ props.timeValues.day_of_week }}</h2>
      </div>
      <div class="week-number">
        <h6>Week number</h6>
        <h2>{{ props.timeValues.week_number }}</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/util" as *;

.location {
  color: var(--blackv2);
  background: rgba(255, 255, 255, 0.75);
  height: 0;
  visibility: hidden;
  overflow: hidden;

  transition: 200ms height ease-in-out;

  .night & {
    background: rgba(0, 0, 0, 0.75);
    color: var(--white) !important;
  }

  &.active {
    height: 100%;
    visibility: visible;
    overflow: visible;
    max-height: 380px;
  }

  &__wrapper {
    max-width: rem(1110);
    margin: 0 auto;
    padding: rem(24);
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
      grid-template-columns: repeat(2, max-content);
      gap: rem(60) rem(80);
      position: relative;
      padding: rem(64);
    }

    &__wrapper > div {
      display: block;
    }
  }

  @include breakpoint(large) {
    reposition: relative;
    z-index: 1;
    &__wrapper {
      gap: rem(60) rem(200);
      &:after {
        content: "";
        height: 100%;
        max-height: rem(250);
        top: rem(64);
        width: 1px;
        background-color: var(--blackv2);
        position: absolute;
        left: 60%;
      }
    }

    .night & &__wrapper:after {
      background-color: var(--white);
    }
  }
}
</style>
