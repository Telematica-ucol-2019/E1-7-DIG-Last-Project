<template>
  <div class="tw-bg-very-dark-magenta dark:tw-bg-white lg:tw-m-10 max-lg:tw-my-6 tw-rounded-lg">
    <form class="tw-p-10">
      <div class="tw-relative tw-z-0 tw-mb-6 tw-w-full tw-group tw-border-dark-grayish-magenta tw-border-b-2">
        <input
          class="tw-block tw-py-2.5 tw-px-0 tw-w-full tw-text-sm tw-text-white tw-bg-transparent dark:tw-text-very-dark-magenta tw-appearance-none focus:tw-text-white dark:focus:tw-text-very-dark-magenta tw-border-white dark:tw-border-very-dark-magenta focus:tw-border-white dark:focus:tw-border-very-dark-magenta focus:tw-outline-none focus:tw-ring-0 tw-peer"
          name="floating_full_name"
          ref="floating_full_name"
          id="floating_full_name"
          type="text"
          placeholder=" "
          required
        />
        <label
          class="peer-focus:tw-font-medium tw-absolute tw-text-sm tw-text-white dark:tw-text-very-dark-magenta peer-focus:tw-text-white dark:peer-focus:tw-text-very-dark-magenta tw-duration-300 tw-transform tw--translate-y-6 tw-scale-75 tw-top-3 tw--z-10 origin-[0] peer-focus:tw-left-0 peer-placeholder-shown:tw-scale-100 peer-placeholder-shown:tw-translate-y-0 peer-focus:tw-scale-75 peer-focus:tw--translate-y-6"
          for="floating_full_name"
          >Full name</label
        >
      </div>
      <div class="lg:tw-grid lg:tw-grid-cols-2 tw-gap-6">
        <div class="tw-relative tw-z-0 tw-mb-6 tw-w-full tw-group tw-border-dark-grayish-magenta tw-border-b-2">
          <input
            class="tw-block tw-py-2.5 tw-px-0 tw-w-full tw-text-sm tw-text-white tw-bg-transparent dark:tw-text-very-dark-magenta tw-appearance-none focus:tw-text-white dark:focus:tw-text-very-dark-magenta tw-border-white dark:tw-border-very-dark-magenta focus:tw-border-white dark:focus:tw-border-very-dark-magenta focus:tw-outline-none focus:tw-ring-0 tw-peer"
            name="floating_phone"
            ref="floating_phone"
            id="floating_phone"
            type="number"
            placeholder=" "
            required
          />
          <label
            class="peer-focus:tw-font-medium tw-absolute tw-text-sm tw-text-white dark:tw-text-very-dark-magenta peer-focus:tw-text-white dark:peer-focus:tw-text-very-dark-magenta tw-duration-300 tw-transform tw--translate-y-6 tw-scale-75 tw-top-3 tw--z-10 origin-[0] peer-focus:tw-left-0 peer-placeholder-shown:tw-scale-100 peer-placeholder-shown:tw-translate-y-0 peer-focus:tw-scale-75 peer-focus:tw--translate-y-6"
            for="floating_phone"
            >Phone</label
          >
        </div>
        <div class="tw-relative tw-z-0 tw-mb-6 tw-w-full tw-group tw-border-dark-grayish-magenta tw-border-b-2">
          <input
            class="tw-block tw-py-2.5 tw-px-0 tw-w-full tw-text-sm tw-text-white tw-bg-transparent dark:tw-text-very-dark-magenta tw-appearance-none focus:tw-text-white dark:focus:tw-text-very-dark-magenta tw-border-white dark:tw-border-very-dark-magenta focus:tw-border-white dark:focus:tw-border-very-dark-magenta focus:tw-outline-none focus:tw-ring-0 tw-peer"
            name="floating_email"
            ref="floating_email"
            id="floating_email"
            type="email"
            placeholder=" "
            required
          />
          <label
            class="peer-focus:tw-font-medium tw-absolute tw-text-sm tw-text-white dark:tw-text-very-dark-magenta peer-focus:tw-text-white dark:peer-focus:tw-text-very-dark-magenta tw-duration-300 tw-transform tw--translate-y-6 tw-scale-75 tw-top-3 tw--z-10 origin-[0] peer-focus:tw-left-0 peer-placeholder-shown:tw-scale-100 peer-placeholder-shown:tw-translate-y-0 peer-focus:tw-scale-75 peer-focus:tw--translate-y-6"
            for="floating_email"
            >Email</label
          >
        </div>
      </div>
      <div class="tw-relative tw-z-0 tw-mb-6 tw-w-full tw-group tw-border-dark-grayish-magenta tw-border-b-2">
        <textarea
          class="tw-block tw-py-2.5 tw-px-0 tw-w-full tw-max-h-40 tw-text-sm tw-text-white tw-bg-transparent dark:tw-text-very-dark-magenta tw-appearance-none focus:tw-text-white dark:focus:tw-text-very-dark-magenta tw-border-white dark:tw-border-very-dark-magenta focus:tw-border-white dark:focus:tw-border-very-dark-magenta focus:tw-outline-none focus:tw-ring-0 tw-peer"
          name="floating_message"
          ref="floating_message"
          id="floating_message"
          type="text"
          placeholder=" "
          required
        />
        <label
          class="peer-focus:tw-font-medium tw-absolute tw-text-sm tw-text-white dark:tw-text-very-dark-magenta peer-focus:tw-text-white dark:peer-focus:tw-text-very-dark-magenta tw-duration-300 tw-transform tw--translate-y-6 tw-scale-75 tw-top-3 tw--z-10 origin-[0] peer-focus:tw-left-0 peer-placeholder-shown:tw-scale-100 peer-placeholder-shown:tw-translate-y-0 peer-focus:tw-scale-75 peer-focus:tw--translate-y-6"
          for="floating_message"
          >Message</label
        >
      </div>
      <div class="tw-flex tw-flex-auto tw-relative tw-z-0 tw-w-full tw-group tw-justify-center">
        <button
          type="button"
          class="tw-text-very-dark-magenta dark:tw-text-white tw-bg-white dark:tw-bg-very-dark-magenta focus:tw-ring-4 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 focus:tw-outline-none"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts"></script>
<style>
.tw-text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.tw-text-very-dark-magenta {
  --tw-text-opacity: 1;
  color: rgba(55, 12, 83, var(--tw-text-opacity));
}
</style>
