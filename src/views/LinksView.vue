<script lang="ts" setup>
import Footer from "../components/Footer.vue";
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";
import { faker } from "@faker-js/faker";
</script>

<template>
  <Header />
  <section class="container mx-auto"></section>
  <section class="container mx-auto -mt-20 flex gap-6">
    <div class="flex-1 rounded-xl bg-white p-4">
      <h1 class="my-3 text-2xl font-medium">链接</h1>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <a v-for="i in 20" :key="i" href="#" target="_blank">
          <div
            class="relative flex items-center space-x-3 rounded border border-gray-300 bg-white px-5 py-4 shadow-sm hover:border-gray-400 hover:shadow"
          >
            <div class="flex-shrink-0">
              <img class="h-12 w-12 rounded-full" :src="faker.image.cats()" />
            </div>
            <div class="min-w-0 flex-1">
              <div>
                <p class="truncate text-sm font-medium text-gray-900">
                  {{ faker.lorem.word() }}
                </p>
                <p class="truncate text-sm text-gray-500">
                  {{ faker.lorem.sentence() }}
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <Sidebar />
  </section>
  <Footer />
</template>
