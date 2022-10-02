<script lang="ts" setup>
import { ref } from "vue";
import { faker } from "@faker-js/faker";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";
import Footer from "../components/Footer.vue";

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
  <section class="flex container mx-auto px-4 gap-6 -mt-20">
    <div class="flex-1 bg-white rounded-xl p-4">
      <h1 class="text-2xl font-medium">{{ post.title }}</h1>
      <article>
        {{ post.content }}
      </article>
    </div>

    <Sidebar />
  </section>
  <Footer />
</template>
