<template>
  <div id="tab-bar">
    <!-- TabBarItem中也有slot要覆盖 -->
    <slot></slot>     
  </div>
</template>

<script>

export default {
  name:'TabBar'
}
</script>

<style scoped>
    #tab-bar {
        display: flex;
        background-color: yellow;
        
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>