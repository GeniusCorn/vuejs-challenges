import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(),
  extendRoutes: routes => setupLayouts(routes),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition !== null)
      return savedPosition

    return { left: 0, top: 0 }
  },
})

export default router
