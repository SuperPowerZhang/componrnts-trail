<template>
  <button class="y-button">按钮</button>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.y-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border: 1px solid #3e504d;
  border-radius: var(--border-radius);
  color: var(--button-border-color);
  background-color: var(--default--bg);
}
.y-button:hover {
  border-color: var(--button-hover-border);
}
.y-button:active {
  background-color: var(--button-active-bg);
}
</style>
