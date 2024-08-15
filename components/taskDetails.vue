<template>
  <div class="task px-5 py-1.5 mt-5 bg-white rounded-md shadow-md flex justify-between items-center">
    <h3 class="inline-block">{{ task.title }}</h3>
    <div class="inline-block text-right flex">
      <TrashIcon class="text-gray-400 w-8 cursor-pointer" @click="taskStore.deleteTask(task.id)"/>
      <component 
        :is="task.isFav ? HeartSolidIcon : HeartOutlineIcon" 
        class="text-pink-600 w-8 cursor-pointer ml-5" 
        @click="taskStore.toggleFav(task.id)" 
      />
    </div>
  </div>
</template>

<script setup>
import { HeartIcon as HeartOutlineIcon } from '@heroicons/vue/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/vue/24/solid';
import { TrashIcon } from '@heroicons/vue/24/outline';

  const taskStore = useTaskStore();
  const {task} = defineProps(['task']);
</script>