import PrimeVue from 'primevue/config';
import Rating from 'primevue/rating';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component('v-star-rating', Rating);
});
