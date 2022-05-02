<template>
  <button class="y-button">
    <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use></svg
    ><slot />
  </button>
</template>

<script>
export default {
  props: ["icon"],
};
</script>

<style scoped lang="scss">
.y-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border: 1px solid #3e504d;
  border-radius: var(--border-radius);
  color: var(--button-border-color);
  background-color: var(--default--bg);
  .icon {
    margin-right: 0.5em;
  }
}
.y-button:hover {
  border-color: var(--button-hover-border);
}
.y-button:active {
  background-color: var(--button-active-bg);
}
</style>
