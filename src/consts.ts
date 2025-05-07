import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: "Renaissance Man",
  description: 'A blog about startups, technology, and everything in between.',
  href: 'https://kajla.dev',
  author: 'karan',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/kkajla12',
    label: 'GitHub',
  },
  {
    href: 'https://x.com/KaranKajla',
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/kkajla/',
    label: 'LinkedIn',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
