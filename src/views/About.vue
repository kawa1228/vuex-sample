<template>
  <div class="counter">
    <h1>Counter</h1>
    <Count/>
    <CountLbl/>
    <CountBtn/>
  </div>
</template>

<script>
import Count from "@/components/Count.vue";
import CountBtn from "@/components/CountBtn.vue";
import CountLbl from "@/components/CountLbl.vue";

export default {
  name: "About",
  components: {
    Count,
    CountBtn,
    CountLbl
  }
};
</script>
