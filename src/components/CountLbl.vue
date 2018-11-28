<template>
  <div class="count-lbl">
    <p>{{ count }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: mapState({
    // ...mapState(["count"])
    count: state => state.count
  })
};
</script>
