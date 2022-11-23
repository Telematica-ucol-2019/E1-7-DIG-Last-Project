<template>
  <div>
    <div
      class="lg:tw-flex tw-items-center tw-justify-around tw-p-4 tw-rounded-lg tw-bg-light-grayish-magenta dark:tw-bg-dark-grayish-magenta"
    >
      <div class="tw-flex tw-justify-center">
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start one" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start two" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start three" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start four" />
        <img src="../../assets/svg/icon-star.svg" alt="Shining Start five" />
      </div>
      <div class="tw-flex tw-justify-center">
        <p class="tw-font-semibold tw-text-very-dark-magenta dark:tw-text-white">
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
