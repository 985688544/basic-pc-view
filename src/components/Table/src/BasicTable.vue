<template> </template>
<script>
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup(props, { attrs, emit, slots, expose }) {
      const tableElRef = ref(null);
      const tableData = ref<Recordable[]>([]);
      const wrapRef = ref(null)


    },
  });
</script>
