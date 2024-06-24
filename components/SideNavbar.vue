<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div
    id="side-navbar"
    class="fixed left-0 z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r min-w-[75px] overflow-auto text-black"
  >
    <div class="lg:w-full w-[55px] mx-auto">
      <NuxtLink to="/">
        <MenuItem title="Для вас" color="#000000" size="20" />
      </NuxtLink>
      <MenuItem title="Подписки" color="#000000" size="20" />
      <MenuItem title="В эфире" color="red" size="20" />
    </div>

    <div class="border-b"></div>

    <div class="lg:block hidden text-sm px-2 text-center">Рекомендации</div>

    <div class="cursor-pointer">
      <MenuItemFollow />
    </div>

    <button class="text-red-600 lg:block hidden text-[12px] pl-2 pt-2">
      Больше...
    </button>

    <div class="border-b"></div>

    <div class="lg:block hidden text-sm px-2 text-center">Ваши подписки</div>

    <div class="cursor-pointer">
      <MenuItemFollow />
    </div>

    <button class="text-red-600 lg:block hidden text-[12px] pl-2 pt-2">
      Остальные...
    </button>

    <div class="border-b"></div>
  </div>
</template>

<style scoped></style>
