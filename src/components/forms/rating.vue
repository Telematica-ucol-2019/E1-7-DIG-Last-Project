<template>
  <div class="tw-flex tw-justify-center tw-p-5">
    <v-star-rating :cancel="false" v-model="rating">
      <template #onicon>
        <v-icon class="tw-text-orange-400">mdi-star</v-icon>
      </template>
      <template #officon>
        <v-icon class="tw-text-orange-400">mdi-star-outline</v-icon>
      </template>
    </v-star-rating>
  </div>
</template>
<script>
export default {
  data: () => ({
    rating: 0,
  }),
};
</script>
