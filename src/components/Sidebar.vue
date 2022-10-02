<script lang="ts" setup>
import MdiFire from "~icons/mdi/fire";
import MdiCommentQuoteOutline from "~icons/mdi/comment-quote-outline";
import MdiTag from "~icons/mdi/tag";
import { faker } from "@faker-js/faker";
</script>

<template>
  <aside class="w-80 hidden sm:flex flex-col gap-6 h-full">
    <div
      class="w-full p-3 rounded-xl bg-white overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-500"
    >
      <div class="flex items-center justify-center gap-2 flex-col">
        <div>
          <img src="https://halo.run/logo" class="w-20 h-20" />
        </div>
        <div>
          <h1 class="text-2xl font-medium">Halo</h1>
        </div>
        <div>
          <p class="text-sm text-gray-700">{{ faker.lorem.sentence() }}</p>
        </div>
      </div>
    </div>
    <div
      class="w-full p-3 rounded-xl bg-white overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-500"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiFire class="text-red-600" />热门文章
      </h2>
    </div>
    <div
      class="w-full p-3 rounded-xl bg-white overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-500"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiCommentQuoteOutline />最新评论
      </h2>
    </div>
    <div
      class="w-full p-3 rounded-xl bg-white overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-500"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiCommentQuoteOutline />分类目录
      </h2>
    </div>
    <div
      class="w-full p-3 rounded-xl bg-white overflow-hidden shadow hover:shadow-md cursor-pointer transition-all duration-500"
    >
      <h2 class="inline-flex items-center gap-2 text-base"><MdiTag />标签</h2>
      <div class="flex flex-wrap gap-2 mt-2">
        <a
          class="text-gray-900 text-sm rounded bg-gray-100 px-1 py-0.5 hover:bg-gray-200"
          href="#"
          v-for="i in 20"
          :key="i"
        >
          #{{ faker.lorem.word() }}
        </a>
      </div>
    </div>
  </aside>
</template>
