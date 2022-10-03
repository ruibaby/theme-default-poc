<script lang="ts" setup>
import MdiFileSearchOutline from "~icons/mdi/file-search-outline";
</script>

<template>
  <header>
    <div class="h-72 bg-gradient-to-r from-gray-800 to-red-500">
      <div class="container mx-auto flex justify-between py-4">
        <div class="flex items-center gap-6">
          <div>
            <img src="https://halo.run/logo" class="h-8 w-8" />
          </div>
          <ul class="flex items-center gap-4 text-white">
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
            <li>🌞</li>
            <li><MdiFileSearchOutline class="text-white" /></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
