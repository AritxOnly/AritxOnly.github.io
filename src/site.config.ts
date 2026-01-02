import type { SiteConfig } from '~/types'

const config: SiteConfig = {
  // Absolute URL to the root of your published site, used for generating links and sitemaps.
  site: 'https://aritxonly.github.io',
  // The name of your site, used in the title and for SEO.
  title: '音唯的个人小站',
  // The description of your site, used for SEO and RSS feed.
  description:
    '音唯的个人小站：记录开发、音乐创作与学习。', 
  // The author of the site, used in the footer, SEO, and RSS feed.
  author: 'Aritx音唯',
  // Keywords for SEO, used in the meta tags.
  tags: ['AritxOnly', 'Aritx音唯', '个人博客', '个人小站', 'NJUCS', '南京大学'],
  // Path to the image used for generating social media previews.
  // Needs to be a square JPEG file due to limitations of the social card generator.
  // Try https://squoosh.app/ to easily convert images to JPEG.
  socialCardAvatarImage: './src/content/avatar.jpg',
  // Font imported from @fontsource or elsewhere, used for the entire site.
  // To change this see src/styles/global.css and import a different font.
  font: 'JetBrains Mono Variable',
  // For pagination, the number of posts to display per page.
  // The homepage will display half this number in the "Latest Posts" section.
  pageSize: 6,
  // Whether Astro should resolve trailing slashes in URLs or not.
  // This value is used in the astro.config.mjs file and in the "Search" component to make sure pagefind links match this setting.
  // It is not recommended to change this, since most links existing in the site currently do not have trailing slashes.
  trailingSlashes: false,
  // The navigation links to display in the header.
  navLinks: [
    {
      name: '主页',
      url: '/',
    },
    {
      name: '关于我',
      url: '/about',
    },
    {
      name: '音乐作品',
      url: '/music'
    },
    {
      name: '应用开发',
      url: '/app'
    },
    {
      name: '博客',
      url: '/posts',
    },
    {
      name: '友链',
      url: '/friends'
    },
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/AritxOnly',
    //   external: true,
    // },
  ],
  // The theming configuration for the site.
  themes: {
    // The theming mode. One of "single" | "select" | "light-dark-auto".
    mode: 'light-dark-auto',
    // The default theme identifier, used when themeMode is "select" or "light-dark-auto".
    // Make sure this is one of the themes listed in `themes` or "auto" for "light-dark-auto" mode.
    default: 'auto',
    // Shiki themes to bundle with the site.
    // https://expressive-code.com/guides/themes/#using-bundled-themes
    // These will be used to theme the entire site along with syntax highlighting.
    // To use light-dark-auto mode, only include a light and a dark theme in that order.
    include: [
      'github-light',
      'github-dark',
    ],
    // include: [
    //   'andromeeda',
    //   'aurora-x',
    //   'ayu-dark',
    //   'catppuccin-frappe',
    //   'catppuccin-latte',
    //   'catppuccin-macchiato',
    //   'catppuccin-mocha',
    //   'dark-plus',
    //   'dracula',
    //   'dracula-soft',
    //   'everforest-dark',
    //   'everforest-light',
    //   'github-dark',
    //   'github-dark-default',
    //   'github-dark-dimmed',
    //   'github-dark-high-contrast',
    //   'github-light',
    //   'github-light-default',
    //   'github-light-high-contrast',
    //   'gruvbox-dark-hard',
    //   'gruvbox-dark-medium',
    //   'gruvbox-dark-soft',
    //   'gruvbox-light-hard',
    //   'gruvbox-light-medium',
    //   'gruvbox-light-soft',
    //   'houston',
    //   'kanagawa-dragon',
    //   'kanagawa-lotus',
    //   'kanagawa-wave',
    //   'laserwave',
    //   'light-plus',
    //   'material-theme',
    //   'material-theme-darker',
    //   'material-theme-lighter',
    //   'material-theme-ocean',
    //   'material-theme-palenight',
    //   'min-dark',
    //   'min-light',
    //   'monokai',
    //   'night-owl',
    //   'nord',
    //   'one-dark-pro',
    //   'one-light',
    //   'plastic',
    //   'poimandres',
    //   'red',
    //   'rose-pine',
    //   'rose-pine-dawn',
    //   'rose-pine-moon',
    //   'slack-dark',
    //   'slack-ochin',
    //   'snazzy-light',
    //   'solarized-dark',
    //   'solarized-light',
    //   'synthwave-84',
    //   'tokyo-night',
    //   'vesper',
    //   'vitesse-black',
    //   'vitesse-dark',
    //   'vitesse-light',
    // ],
    // Optional overrides for specific themes to customize colors.
    // Their values can be either a literal color (hex, rgb, hsl) or another theme key.
    // See themeKeys list in src/types.ts for available keys to override and reference.
    overrides: {
      // Accent color change
      'github-light': {
        accent: '#4fa1c9',
        heading1: '#4fa1c9',
        heading2: '#4fa1c9',
        heading3: '#4fa1c9',
        heading4: '#4fa1c9',
        heading5: '#4fa1c9',
        heading6: '#4fa1c9',
        list: '#4fa1c9',
        separator: '#4fa1c9',
        link: 'list',
      },
      'github-dark': {
        accent: '#6fb9de',
        heading1: '#6fb9de',
        heading2: '#6fb9de',
        heading3: '#6fb9de',
        heading4: '#6fb9de',
        heading5: '#6fb9de',
        heading6: '#6fb9de',
        list: '#6fb9de',
        separator: '#6fb9de',
        link: 'list',
      },
    },
  },
  // Social links to display in the footer.
  socialLinks: {
    github: 'https://github.com/AritxOnly',
    // mastodon: 'https://github.com/stelcodes/multiterm-astro',
    email: 'aritxonly@outlook.com',
    // linkedin: 'https://github.com/stelcodes/multiterm-astro',
    // bluesky: 'https://github.com/stelcodes/multiterm-astro',
    // twitter: 'https://github.com/stelcodes/multiterm-astro',
    bilibili: 'https://space.bilibili.com/283375530',
    netease: 'https://music.163.com/#/artist?id=34279798',
    soundcloud: 'https://soundcloud.com/aritx-zhou',
    coolapk: 'http://www.coolapk.com/u/1957498',
    rss: true, // Set to true to include an RSS feed link in the footer
  },
  // Configuration for Giscus comments.
  // To set up Giscus, follow the instructions at https://giscus.app/
  // You'll need a GitHub repository with discussions enabled and the Giscus app installed.
  // Take the values from the generated script tag at https://giscus.app and fill them in here.
  // IMPORTANT: Update giscus.json in the root of the project with your own website URL
  // If you don't want to use Giscus, set this to undefined.
  giscus: undefined,
  // TODO: giscus
  // giscus: {
  //   repo: 'stelcodes/multiterm-astro',
  //   repoId: 'R_kgDOPNnBig',
  //   category: 'Giscus',
  //   categoryId: 'DIC_kwDOPNnBis4CteOc',
  //   reactionsEnabled: true, // Enable reactions on post itself
  // },
  // These are characters available for the character chat feature.
  // To add your own character, add an image file to the top-level `/public` directory
  // Make sure to compress the image to a web-friendly size (<100kb)
  // Try using the excellent https://squoosh.app web app for creating small webp files
  characters: {
    owl: '/owl.webp',
    unicorn: '/unicorn.webp',
    duck: '/duck.webp',
  },
}

export default config
