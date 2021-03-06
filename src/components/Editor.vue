<template>
  <div class="w-1/2 border-r border-grey-light editor">
  </div>
</template>

<script>
import CodeFlask from 'codeflask';

export default {
  name: 'Editor',
  data() {
    return {
      markdown: 'Hello',
    }
  },

  watch: {
    markdown: source => {
      window.store.commit('convertToHtml', {
        source: source,
      });
    },
  },

  mounted() {
    const flask = new CodeFlask(this.$el, { 
      language: 'markdown',
      lineNumbers: true,
      defaultTheme: false,
    });

    flask.addLanguage('markdown', {
      'blockquote': {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      'code': [
        {
          // Prefixed by 4 spaces or 1 tab
          pattern: /^(?: {4}|\t).+/m,
          alias: 'keyword'
        },
        {
          // `code`
          // ``code``
          pattern: /``.+?``|`[^`\n]+`/,
          alias: 'keyword'
        }
      ],
      'title': [
        {
          // title 1
          // =======

          // title 2
          // -------
          pattern: /\w+.*(?:\r?\n|\r)(?:==+|--+)/,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#+.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      'hr': {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'list': {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          'variable': {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          'punctuation': /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      'bold': {
        // **strong**
        // __strong__

        // Allow only one line break
        pattern: /(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: true,
        inside: {
          'punctuation': /^\*\*|^__|\*\*$|__$/
        }
      },
      'italic': {
        // *em*
        // _em_

        // Allow only one line break
        pattern: /(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,
        lookbehind: true,
        inside: {
          'punctuation': /^[*_]|[*_]$/
        }
      },
      'url': {
        // [example](http://example.com "Optional title")
        // [example] [id]
        pattern: /!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,
        inside: {
          'variable': {
            pattern: /(!?\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          'string': {
            pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
          }
        }
      }
    });

    flask.onUpdate((code) => {
      this.markdown = code;
    });

    document.querySelector('.codeflask__textarea').focus();
  }
}
</script>

<style scoped>
  .editor {
    position: relative;
    resize: none;
    height: 100%;
  }
</style>
