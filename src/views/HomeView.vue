<script setup lang="ts">
import { onMounted, ref } from "vue";
import { faker } from "@faker-js/faker";
import MdiArrowLeft from "~icons/mdi/arrow-left";
import MdiArrowRight from "~icons/mdi/arrow-right";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

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
      summary: faker.lorem.sentences(),
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
  <section class="flex container mx-auto px-4 gap-6 -mt-20">
    <div class="flex-1">
      <div
        v-if="posts.length"
        class="rounded-xl bg-white mb-6 flex flex-col sm:grid grid-cols-3 group overflow-hidden shadow-md hover:shadow-lg cursor-pointer hover:ring-2 ring-black transition-all duration-500 hover:-translate-y-2"
      >
        <div class="aspect-w-16 aspect-h-9 col-span-1">
          <img
            :src="`${posts[0].cover}?id=${Math.random()}`"
            :alt="posts[0].title"
            class="w-full h-full object-cover transition-all duration-500"
          />
        </div>
        <div class="p-4 flex flex-col relative">
          <div class="flex flex-wrap gap-2 items-center">
            <a class="font-medium mr-1 text-gray-800 hover:text-gray-900">
              {{ posts[0].category }}
            </a>
            <a
              :href="tag"
              class="italic text-gray-600 text-sm hover:text-gray-900 cursor-pointer"
              v-for="(tag, tagIndex) in posts[0].tags"
              :key="tagIndex"
            >
              #{{ tag }}
            </a>
          </div>
          <h1
            class="mt-2 text-2xl font-medium hover:underline transition-all hover:text-gray-500 cursor-pointer"
          >
            <a href="#">{{ posts[0].title }}</a>
          </h1>
          <p class="mt-2 font-sm font-light">{{ posts[0].summary }}</p>
          <div class="mt-2 flex justify-start flex-1 items-center gap-2">
            <img src="https://ryanc.cc/avatar" class="h-8 w-8 rounded-full" />
            <span class="text-sm text-gray-600 tabular-nums">
              发布于 2022-10-01
            </span>
          </div>
        </div>
      </div>
      <div id="filters" class="flex items-center">
        <div class="inline-flex gap-2 items-center">
          <div
            class="text-gray-900 bg-gray-100 rounded px-2 py-1 font-semibold cursor-pointer"
          >
            全部
          </div>
          <div
            v-for="i in 5"
            :key="i"
            class="text-gray-500 font-semibold hover:bg-gray-100 rounded px-2 py-1 hover:text-gray-900 cursor-pointer transition-all"
          >
            {{ faker.lorem.word() }}
          </div>
        </div>
      </div>
      <div
        id="post-list"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6"
      >
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="rounded-xl group bg-white overflow-hidden shadow-md hover:shadow-lg cursor-pointer hover:ring-2 ring-black transition-all duration-500 hover:-translate-y-2"
        >
          <div class="aspect-w-16 aspect-h-9">
            <img
              :src="`${post.cover}?id=${Math.random()}`"
              :alt="post.title"
              :key="index"
              class="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
          <div class="p-4 flex flex-col relative">
            <div class="flex flex-wrap gap-2 items-center">
              <a class="font-medium mr-1 text-gray-800 hover:text-gray-900">
                {{ post.category }}
              </a>
              <a
                :href="tag"
                class="italic text-gray-600 text-sm hover:text-gray-900 cursor-pointer"
                v-for="(tag, tagIndex) in post.tags"
                :key="tagIndex"
              >
                #{{ tag }}
              </a>
            </div>
            <h1
              class="mt-2 text-2xl font-medium hover:underline transition-all hover:text-gray-500 cursor-pointer"
            >
              <RouterLink :to="{ name: 'Post' }">
                {{ post.title }}
              </RouterLink>
            </h1>
            <p class="mt-2 font-sm font-light">{{ post.summary }}</p>
            <div class="mt-2 flex justify-start flex-1 items-center gap-2">
              <img
                src="https://ryanc.cc/avatar"
                class="h-8 w-8 rounded-full border drop-shadow-sm"
              />
              <span class="text-sm text-gray-600 tabular-nums">
                发布于 2022-10-01
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-between mt-6 items-center">
        <button
          class="inline-flex gap-1 items-center justify-center px-4 py-1 text-sm font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
        >
          <MdiArrowLeft />
          <span>上一页</span>
        </button>
        <span class="text-sm text-gray-900">1 / 20</span>
        <button
          class="inline-flex gap-1 items-center justify-center px-4 py-1 text-sm font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
        >
          <span>下一页</span>
          <MdiArrowRight />
        </button>
      </div>
    </div>
    <Sidebar />
  </section>
  <Footer />
</template>
