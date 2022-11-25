<template>
  <div>
    <v-rating
      class="tw-text-very-dark-magenta dark:tw-text-white"
      v-model="rating"
      active-color="orange"
      hover
    ></v-rating>
  </div>
</template>
<script>
export default {
  data: () => ({
    rating: 0,
  }),
};
</script>
