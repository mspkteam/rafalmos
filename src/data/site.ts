export interface NavItem {
  label: string;
  href: string;
}

export const pages = {
  home: '/',
  about: '/about',
  studio: '/studio',
  media: '/media',
  contact: '/contact',
};

export const navLeft: NavItem[] = [
  { label: 'Home', href: pages.home },
  { label: 'About Us', href: pages.about },
  { label: 'Our Studio', href: pages.studio },
];

export const navRight: NavItem[] = [
  { label: 'Media', href: pages.media },
  { label: 'Contact', href: pages.contact },
];

export const site = {
  name: 'Arte Algo',
  description:
    'Arte Algo is a contemporary circus company from Granada, Spain, founded by Rafa and Paco Olmos. Original productions, collaborations and new ways of bringing circus to every audience.',
  email: 'info@artealgo.com',
  location: 'Granada, Spain',
  // TODO(client): confirm the Instagram profile URL.
  instagram: 'https://www.instagram.com/',
};

/** Pre-filled email link for an enquiry type. */
export const mailto = (subject: string) => `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
