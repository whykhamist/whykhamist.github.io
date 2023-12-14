<template>
  <div class="font-mono text-sm">
    <slot :html="highlightedCode">
      <pre><code v-html="highlightedCode"></code></pre>
    </slot>
  </div>
</template>

<script setup>
import { computed, ref, useSlots } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

const props = defineProps({
  code: {
    type: String,
    default: "",
  },
  format: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    default: null,
    validator: (val) => ["javascript", "json", "xml", "css"].indexOf(val) > -1,
  },
});

const highlightedCode = computed(() =>
  props.format ? formatCode(props.code) : props.code
);

const formatCode = (code) => {
  if (props.type !== null) {
    return hljs.highlight(code, {
      language: props.type,
    }).value;
  }
  return hljs.highlightAuto(code).value;
};
</script>
