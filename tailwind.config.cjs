/** @type {import('tailwindcss').Config} */
module.exports = {
  // Важно: Tailwind v4 ищет классы в файлах по этому glob.
  // Если добавишь новые расширения/директории — обнови `content`.
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}'],
  theme: {
    // Центруем `container` (доп. утилита container также определена в global.css).
    container: {
      center: true,
    },
  },
  plugins: [],
};
