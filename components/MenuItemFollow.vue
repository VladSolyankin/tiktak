<script setup lang="ts">
import type { User } from "~/types/index";
defineProps({
  user: {
    type: Object as PropType<User>,
  },
});
</script>

<template>
  <div
    class="flex-row-center hover:bg-gray-100 rounded-md w-full px-2 gap-2 mt-2"
  >
    <img
      src="https://loremflickr.com/320/320"
      class="rounded-full"
      width="35"
    />
    <div class="text-xs lg:block hidden">
      <div class="flex items-center gap-2">
        <div class="font-bold">Пользователь</div>
        <div class="rounded-full bg-cyan-300 w-3 h-3 flex-row-center">
          <Icon name="teenyicons:tick-small-solid" color="white" />
        </div>
      </div>
      <div class="text-gray-500">Статус пользователя</div>
    </div>
  </div>
</template>

<style scoped></style>
