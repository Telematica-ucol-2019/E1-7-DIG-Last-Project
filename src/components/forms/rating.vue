<template>
  <div>
    <!-- <v-rating v-model="rating" hover>
      <template v-slot:item="props">
        <v-icon :color="props.isFilled ? 'orange' : 'grey'" size="large" @click="props.onClick">
          {{ props.isFilled ? 'mdi-star' : 'mdi-star' }}
        </v-icon>
      </template>
    </v-rating> -->
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
