<template>
  <div class="tw-px-2 sm:tw-px-4 tw-py-2.5">
    <div class="tw-flex tw-flex-wrap tw-justify-between tw-mx-auto">
      <div class="tw-flex lg:tw-order-3">
        <button
          class="tw-inline-flex tw-items-center tw-p-2 tw-rounded-lg"
          type="button"
          aria-label="Toggle theme mode button"
          @click="setColor($colorMode.preference == 'dark' ? 'light' : 'dark')"
        >
          <svg
            v-if="$colorMode.value == 'dark'"
            class="tw-h-6 tw-w-6 tw-text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <svg
            v-else
            class="tw-h-6 tw-w-6 tw-text-very-dark-magenta"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setColor } from '../../typescript/scripts/setColor';
</script>
<script lang="ts">
export default {};
</script>
<style></style>
