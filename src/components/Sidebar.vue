<script lang="ts" setup>
import TablerStairsUp from "~icons/tabler/stairs-up";
import TablerTags from "~icons/tabler/tags";
import TablerMessageCircle from "~icons/tabler/message-circle";
import TablerCategory from "~icons/tabler/category";
import TablerEye from "~icons/tabler/eye";
import SimpleIconsWechat from "~icons/simple-icons/wechat";
import SimpleIconsBilibili from "~icons/simple-icons/bilibili";
import SimpleIconsZhihu from "~icons/simple-icons/zhihu";
import SimpleIconsTwitter from "~icons/simple-icons/twitter";
import SimpleIconsTelegram from "~icons/simple-icons/telegram";
import SimpleIconsFeedly from "~icons/simple-icons/feedly";
import SimpleIconsGitHub from "~icons/simple-icons/github";
import { faker } from "@faker-js/faker";
</script>

<template>
  <aside class="hidden h-full w-80 flex-col gap-6 sm:flex">
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <div class="flex flex-col items-center justify-center gap-4">
        <div class="relative h-24 w-24">
          <img src="https://halo.run/logo" class="h-full w-full rounded-full" />
          <span
            class="absolute right-0 bottom-0 flex h-7 w-7 items-center justify-center rounded-full border bg-white p-0.5"
          >
            🌚
          </span>
        </div>
        <div>
          <h1 class="text-2xl font-medium">Halo</h1>
        </div>
        <div>
          <p class="text-center text-sm text-gray-700">
            {{ faker.lorem.sentence() }}
          </p>
        </div>
        <div class="grid grid-cols-4 gap-5">
          <div class="inline-flex flex-col items-center">
            <span class="text-xl font-medium tabular-nums text-gray-900">
              {{ faker.datatype.number({ min: 20, max: 200 }) }}
            </span>
            <span class="text-xs font-light text-gray-600">文章数</span>
          </div>
          <div class="inline-flex flex-col items-center">
            <span class="text-xl font-medium tabular-nums text-gray-900">
              {{ faker.datatype.number({ min: 10, max: 20 }) }}
            </span>
            <span class="text-xs font-light text-gray-600">分类数</span>
          </div>
          <div class="inline-flex flex-col items-center">
            <span class="text-xl font-medium tabular-nums text-gray-900">
              {{ faker.datatype.number({ min: 100, max: 900 }) }}
            </span>
            <span class="text-xs font-light text-gray-600">评论数</span>
          </div>
          <div class="inline-flex flex-col items-center">
            <span class="text-xl font-medium tabular-nums text-gray-900">
              {{ faker.datatype.number() }}
            </span>
            <span class="text-xs font-light text-gray-600">访问量</span>
          </div>
        </div>
        <div class="grid grid-cols-6 items-center gap-5">
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsWechat class="h-4 w-4 text-[#07C160]" />
          </div>
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsBilibili class="h-4 w-4 text-[#00A1D6]" />
          </div>
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsGitHub class="h-4 w-4 text-[#181717]" />
          </div>
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsTwitter class="h-4 w-4 text-[#1DA1F2]" />
          </div>
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsTelegram class="h-4 w-4 text-[#26A5E4]" />
          </div>
          <div
            class="flex cursor-pointer items-center justify-center rounded p-1 hover:bg-gray-100"
          >
            <SimpleIconsFeedly class="h-4 w-4 text-[#2BB24C]" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <TablerStairsUp class="text-red-600" />热门文章
      </h2>
      <div>
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="i in 5" :key="i" class="py-3">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <h3 class="text-sm font-medium">{{ faker.lorem.words() }}</h3>
                <p class="text-xs text-gray-500">2022-10-01 发布</p>
              </div>
              <div class="inline-flex items-center gap-1 text-xs text-gray-600">
                <TablerEye />
                <span>5243</span>
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
        <TablerMessageCircle />最新评论
      </h2>
      <div>
        <ul role="list" class="divide-y divide-gray-100">
          <li v-for="i in 5" :key="i" class="py-3">
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
        <TablerCategory />分类目录
      </h2>
      <div class="mt-2">
        <ul class="space-y-1">
          <li>
            <a
              href="#"
              class="group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100"
            >
              <span class="text-sm opacity-80">Halo</span>
              <span
                class="rounded bg-gray-100 py-0.5 px-1 text-xs opacity-70 group-hover:bg-white"
              >
                20
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100"
            >
              <span class="text-sm opacity-80">MeterSphere</span>
              <span
                class="rounded bg-gray-100 py-0.5 px-1 text-xs opacity-70 group-hover:bg-white"
              >
                21
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100"
            >
              <span class="text-sm opacity-80">DataEase</span>
              <span
                class="rounded bg-gray-100 py-0.5 px-1 text-xs opacity-70 group-hover:bg-white"
              >
                22
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100"
            >
              <span class="text-sm opacity-80">{{ faker.lorem.word() }}</span>
              <span
                class="rounded bg-gray-100 py-0.5 px-1 text-xs opacity-70 group-hover:bg-white"
              >
                20
              </span>
            </a>
            <ul class="my-3 ml-3 space-y-1 border-l pl-2">
              <li v-for="i in 5" :key="i">
                <a
                  href="#"
                  class="group flex items-center justify-between rounded py-1 px-1.5 transition-all hover:bg-gray-100"
                >
                  <span class="text-sm opacity-80">
                    {{ faker.lorem.word() }}
                  </span>
                  <span
                    class="rounded bg-gray-100 py-0.5 px-1 text-xs opacity-70 group-hover:bg-white"
                  >
                    {{ faker.datatype.number({ min: 1, max: 20 }) }}
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="w-full cursor-pointer overflow-hidden rounded-xl bg-white p-3 shadow transition-all duration-500 hover:shadow-md"
    >
      <h2 class="inline-flex items-center gap-2 text-base">
        <TablerTags />标签
      </h2>
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
