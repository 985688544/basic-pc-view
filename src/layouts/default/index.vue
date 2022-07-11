<template>
  <div class="basic-layout">
    <RouterView></RouterView>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    setup() {
      console.log('342');
    },
  });
</script>

<style lang="less">
  .basic-layout {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;
    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
