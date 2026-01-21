<script setup lang="ts">
import { RouterView } from 'vue-router'
import RgpdBanner from './components/RgpdBanner.vue'
import Toast from './components/base/Toast.vue';
</script>

<template>
  <Toast />
  <RgpdBanner />
  <RouterView />
</template>
