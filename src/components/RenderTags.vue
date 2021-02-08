<template>
  <div id="container" class="infoCont">
    <a :href="tag.url">{{ tag.name }}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      infoKeyLocal: "",
    };
  },
  props: {
    tag: {},
    index: {},
  },
  methods: {},
};
</script>