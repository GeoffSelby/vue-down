<template>
  <div id="app" class="flex flex-col h-full min-h-full">
    <header class="w-full bg-white border-b border-grey">
      <div class="px-6">
        <nav class="flex items-center justify-between flex-wrap py-6">
          <div class="flex items-center flex-no-shrink mr-6 text-lg">
            VueDown
          </div>
          <div class="text-sm flex items-center">
            <a href="https://github.com/GeoffSelby/vue-down" target="_blank" class="no-underline text-grey-darker">GitHub</a>
          </div>
        </nav>
      </div>
    </header>
    <section class="flex h-full">
      <Editor/>
      <Preview/>
    </section>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Preview from './components/Preview.vue'

export default {
  name: 'app',
  components: {
    Editor,
    Preview
  }
}
</script>
