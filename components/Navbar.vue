<template>
  <div
    id="navbar"
    class="fixed bg-white z-30 flex items-center w-full min-h-[5dvh] border-b text-black"
  >
    <div
      class="flex-row-center w-full px-6 mx-auto"
      :class="route.fullPath === '/' ? 'w-[60%]' : ''"
    >
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <NuxtLink to="/">
          <NuxtImg src="/tiktok-logo.png" width="110" />
        </NuxtLink>
      </div>
      <div
        class="hidden md:flex items-center bg-gray-200 p-1 rounded-full max-w-[400px] w-full"
      >
        <input
          class="w-full bg-transparent px-3 placeholder-gray-400 focus:outline-none text-black text-[15px]"
          placeholder="Найти пользователей..."
        />
        <div class="px-3 py-1 flex-row-center rounded-full">
          <Icon
            name="ri:search-line"
            size="20"
            class="bg-transparent"
            color="#A1A2A7"
          />
        </div>
      </div>

      <div
        class="mx-5 flex items-center justify-end gap-3 w-full min-w-[20dvw] max-w-[30dvw]"
      >
        <button
          class="flex-row-center p-1 border-[1px] rounded gap-1 hover:bg-gray-100"
        >
          <Icon
            name="mdi:plus"
            size="20"
            color="#A1A2A7"
            class="bg-transparent"
          />
          <span class="bg-transparent">Загрузить</span>
        </button>

        <div v-if="false" class="flex-row-center gap-3">
          <button
            class="flex-row-center p-1 gap-1 rounded border-[1px] bg-red-600 text-white min-w-[5dvw]"
          >
            <span class="bg-transparent p-[1px]">Войти</span>
          </button>

          <Icon name="mdi:dots-vertical" size="25" color="black" />
        </div>

        <div class="flex-row-center gap-5">
          <Icon
            name="carbon:send-alt"
            class="min-h-[25px]"
            size="25"
            color="black"
          />
          <Icon
            name="bx:message-detail"
            class="min-h-[25px]"
            size="25"
            color="black"
          />
          <UPopover class="flex-row-center mr-10">
            <NuxtImg
              src="/tiktok-logo-small.png"
              width="30"
              class="rounded-full"
            />
            <template #panel>
              <div class="flex-col-center gap-3 p-3 bg-white rounded-md">
                <NuxtLink
                  to="/profile"
                  class="flex justify-start items-center gap-3 w-full"
                >
                  <Icon name="mdi:account" size="20" color="black" />
                  <span>Профиль</span>
                </NuxtLink>
                <div
                  class="flex justify-start items-center gap-3 pt-3 border-t w-full"
                >
                  <Icon name="ri:logout-box-r-line" size="20" color="black" />
                  <span>Выйти</span>
                </div>
              </div>
            </template>
          </UPopover>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>
