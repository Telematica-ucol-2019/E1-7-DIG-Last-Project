<template>
  <div class="max-lg:m-14 lg:mx-32 lg:m-14 space-y-10">
    <div class="lg:grid lg:grid-cols-8 md:grid-cols-1 space-y-5">
      <div class="min-lg:flex lg:col-span-3 max-lg:text-center space-y-5">
        <h1 class="text-5xl font-semibold text-very-dark-magenta dark:text-white">
          10,000+ of our users love our products.
        </h1>
        <p class="text-lg font-light text-very-dark-magenta dark:text-white">
          We only provide great products combined with excellent customer service. See what our satisfied customers are
          saying about our services.
        </p>
      </div>
      <div class="lg:col-start-6 lg:col-span-3">
        <div class="space-y-5">
          <CardsRating class="lg:pr-24" text="Rated 5 Starts in Reviews" />
          <CardsRating class="lg:pl-12 lg:pr-12" text="Rated 5 Starts in Repart Guru" />
          <CardsRating class="lg:pl-24" text="Rated 5 Starts in BestTech" />
        </div>
      </div>
    </div>
    <div class="lg:flex justify-between lg:space-x-5 max-lg:space-y-5">
      <CardsReview
        photo="/image-colton.jpg"
        name="Colton Smith"
        charge="Verified Buyer"
        review="We needed the same printed design as the one we had ordered a week prior. Not only didthey find the original order, but we also received it in time.  Excellent!"
      />
      <CardsReview
        class="lg:pt-5"
        photo="/image-irene.jpg"
        name="Irne Roberts"
        charge="Verified Buyer"
        review="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
      />
      <CardsReview
        class="lg:pt-10"
        photo="/image-anne.jpg"
        name="Anne Wallace"
        charge="Verified Buyer"
        review="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
      />
    </div>
  </div>
</template>
<script lang="ts">
export default {};
</script>
<style></style>
