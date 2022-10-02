<script lang="ts" setup>
import MdiFileSearchOutline from "~icons/mdi/file-search-outline";
</script>

<template>
  <header>
    <div class="h-72 bg-gradient-to-r from-gray-800 to-red-500">
      <div class="container mx-auto px-4 py-4 flex justify-between">
        <div class="flex items-center gap-6">
          <div>
            <img src="https://halo.run/logo" class="w-8 h-8" />
          </div>
          <ul class="flex gap-4 text-white items-center">
            <li
              class="opacity-100 hover:opacity-100 transition-all cursor-pointer"
            >
              首页
            </li>
            <li
              class="opacity-80 hover:opacity-100 transition-all cursor-pointer"
            >
              默认分类
            </li>
            <li
              class="opacity-80 hover:opacity-100 transition-all cursor-pointer"
            >
              Halo
            </li>
            <li
              class="opacity-80 hover:opacity-100 transition-all cursor-pointer"
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
