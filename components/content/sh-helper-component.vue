<template>
  <div>
    <div class="flex-col">
      <div class="mb-5 mx-auto">
        <img src="/images/oma2.png" class="m-0 max-w-full max-h-full object-contain" />
      </div>
      <div class="">
        <img v-if="!computedLogoSrc" src="/logo-light.png" class="m-0 max-w-full max-h-full object-contain" />
        <img v-if="computedLogoSrc" src="/logo-dark.png" class="m-0 max-w-full max-h-full object-contain" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const theme = useColorMode();

const computedLogoSrc = computed(() => {
    return theme.value === 'dark';
});
</script>