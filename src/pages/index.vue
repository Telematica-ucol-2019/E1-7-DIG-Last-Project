<template>
  <div class="max-lg:tw-m-14 lg:tw-mx-32 lg:tw-m-14 tw-space-y-10">
    <div class="lg:tw-grid lg:tw-grid-cols-8 md:tw-grid-cols-1 tw-space-y-5">
      <div class="min-lg:tw-flex lg:tw-col-span-3 max-lg:tw-text-center tw-space-y-5">
        <h1 class="tw-text-5xl tw-font-semibold tw-text-very-dark-magenta dark:tw-text-white">
          10,000+ of our users love our products.
        </h1>
        <p class="tw-text-lg tw-font-light tw-text-very-dark-magenta dark:tw-text-white">
          We only provide great products combined with excellent customer service. See what our satisfied customers are
          saying about our services.
        </p>
      </div>
      <div class="lg:tw-col-start-6 lg:tw-col-span-3">
        <div class="tw-space-y-5">
          <CardsRating class="lg:tw-pr-24" text="Rated 5 Starts in Reviews" />
          <CardsRating class="lg:tw-pl-12 lg:tw-pr-12" text="Rated 5 Starts in Repart Guru" />
          <CardsRating class="lg:tw-pl-24" text="Rated 5 Starts in BestTech" />
        </div>
      </div>
    </div>
    <div class="lg:tw-flex tw-justify-between lg:tw-space-x-5 max-lg:tw-space-y-5">
      <CardsReview
        photo="/image-colton.jpg"
        name="Colton Smith"
        charge="Verified Buyer"
        review="We needed the same printed design as the one we had ordered a week prior. Not only didthey find the original order, but we also received it in time.  Excellent!"
      />
      <CardsReview
        class="lg:tw-pt-5"
        photo="/image-irene.jpg"
        name="Irne Roberts"
        charge="Verified Buyer"
        review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
      />
      <CardsReview
        class="lg:tw-pt-10"
        photo="/image-anne.jpg"
        name="Anne Wallace"
        charge="Verified Buyer"
        review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
      />
    </div>
    <div class="tw-text-center p-5">
      <h2 class="tw-text-3xl tw-font-semibold tw-text-very-dark-magenta dark:tw-text-white">
        We want to hear about your experience!
      </h2>
      <FormsRating />
      <FormsTextarea />
    </div>
    <div>
      <h2 class="tw-text-center tw-text-3xl tw-font-semibold tw-text-very-dark-magenta dark:tw-text-white">
        Contact us
      </h2>
      <p class="tw-text-center tw-text-lg tw-font-light tw-text-very-dark-magenta dark:tw-text-white">
        Let's create something together!
      </p>
      <div class="lg:tw-grid tw-grid-cols-12 tw-bg-light-grayish-magenta dark:tw-bg-dark-grayish-magenta">
        <div class="tw-col-span-6 tw-flex tw-self-center tw-justify-center">
          <img class="tw-h-60" src="~/assets/unknown.png" alt="Support image" />
        </div>
        <div class="tw-col-start-7 tw-col-span-6">
          <FormsContact />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style></style>
