<template>
  <div class="w-1/2">
    <div class="preview" :class="code == '' ? 'bg-grey-lighter' : 'bg-white'">
      <div v-if="code == ''" class="empty-state h-full w-full flex flex-col justify-center items-center">
        <h1 class="block text-xl text-grey font-medium pb-2">Nothing to see here</h1>
        <p class="block text-grey">Type some markdown in the editor and see a live preview here!</p>
      </div>
      <div v-else>
        <article class="markdown-body" v-html="code"></article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preview',

  computed: {
    code () {
      return window.store.state.code;
    }
  }
}
</script>

<style scoped>
  .preview {
    position: relative;
    resize: none;
    width: 100%;
    height: 100%;
  }

  .markdown-body {
    background: #fff;
    padding: 0.5rem;
  }
</style>
