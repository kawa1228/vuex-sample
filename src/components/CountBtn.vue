<template>
  <div class="count-btn">
    <button @click="increment()">+</button>
    <button @click="decrement()">-</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["increment"]),
    ...mapMutations(["decrement"])
  }
};
</script>