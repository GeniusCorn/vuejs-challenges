import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTagify,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTagify(), presetIcons()],
  transformers: [transformerDirectives()],
  shortcuts: [
    [
      'icon-btn',
      'inline-block cursor-pointer select-none text-black transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
    ],
  ],
})
