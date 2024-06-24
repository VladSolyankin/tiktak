<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue";
import PostComponent from "~/components/PostComponent.vue";
</script>

<template>
  <MainLayout>
    <div class="pt-[80px] w-[calc(100%-75px)] max-w-[700px]">
      <PostComponent />
    </div>
  </MainLayout>
</template>

<style scoped></style>
