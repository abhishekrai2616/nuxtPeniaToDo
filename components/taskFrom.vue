<template>
  <form @submit.prevent="handleSubmit" class="max-w-[400px] mx-auto grid grid-cols-[3fr_1fr] gap-2.5">
    <input 
      type="text" 
      placeholder="I need to..."
      v-model="newTask"
      class="border-0 py-2.5 px-4 rounded-md text-gray-600 text-base"
    >
    <button class="bg-[#ffd859] border-0 py-2.5 px-4 rounded-md cursor-pointer text-base">Add</button>
  </form>
</template>

<script setup>
    const taskStore = useTaskStore()

    const newTask = ref('')

    const handleSubmit = () => {
        if (newTask.value.length > 0) {
        taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 1000000)
        })
        newTask.value = ""
        }
    }
</script>