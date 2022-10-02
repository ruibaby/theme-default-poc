<script lang="ts" setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";
import MdiShareVariantOutline from "~icons/mdi/share-variant-outline";
import MdiCommentQuoteOutline from "~icons/mdi/comment-quote-outline";
import { Comment } from "@halo-dev/comment-widget";
import "@halo-dev/comment-widget/dist/style.css";

interface Post {
  title: string;
  summary: string;
  cover: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
}

const post = ref<Post>({
  title: faker.lorem.words(),
  summary: faker.lorem.sentences(),
  cover: faker.image.unsplash.nature(),
  createdAt: "2021-01-01",
  content: faker.lorem.sentences(200),
  author: {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
  },
  category: faker.lorem.word(),
  tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
});
</script>

<template>
  <Header />
  <section class="container mx-auto"></section>
  <section class="container mx-auto -mt-20 flex gap-6 px-4">
    <div class="flex-1 rounded-xl bg-white p-4">
      <div class="flex items-center justify-between">
        <div class="inline-flex items-center justify-start gap-2">
          <img src="https://ryanc.cc/avatar" class="h-10 w-10 rounded-full" />
          <div class="flex flex-col gap-0.5">
            <span class="text-sm font-semibold text-gray-900">Ryan Wang</span>
            <span class="text-xs text-gray-600">发布于 2022-10-01</span>
          </div>
        </div>
        <div class="inline-flex flex-row gap-1">
          <div class="cursor-pointer rounded-lg p-1 hover:bg-gray-100">
            <MdiCommentQuoteOutline class="text-gray-600 hover:text-gray-900" />
          </div>
          <div class="cursor-pointer rounded-lg p-1 hover:bg-gray-100">
            <MdiShareVariantOutline class="text-gray-600 hover:text-gray-900" />
          </div>
        </div>
      </div>
      <h1 class="my-3 text-2xl font-medium">{{ post.title }}</h1>
      <div>
        <a
          href="#"
          class="cursor-pointer text-sm italic text-gray-600 hover:text-gray-900"
          v-for="i in 5"
          :key="i"
        >
          #{{ faker.lorem.word() }}
        </a>
      </div>
      <article class="mt-4 prose max-w-none prose-base">
        {{ post.content }}
      </article>
      <hr class="my-10" />
      <h2 class="mb-2 text-base font-medium text-gray-900">评论</h2>
      <Comment />
    </div>

    <Sidebar />
  </section>
  <Footer />
</template>
