<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useListStore } from "./store";

const list = useListStore();
const { list: todoList } = storeToRefs(list);
const addItem = () => {
  list.handleTodo(list.todo);
};
</script>

<template>
  <input type="text" v-model="list.todo" />
  <button @click="addItem">添加</button>
  <p v-for="item in todoList" @click="list.delTodo(item.id)">
    {{ item.todo }}
  </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
