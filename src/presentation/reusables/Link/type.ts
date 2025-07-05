interface LinkProps {
  linkName: string;
  linkType: 'internal' | 'external' | 'void';
  url?: string;
  iconName?: string;
  tabIndex?: number;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  iconSpacing?: number;
}

export default LinkProps;
