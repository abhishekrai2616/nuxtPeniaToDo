<template>
  <main>
    <!-- heading -->
    <header class="text-center bg-gray-200 pt-5 flex justify-center items-center">
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo" class="max-w-[60px] rotate-[-10deg]">
      <h1 class="m-0 text-2xl pt-6 ml-4 text-gray-500 rotate-[2deg]">Pinia Tasks</h1>
    </header>

    <div class="bg-gray-200 py-5">
        <TaskFrom />
    </div>

    <!-- filter -->
    <nav class="w-[640px] mx-auto text-right">
      <button @click="filter = 'all'" class="inline-block ml-2 bg-white border-2 border-gray-600 rounded-sm py-1 px-2 cursor-pointer text-sm">All tasks</button>
      <button @click="filter = 'favs'" class="inline-block ml-2 bg-white border-2 border-gray-600 rounded-sm py-1 px-2 cursor-pointer text-sm">Fav tasks</button>
    </nav>

    <!-- task list -->
    <div class="max-w-[640px] mx-auto my-5" v-if="filter === 'all'">
      <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="max-w-[640px] mx-auto my-5" v-if="filter === 'favs'">
      <p>You have {{ taskStore.favCount }} tasks in your favs list.</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script setup>
    const taskStore = useTaskStore();
    const filter = ref('all')
</script>