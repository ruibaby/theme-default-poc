<script lang="ts" setup>
export interface Post {
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

withDefaults(
  defineProps<{
    post?: Post;
    cover?: boolean;
  }>(),
  {
    post: undefined,
    cover: true,
  }
);
</script>

<template>
  <div
    class="group flex cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-md ring-black transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:ring-2"
  >
    <div v-if="cover" class="aspect-w-16 aspect-h-9">
      <img
        :src="`${post?.cover}?id=${Math.random()}`"
        :alt="post?.title"
        class="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
      />
    </div>
    <div class="relative flex flex-col p-4">
      <div class="flex flex-wrap items-center gap-2">
        <a class="mr-1 font-medium text-gray-800 hover:text-gray-900">
          {{ post?.category }}
        </a>
        <a
          :href="tag"
          class="cursor-pointer text-sm italic text-gray-600 hover:text-gray-900"
          v-for="(tag, tagIndex) in post?.tags"
          :key="tagIndex"
        >
          #{{ tag }}
        </a>
      </div>
      <h1
        class="mt-2 cursor-pointer text-2xl font-medium transition-all hover:text-gray-500 hover:underline"
      >
        <RouterLink :to="{ name: 'Post' }">
          {{ post?.title }}
        </RouterLink>
      </h1>
      <p class="font-sm mt-2 font-light">{{ post?.summary }}</p>
      <div class="mt-2 flex flex-1 items-center justify-start gap-2">
        <img
          src="https://ryanc.cc/avatar"
          class="h-8 w-8 rounded-full border drop-shadow-sm"
        />
        <span class="text-sm tabular-nums text-gray-600">
          发布于 2022-10-01
        </span>
      </div>
    </div>
  </div>
</template>
