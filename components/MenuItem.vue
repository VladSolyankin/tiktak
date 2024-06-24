<script setup lang="ts">
const props = defineProps({
  title: String,
  color: String,
  size: String,
});

let icon = ref("");

switch (props.title) {
  case "Для вас":
    icon.value = "mdi:home";
    break;

  case "Подписки":
    icon.value = "ci:group";
    break;

  case "В эфире":
    icon.value = "ri:live-line";
    break;

  default:
    break;
}
</script>

<template>
  <div class="w-full flex-row-center hover:bg-gray-100 p-2.5 rounded-md">
    <div class="flex-col-center lg:mx-0 mx-auto">
      <Icon :name="icon" :color="props.color" :size="props.size" />
      <span
        :class="`text-${props.color}`"
        class="lg:block hidden text-black font-semibold text-[13px]"
        >{{ props.title }}</span
      >
    </div>
  </div>
</template>

<style scoped></style>
