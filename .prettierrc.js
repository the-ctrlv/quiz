/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '^react(.*)',
    'next(.*)',
    '<THIRD_PARTY_MODULES>',
    '@/components/(.*)',
    '@/types/(.*)',
    '@/hooks/(.*)',
    '@/utils/(.*)',
    '@/shared/(.*)',
    '^@/(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
}

module.exports = config
