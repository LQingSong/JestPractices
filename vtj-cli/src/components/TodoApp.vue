<template>
  <div>
    <div
      v-for="todo in state.todos"
      :key="todo.id"
      data-test="todo"
      :class="[todo.completed ? 'completed' : '']"
    >
      {{ todo.text }}
      <input
        type="checkbox"
        v-model="todo.completed"
        data-test="todo-checkbox"
      />
    </div>

    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="state.newTodo" />
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const todos = [
  {
    id: 1,
    text: 'Learn Vue.js 3',
    completed: false
  }
];
let newTodo = '';
const createTodo = () => {
  state.todos.push({
    id: 2,
    text: state.newTodo,
    completed: false
  });
};

const state = reactive({ todos, newTodo });
</script>
