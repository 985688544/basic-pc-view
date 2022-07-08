<template>
  <div>
    <el-button type="primary" @click="handleLogin">login</el-button>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useGo } from '/@/hooks/usePage';

  export default defineComponent({
    setup() {
      function handleLogin() {
        const go = useGo();
        console.log('322');
        go('/dashboard');
      }
      return {
        handleLogin,
      };
    },
  });
</script>

<style></style>
