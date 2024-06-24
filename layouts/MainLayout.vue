<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import SideNavbar from "~/components/SideNavbar.vue";
const route = useRoute();
</script>

<template>
  <Navbar />
  <div
    class="flex justify-center w-full lg:px-2.5 px-0 z-50"
    :class="route.fullPath === '/' ? 'w-[1150px]' : ''"
  >
    <div>
      <SideNavbar />
    </div>
    <slot />
  </div>
</template>

<style scoped>
* {
  background-color: white;
}
</style>
