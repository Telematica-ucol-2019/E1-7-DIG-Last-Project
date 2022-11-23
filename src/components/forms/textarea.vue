<template>
  <div class="tw-flex tw-justify-center">
    <div class="tw-mb-4 tw-w-96">
      <label for="reviewMessage" class="form-label tw-inline-block tw-mb-2 tw-text-very-dark-magenta dark:tw-text-white"
        >Your message</label
      >
      <textarea
        class="form-control tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-bg-clip-padding tw-border tw-border-solid tw-rounded tw-transition tw-ease-in-out tw-m-0 focus:tw-outline-none tw-bg-white tw-border-dark-grayish-magenta tw-text-very-dark-magenta focus:tw-border-very-dark-magenta"
        id="reviewMessage"
        rows="3"
        placeholder="I think..."
      ></textarea>
    </div>
  </div>
  <div>
    <button
      type="button"
      class="tw-text-white dark:tw-text-very-dark-magenta tw-bg-very-dark-magenta dark:tw-bg-white focus:tw-ring-4 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 focus:tw-outline-none"
    >
      Send
    </button>
  </div>
</template>
<script>
export default {};
</script>
