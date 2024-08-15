// plugins/heroicons.js
import { defineNuxtPlugin } from '#app';
import { HeartIcon, TrashIcon } from '@heroicons/vue/24/outline';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('icons', {
    HeartIcon,
    TrashIcon
  });
});
