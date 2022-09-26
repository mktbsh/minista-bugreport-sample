import { defineConfig } from "minista"

export default defineConfig({
  base: '/test/',
  assets: {
    //entry: "/src/assets/entries/script.ts",
  },
  search: {
    useJson: true,
  }
})
