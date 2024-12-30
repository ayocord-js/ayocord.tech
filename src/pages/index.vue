<template>
  <NuxtLayout>
    <div
      class="flex items-center text-text font-bold select-none no-copy cursor-default justify-center h-screen px-4 sm:px-0"
    >
      <IconsLogo class="hidden mx-10 sm:block" width="350" />

      <div
        class="flex flex-col items-center justify-center text-center sm:gap-2"
      >
        <h2 class="text-3xl sm:text-5xl font-semibold text-gradient glow-text">
          Ayocord
        </h2>
        <p class="text-lg text-text opacity-80 sm:text-xl">
          Simplify development with ayocord.
        </p>
        <div
          class="flex cursor-pointer flex-wrap justify-center gap-1 sm:gap-1"
        >
          <MainButton v-for="(button, index) in buttons" :key="index"
          :button="button" @click="navigateTo(button.link, { external:
          button.name.toLowerCase() === 'source' })
          " />
        </div>
        <div class="flex space-x-1 opacity-60">
          <p>&copy Thx for design my friend</p>
          <a class="text-primary" href="https://t.me/pvashkaa">@pvashkaa</a>
        </div>
      </div>
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { navigateTo } from "nuxt/app";
import { Routes } from "../utils/Routes";

const buttons = [
  { name: "Docs", link: Routes.docs },
  { name: "Source", link: Routes.source },
];
</script>

<style scoped>
.text-gradient {
  background: linear-gradient(90deg, #66c0ff, #3d7399);
  background-clip: text;
  color: transparent;
}

.glow-text {
  text-shadow: 0 0 10px rgba(102, 192, 255, 0.7),
    0 0 20px rgba(102, 192, 255, 0.7);
}
</style>
