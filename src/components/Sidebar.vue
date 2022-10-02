<script lang="ts" setup>
import MdiFire from "~icons/mdi/fire";
import MdiCommentQuoteOutline from "~icons/mdi/comment-quote-outline";
import MdiTag from "~icons/mdi/tag";
import { faker } from "@faker-js/faker";
</script>

<template>
  <aside class="hidden h-full w-80 flex-col gap-6 sm:flex">
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <div>
          <img src="https://halo.run/logo" class="h-20 w-20" />
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
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiFire class="text-red-600" />热门文章
      </h2>
      <div></div>
    </div>
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiCommentQuoteOutline />最新评论
      </h2>
      <div>
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="i in 5" :key="i" class="py-4">
            <div class="flex space-x-3">
              <img
                class="h-6 w-6 rounded-full"
                :src="faker.image.cats()"
                alt=""
              />
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">
                    {{ faker.name.fullName() }}
                  </h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">
                  {{ faker.lorem.sentence() }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <MdiCommentQuoteOutline />分类目录
      </h2>
    </div>
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base"><MdiTag />标签</h2>
      <div class="mt-2 flex flex-wrap gap-2">
        <a
          class="rounded bg-gray-100 px-1 py-0.5 text-sm text-gray-900 hover:bg-gray-200"
          href="#"
          v-for="i in 20"
          :key="i"
        >
          #{{ faker.lorem.word() }}
          <sup>{{ i }}</sup>
        </a>
      </div>
    </div>
  </aside>
</template>
