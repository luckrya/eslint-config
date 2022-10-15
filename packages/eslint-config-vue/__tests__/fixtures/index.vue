// 【60条】 // ////////////////////// plugin:vue/vue3-recommended
//////////////////////// //
////////////////////////////////////////////////////////////////////// //
plugin:prettier/recommended

<template>
  <ListComponent>
    <!-- ✓ GOOD -->
    <template slot-scope="props">
      {{ props.title }}
    </template>
  </ListComponent>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const count = ref(0);
    const ok = ref(true);

    /* ✗ BAD */
    count++;
    const msg = ok.value ? "yes" : "no";

    return {
      count,
    };
  },
};
</script>
