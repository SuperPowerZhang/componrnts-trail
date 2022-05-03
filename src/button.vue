<template>
  <button
    :class="'y-button ' + (icon_position === 'right' ? 'icon-right' : '')"
  >
    <y-icon :icon="icon" v-if="icon" />
    <!-- <svg class="icon" aria-hidden="true" v-if="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg> -->
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
    icon_position: {
      type: String,
      default: "left",
      validator(val) {
        return val === "left" || val === "right";
      },
    },
  },
  created() {
    console.log(this.icon, this.icon_position);
  },
};
</script>

<style scoped lang="scss">
.y-button {
  // inline会导致这一行对不齐，奇怪，加了vertical可以
  display: inline-flex;
  vertical-align: middle;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border: 1px solid var(--button-border);
  border-radius: var(--border-radius);
  color: var(--button-border);
  background-color: var(--default--bg);
  .icon {
    margin-right: 0.5em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.5em;
    }
  }
}
.y-button:hover {
  border-color: var(--button-hover-border);
}
.y-button:active {
  background-color: var(--button-active-bg);
}
</style>
