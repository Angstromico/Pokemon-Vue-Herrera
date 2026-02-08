<script setup lang="ts">
import { RouterView } from 'vue-router'

import NavBar from '@/shared/components/NavBar.vue'
import { routerLinks } from '@/router/list-routes'
</script>

<template>
  <header>
    <NavBar title="PokémonApp" :links="routerLinks" />
  </header>
  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <!-- <Suspense :timeout="0"> -->
      <component :is="Component" />

      <!-- <template #fallback>
          <div class="fallback">
            <p>Loading...</p>
          </div>
        </template>
      </Suspense> -->
    </template>
  </RouterView>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.fallback p {
  font-size: 2rem;
  font-weight: bold;
}
</style>
