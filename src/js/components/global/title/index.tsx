import React from 'react';

import './style.scss';

interface ITitle {
  title: string;
  subtitle?: string;
  description?: string;
}

const Title: React.FC<ITitle> = (props: ITitle) => {
  const { title, subtitle, description } = props;

  return (
    <div className='title-container text-center mb-2'>
      <h3 className='title'>{title}</h3>

      {subtitle && <h2 className='sub-title'>{subtitle}</h2>}

      {description && <p className='title-description'>{description}</p>}
    </div>
  );
};

export default Title;
