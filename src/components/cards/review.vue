<template>
  <div>
    <div class="tw-p-10 tw-space-y-5 tw-bg-very-dark-magenta dark:tw-bg-white tw-rounded-lg">
      <div class="tw-grid tw-grid-cols-8 tw-items-center tw-justify-center tw-space-x-5">
        <div class="tw-col-span-1">
          <img class="tw-rounded-full" :src="photo" :alt="`${name}'s picture`" />
        </div>
        <div class="tw-col-span-7">
          <p class="tw-font-semibold tw-text-white dark:tw-text-very-dark-magenta">
            {{ name }}
          </p>
          <p class="tw-font-light tw-text-soft-violet">
            {{ charge }}
          </p>
        </div>
      </div>
      <div class="tw-items-center tw-justify-center tw-space-x-5">
        <p class="tw-text-white dark:tw-text-very-dark-magenta">"{{ review }}"</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    charge: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
  },
};
</script>
<style></style>
