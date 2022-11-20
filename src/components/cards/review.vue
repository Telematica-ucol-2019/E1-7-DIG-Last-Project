<template>
  <div>
    <div class="p-10 space-y-5 bg-very-dark-magenta dark:bg-white rounded-lg">
      <div class="grid grid-cols-8 items-center justify-center space-x-5">
        <div class="col-span-1">
          <img class="rounded-full" :src="photo" :alt="`${name}'s picture`" />
        </div>
        <div class="col-span-7">
          <p class="font-semibold text-white dark:text-very-dark-magenta">
            {{ name }}
          </p>
          <p class="font-light text-soft-violet">
            {{ charge }}
          </p>
        </div>
      </div>
      <div class="items-center justify-center space-x-5">
        <p class="text-white dark:text-very-dark-magenta">"{{ review }}"</p>
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
