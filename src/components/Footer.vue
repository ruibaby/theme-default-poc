<script lang="ts" setup></script>

<template>
  <footer class="mt-10 bg-white py-8">
    <div class="container mx-auto sm:flex sm:items-center sm:justify-between">
      <a
        href="https://halo.run/"
        class="mb-4 flex items-center justify-center sm:mb-0 sm:justify-start"
      >
        <img src="https://halo.run/logo" class="mr-3 h-8" alt="Halo Logo" />
        <span class="self-center whitespace-nowrap text-2xl font-semibold">
          Halo
        </span>
      </a>
      <ul
        class="mb-6 flex flex-wrap items-center justify-center text-sm text-gray-500 sm:mb-0 sm:justify-start"
      >
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">首页</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">关于</a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">订阅</a>
        </li>
        <li>
          <a href="#" class="hover:underline">联系</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-100 sm:mx-auto lg:my-8" />
    <span class="container mx-auto block text-center text-sm text-gray-500">
      © 2022
      <a href="https://halo.run" class="hover:underline">Halo</a>. All Rights
      Reserved.
    </span>
  </footer>
</template>
