import React from 'react';
import PropTypes from 'prop-types';
import './headline.scss';

export default function Headline({
  headline,
  semanticElement,
  alignmentMobile,
  alignmentTablet,
  alignmentDesktop,
  className,
}) {
  const TagName = semanticElement ? semanticElement : 'div';

  return (
    <div
      className={[
        'headline',
        `headline--${TagName}`,
        alignmentDesktop && `headline--align-desktop-${alignmentDesktop}`,
        alignmentTablet && `headline--align-tablet-${alignmentTablet}`,
        alignmentMobile && `headline--align-mobile-${alignmentMobile}`,
        className && className,
      ].join(' ')}
    >
      <TagName>{headline}</TagName>
    </div>
  );
}
Headline.propTypes = {
  headline: PropTypes.string,
  semanticElement: PropTypes.string,
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  alignmentMobile: PropTypes.oneOf(['left', 'center', 'right']),
  alignmentTablet: PropTypes.oneOf(['left', 'center', 'right']),
  alignmentDesktop: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
  isFullwidthMobile: PropTypes.bool,
};
