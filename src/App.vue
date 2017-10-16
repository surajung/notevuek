<template>
  <div id="app">
    <div class="list">
      <list></list>
    </div>
    <div class="editor">
      <editor></editor>
    </div>
  </div>
</template>

<script>
import List from '@/components/List'
import Editor from '@/components/Editor'
export default {
  name: 'app',
  components: {
    List,
    Editor
  }
}
</script>

<style>
body {margin:0;padding:0;}
#app {height:100vh;width:100vw;}
#app > div {height:100vh;padding:10px;box-sizing: border-box;}
.list {float:left;overflow:auto;width:30vw;border-right:1px solid #e3e3e3}
.editor {float:left;padding-left:10px;width:70vw;overflow-wrap:break-word;}
</style>
