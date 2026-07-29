export interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

export interface FooterNavGroup {
  label: string;
  links: {
    label: string;
    href: string;
  }[];
}
