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
  <section class="container mx-auto mt-6 flex gap-6">
    <div class="flex-1">
      <div id="filters" class="flex items-center">
        <div class="inline-flex items-center gap-2">
          <div
            class="cursor-pointer rounded bg-gray-100 px-2 py-1 font-semibold text-gray-900"
          >
            全部
          </div>
          <div
            v-for="i in 5"
            :key="i"
            class="cursor-pointer rounded px-2 py-1 font-semibold text-gray-500 transition-all hover:bg-gray-100 hover:text-gray-900"
          >
            {{ faker.lorem.word() }} <sup>{{ i }}</sup>
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
