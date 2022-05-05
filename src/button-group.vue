<template>
  <div class="y-button-group">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.y-button-group {
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  vertical-align: middle;
  :first-child {
    border-top-left-radius: var(--border-radius);
    border-bottom-left-radius: var(--border-radius);
  }
  :last-child {
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
  }
}
.y-button {
  margin-left: -1px;
  border-radius: 0;
  &:hover {
    z-index: 1;
  }
}
</style>
