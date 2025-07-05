import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { IItem } from './types';
import { WrapperItems } from './styled';
import IDHelpers from '../../../../../../../core/helpers/IDHelper';

interface IProps {
  className?: string;
  isOpen?: boolean;
  isSimulator?: boolean;
  items: IItem[];
  onClose?: () => void;
}

const ItemContent = ({
  icon,
  src,
  text,
  isNew
}: Pick<IItem, 'icon' | 'src' | 'text' | 'isNew'>) => (
  <>
    {/* {icon && <CcIcon size={24} name={icon} />} */}
    {src && <img src={src} alt={text} />}
    <span>{text}</span>
    {isNew && <span>Nuevo</span>}
  </>
);

const SidebarMenu = ({
  className,
  isOpen,
  isSimulator,
  items,
  onClose
}: IProps) => {
  const location = useLocation();

  const onClick = () => {
    if (onClose) onClose();
  };

  const activeItem = (pathname: string) => {
    const classes: string[] = [];

    if (
      pathname === location.pathname ||
      location.pathname.indexOf(pathname) !== -1
    ) {
      classes.push('is-active');
    }

    return classes.join(' ');
  };

  return (
    <WrapperItems
      className={className}
      isOpen={isOpen}
      isSimulator={isSimulator}
    >
      {items.map((item) => (
        <div className={item.class} key={IDHelpers.generateID()}>
          {item.type === 'button' && (
            <button
              onClick={() => {
                item.handler();
                onClick();
              }}
              type="button"
            >
              <ItemContent
                icon={item.icon}
                isNew={item.isNew}
                src={item.src}
                text={item.text}
              />
            </button>
          )}
          {item.type === 'link' && (
            <a
              href={item.href}
              onClick={() => onClick()}
              target={item.target}
              style={{ textDecoration: 'none !important' }}
            >
              <ItemContent
                icon={item.icon}
                isNew={item.isNew}
                src={item.src}
                text={item.text}
              />
            </a>
          )}
          {item.type === 'router' && (
            <Link
              onClick={() => onClick()}
              to={{ pathname: item.pathname }}
              className={activeItem(item.pathname)}
            >
              <ItemContent
                icon={item.icon}
                isNew={item.isNew}
                src={item.src}
                text={item.text}
              />
            </Link>
          )}
        </div>
      ))}
    </WrapperItems>
  );
};

export default SidebarMenu;
