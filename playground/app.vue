<script setup lang="ts">
// this import is optional because the util is autoimported by nuxt
// The layer name (hello-world) is defined in the layer/nuxt.config.ts file
import { helloFromLayer } from "#layers/hello-world/shared/utils";
helloFromLayer();
</script>
<template>
  <div>
    <div class="p-4 text-center">
      <h1 class="mb-4 text-2xl font-bold">Hello World Layer Playground</h1>
      <p class="text-gray-600">
        This playground demonstrates the hello-world layer functionality.
      </p>
    </div>
  </div>
</template>
