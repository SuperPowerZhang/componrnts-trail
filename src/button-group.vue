<template>
  <div class="y-button-group">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$el.children);
    for (let ele of this.$el.children) {
      if (ele.nodeName.toLowerCase() !== "button") {
        console.warn(
          `button-group的子元素最好是button,实际是${ele.nodeName.toLowerCase()}`
        );
      }
    }
  },
};
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
  border-radius: 0;
  &:not(first-child) {
    margin-left: -1px;
  }
  &:hover {
    z-index: 1;
  }
}
</style>
