import React from 'react';
import { CustomAnchor, CustomLink } from './style';
import LinkProps from './type';
// import { Icon } from '@/presentation/components';

const Link = ({
  linkType,
  url = '',
  linkName,
  iconName,
  tabIndex = 0,
  onClick,
  iconSpacing = 0
}: LinkProps & { iconSpacing?: number }) => {
  if (linkType === 'external')
    return (
      <CustomAnchor href={url}>
        {linkName}
        {iconName && (
          <span style={{ marginLeft: iconSpacing }}>
            {/* <Icon name={iconName} size={16} /> */}
          </span>
        )}
      </CustomAnchor>
    );

  if (linkType === 'internal')
    return (
      <CustomLink to={url} tabIndex={tabIndex} onClick={onClick}>
        {linkName}
      </CustomLink>
    );

  if (linkType === 'void')
    return (
      <CustomAnchor onClick={onClick} href="">
        {linkName}
      </CustomAnchor>
    );

  return null;
};

export default Link;
