import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mewstヘルプ',
  tagline: 'Mewstの使い方や更新情報などを掲載しています',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://help.mewst.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mewstcom', // Usually your GitHub org/user name.
  projectName: 'mewst-help', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mewstcom/mewst-help/tree/main',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/mewstcom/mewst-help/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/og-image.png',
    navbar: {
      title: 'ヘルプ',
      logo: {
        alt: 'Mewst',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'ドキュメント',
          position: 'left',
          to: '/docs'
        },
        {
          label: 'ブログ',
          position: 'left',
          to: '/blog'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {
              label: '利用規約',
              to: '/docs/terms',
            },
            {
              label: 'プライバシーポリシー',
              to: '/docs/privacy',
            },
          ],
        },
        {
          title: 'コミュニティ',
          items: [
            {
              label: 'Mewst',
              href: 'https://mewst.com/@mewst',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/tNwVpJ4Jfk',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'ブログ',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mewstcom/mewst',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mewst`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
