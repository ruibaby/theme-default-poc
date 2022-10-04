<script lang="ts" setup>
import TablerSearch from "~icons/tabler/search";
import TablerBrightness2 from "~icons/tabler/brightness-2";
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

const onScroll = () => {
  const headerMenu = document.getElementById("header-menu");
  if (window.scrollY > 0) {
    headerMenu?.classList.add("menu-sticky");
  } else {
    headerMenu?.classList.remove("menu-sticky");
  }
};
</script>

<template>
  <header>
    <div class="h-96 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div id="header-menu" class="flex h-14 py-3 transition-all">
        <div class="container mx-auto flex justify-between">
          <div class="flex items-center gap-6">
            <div>
              <img
                src="https://halo.run/upload/2022/03/logo.svg"
                class="h-14 w-14"
              />
            </div>
            <ul class="flex items-center gap-6 text-white">
              <li
                class="cursor-pointer opacity-100 transition-all hover:opacity-100"
              >
                <RouterLink :to="{ name: 'Home' }">首页</RouterLink>
              </li>
              <li
                class="cursor-pointer opacity-80 transition-all hover:opacity-100"
              >
                默认分类
              </li>
              <li
                class="cursor-pointer opacity-80 transition-all hover:opacity-100"
              >
                Halo
              </li>
              <li
                class="cursor-pointer opacity-80 transition-all hover:opacity-100"
              >
                <RouterLink :to="{ name: 'Links' }">链接</RouterLink>
              </li>
              <li
                class="cursor-pointer opacity-80 transition-all hover:opacity-100"
              >
                关于
              </li>
            </ul>
          </div>
          <div class="flex items-center">
            <ul class="flex items-center gap-4">
              <li><TablerBrightness2 class="text-white" /></li>
              <li><TablerSearch class="text-white" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.menu-sticky {
  @apply fixed top-0 left-0 right-0 z-10 bg-black/80 drop-shadow-md backdrop-blur-lg;
}
</style>
