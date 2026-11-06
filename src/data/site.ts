export interface NavItem {
  label: string;
  href: string;
}

// Home-page anchors until the dedicated About / Studio / Media / Contact pages exist.
export const navLeft: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#vision' },
  { label: 'Our Studio', href: '/#studio' },
];

export const navRight: NavItem[] = [
  { label: 'Media', href: '/#media' },
  { label: 'Contact', href: '/#contact' },
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
