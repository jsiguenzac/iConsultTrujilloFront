export interface IItemDefault {
  icon?: string;
  isNew?: boolean;
  src?: string;
  text: string;
  class?: string;
}

export interface IItemButton {
  handler: () => void;
  type: 'button';
}

export interface IItemLink {
  href: string;
  target: '_blank' | '_self';
  type: 'link';
}

export interface IItemRouter {
  pathname: string;
  type: 'router';
}

export type IItem = IItemDefault & (IItemButton | IItemLink | IItemRouter);
