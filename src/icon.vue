<template>
  <svg
    :class="'icon ' + (icon === 'loading-fish' ? 'loading' : '')"
    aria-hidden="true"
    v-if="icon"
  >
    <use :xlink:href="`#i-${icon}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {},
  },
};
</script>

<style lang="scss">
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.loading {
  animation: spin 1s infinite linear;
}
</style>
