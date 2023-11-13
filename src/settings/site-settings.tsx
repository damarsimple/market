import { ILFlag } from '@components/icons/language/ILFlag';
import { SAFlag } from '@components/icons/language/SAFlag';
import { CNFlag } from '@components/icons/language/CNFlag';
import { USFlag } from '@components/icons/language/USFlag';
import { DEFlag } from '@components/icons/language/DEFlag';
import { ESFlag } from '@components/icons/language/ESFlag';
import siteLogo from 'public/assets/images/logo.png';

export const siteSettings = {
  name: 'UNY Store',
  description:
    'UNY Store adalah toko kelontong dan swalayan yang menyediakan berbagai macam kebutuhan sehari-hari.',
  author: {
    name: 'DKSIU',
    websiteUrl: 'https://dksiu.uny.ac.id',
    address: '',
  },
  logo: {
    url: siteLogo,
    alt: 'UNY Store',
    href: '/',
    width: 128,
    height: 30,
  },
  defaultLanguage: 'id',
  currencyCode: 'IDR',
  site_header: {
    menu: [
      // {
      //   id: 1,
      //   path: '/',
      //   label: 'menu-demos',
      //   subMenu: [
      //     {
      //       id: 1,
      //       path: '/',
      //       label: 'menu-modern',
      //     },
      //     {
      //       id: 2,
      //       path: '/classic',
      //       label: 'menu-classic',
      //     },
      //     {
      //       id: 3,
      //       path: '/vintage',
      //       label: 'menu-vintage',
      //     },
      //     {
      //       id: 4,
      //       path: '/standard',
      //       label: 'menu-standard',
      //     },
      //     {
      //       id: 5,
      //       path: '/minimal',
      //       label: 'menu-minimal',
      //     },
      //     {
      //       id: 6,
      //       path: '/trendy',
      //       label: 'menu-trendy',
      //     },
      //     {
      //       id: 7,
      //       path: '/elegant',
      //       label: 'menu-elegant',
      //     },
      //     {
      //       id: 8,
      //       path: '/refined',
      //       label: 'menu-refined',
      //     },
      //     {
      //       id: 9,
      //       path: '/antique',
      //       label: 'menu-antique',
      //     },
      //     {
      //       id: 10,
      //       path: '/ancient',
      //       label: 'menu-ancient',
      //     },
      //   ],
      // },
      {
        id: 2,
        path: '/search',
        label: 'menu-categories',
        subMenu: [
          {
            id: 1,
            path: '/search?category=fresh-vegetables',
            label: 'menu-fresh-vegetables',
          },
          {
            id: 2,
            path: '/search?category=diet-nutrition',
            label: 'menu-diet-nutrition',
          },
          {
            id: 3,
            path: '/search?category=healty-foods',
            label: 'menu-healthy-foods',
          },
          {
            id: 4,
            path: '/search?category=grocery-items',
            label: 'menu-grocery-items',
          },
          {
            id: 5,
            path: '/search?category=beaf-steak',
            label: 'menu-beaf-steak',
          },
        ],
      },
      {
        id: 4,
        path: '/search/',
        label: 'menu-search',
      },
      {
        id: 5,
        path: '/shops/',
        label: 'menu-shops',
      },
      {
        id: 6,
        path: '/',
        label: 'menu-pages',
        subMenu: [
          {
            id: 1,
            path: '/',
            label: 'menu-users',
            subMenu: [
              {
                id: 1,
                path: '/my-account/account-settings',
                label: 'menu-my-account',
              },
              {
                id: 2,
                path: '/signin',
                label: 'menu-sign-in',
              },
              {
                id: 3,
                path: '/signup',
                label: 'menu-sign-up',
              },
            ],
          },
          {
            id: 2,
            path: '/faq',
            label: 'menu-faq',
          },
          {
            id: 3,
            path: '/about-us',
            label: 'menu-about-us',
          },
          {
            id: 4,
            path: '/privacy',
            label: 'menu-privacy-policy',
          },
          {
            id: 5,
            path: '/terms',
            label: 'menu-terms-condition',
          },
          {
            id: 6,
            path: '/contact-us',
            label: 'menu-contact-us',
          },
          {
            id: 7,
            path: '/checkout',
            label: 'menu-checkout',
          },
          {
            id: 8,
            path: '/404',
            label: 'menu-404',
          },
        ],
      },
    ],
    languageMenu: [
      {
        id: 'ar',
        name: 'عربى - AR',
        value: 'ar',
        icon: <SAFlag />,
      },
      {
        id: 'zh',
        name: '中国人 - ZH',
        value: 'zh',
        icon: <CNFlag />,
      },
      {
        id: 'en',
        name: 'Indonesia',
        value: 'en',
        icon: <USFlag />,
      },
      {
        id: 'de',
        name: 'Deutsch - DE',
        value: 'de',
        icon: <DEFlag />,
      },
      {
        id: 'he',
        name: 'rעברית - HE',
        value: 'he',
        icon: <ILFlag />,
      },
      {
        id: 'es',
        name: 'Español - ES',
        value: 'es',
        icon: <ESFlag />,
      },
    ],
    pagesMenu: [
      {
        id: 1,
        path: '/search',
        label: 'menu-best-deals',
      },
      {
        id: 2,
        path: '/about-us',
        label: 'menu-about-us',
      },
      {
        id: 3,
        path: '/contact-us',
        label: 'menu-contact-us',
      },
      {
        id: 4,
        path: '/faq',
        label: 'menu-faq',
      },
    ],
  },
};
