<template>
  <div>
    <div
      class="lg:flex items-center justify-around p-4 rounded-lg bg-light-grayish-magenta dark:bg-dark-grayish-magenta"
    >
      <div class="flex justify-center">
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start one" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start two" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start three" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start four" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start five" />
      </div>
      <div class="flex justify-center">
        <p class="font-semibold text-very-dark-magenta dark:text-white">
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
