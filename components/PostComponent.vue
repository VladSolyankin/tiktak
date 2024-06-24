<script setup lang="ts">
const video = ref();

onMounted(() => {
  video.value.play();
});
</script>

<template>
  <div id="post-component" class="flex border-b py-6">
    <div class="cursor-pointer">
      <img
        src="https://loremflickr.com/320/320"
        class="rounded-full max-h-[60px]"
        width="60"
      />
    </div>
    <div class="pl-3 w-full px-4">
      <div class="flex items-center justify-between pb-0.5">
        <button>
          <span class="font-bold text-black hover:underline cursor-pointer"
            >Имя пользователя</span
          >
          <span
            class="text-[13px] text-light text-gray-500 pl-1 cursor-pointer"
          >
            Никнейм
          </span>
        </button>

        <button
          class="border text-[15px] px-[21px] py-0.5 border-red text-[#FF0000] hover:bg-gray-100 font-semibold rounded-md"
        >
          Подписаться
        </button>
      </div>
      <div
        class="text-[13px] text-black pb-0.5 break-words md:max-w-[400px] max-w-[300px]"
      >
        Статус
      </div>
      <div class="text-gray-400">#мем #видосик #хайп #тиктокер</div>
      <div class="flex-row-start gap-3 text-[12px] text-black">
        <Icon name="mdi:music" color="gray" size="15" />
        <div>Watch It Burn - Red Bull Symphonic</div>
      </div>

      <div class="mt-2.5 flex">
        <div
          class="relative min-h-[480px] max-h-[580px] max-w-[260px] flex-row-start"
        >
          <video
            src="/campfire.mp4"
            ref="video"
            loop
            muted
            class="rounded-xl object-cover mx-auto h-full"
          ></video>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
