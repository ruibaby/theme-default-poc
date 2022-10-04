<script setup lang="ts">
import { onMounted, ref } from "vue";
import { faker } from "@faker-js/faker";
import TablerArrowLeft from "~icons/tabler/arrow-left";
import TablerArrowRight from "~icons/tabler/arrow-right";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import PostCard from "../components/PostCard.vue";

interface Post {
  title: string;
  summary: string;
  cover: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
}

const posts = ref<Post[]>([] as Post[]);

onMounted(() => {
  for (let i = 0; i <= 20; i++) {
    posts.value.push({
      title: faker.lorem.words(),
      summary: faker.lorem.sentences(2),
      cover: faker.image.unsplash.nature(),
      createdAt: "2021-01-01",
      author: {
        name: faker.name.fullName(),
        avatar: faker.image.avatar(),
      },
      category: faker.lorem.word(),
      tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    });
  }
});
</script>

<template>
  <Header />
  <section class="container mx-auto"></section>
  <section class="container mx-auto -mt-20 grid grid-cols-4 gap-6">
    <div class="col-span-4 sm:col-span-3">
      <div
        v-if="posts.length"
        class="group mb-6 flex cursor-pointer grid-cols-3 flex-col overflow-hidden rounded-xl bg-white shadow-md ring-black transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:ring-2 sm:grid"
      >
        <div class="aspect-w-16 aspect-h-9 col-span-1">
          <img
            :src="`${posts[0].cover}?id=${Math.random()}`"
            :alt="posts[0].title"
            class="h-full w-full object-cover transition-all duration-500"
          />
        </div>
        <div class="relative col-span-2 flex flex-col p-4">
          <div class="flex flex-wrap items-center gap-2">
            <a class="mr-1 font-medium text-gray-800 hover:text-gray-900">
              {{ posts[0].category }}
            </a>
            <a
              :href="tag"
              class="cursor-pointer text-sm italic text-gray-600 hover:text-gray-900"
              v-for="(tag, tagIndex) in posts[0].tags"
              :key="tagIndex"
            >
              #{{ tag }}
            </a>
          </div>
          <h1
            class="mt-2 cursor-pointer text-2xl font-medium transition-all hover:text-gray-500 hover:underline"
          >
            <a href="#">{{ posts[0].title }}</a>
          </h1>
          <p class="font-sm mt-2 font-light">{{ posts[0].summary }}</p>
          <div class="mt-2 flex flex-1 items-center justify-start gap-2">
            <img src="https://ryanc.cc/avatar" class="h-8 w-8 rounded-full" />
            <span class="text-sm tabular-nums text-gray-600">
              发布于 2022-10-01
            </span>
          </div>
        </div>
      </div>

      <div
        id="filters"
        class="flex gap-x-2 overflow-x-auto overflow-y-hidden scroll-smooth"
      >
        <div
          class="flex cursor-pointer items-center rounded bg-gray-100 px-2 py-1 font-semibold text-gray-900 transition-all hover:shadow-sm"
        >
          <div class="flex flex-1 items-center truncate">
            <span class="truncate text-base"> 全部 </span>
          </div>
        </div>
        <div
          v-for="index in 10"
          :key="index"
          class="flex cursor-pointer items-center rounded px-2 py-1 font-semibold text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm"
        >
          <div class="flex flex-1 items-center truncate">
            <span class="truncate text-base">
              <RouterLink :to="{ name: 'Category', params: { name: index } }">
                {{ faker.lorem.word() }} <sup>{{ index }}</sup>
              </RouterLink>
            </span>
          </div>
        </div>
      </div>

      <div
        id="post-list"
        class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <PostCard v-for="(post, index) in posts" :key="index" :post="post" />
      </div>

      <div class="mt-6 flex items-center justify-between">
        <button
          class="whitespace-no-wrap group inline-flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-4 py-1 text-sm font-medium leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none"
        >
          <TablerArrowLeft class="transition-all group-hover:-translate-x-1" />
          <span>上一页</span>
        </button>
        <span class="text-sm text-gray-900">1 / 20</span>
        <button
          class="whitespace-no-wrap group inline-flex items-center justify-center gap-1 rounded-md border border-gray-200 bg-white px-4 py-1 text-sm font-medium leading-6 text-gray-600 shadow-sm hover:bg-gray-50 focus:shadow-none focus:outline-none"
        >
          <span>下一页</span>
          <TablerArrowRight class="transition-all group-hover:translate-x-1" />
        </button>
      </div>
    </div>
    <Sidebar />
  </section>
  <Footer />
</template>
