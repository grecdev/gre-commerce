import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

interface ITitle {
  title: string;
  subTitle?: string;
  description?: string;
}

const useStyles = makeStyles({
  title: {
    textTransform: 'capitalize',
    fontSize: '1.5rem'
  },
  subTitle: {
    fontSize: '1.2rem'
  },
  titleDescription: {
    fontStyle: 'italic'
  }
});

const Title: React.FC<ITitle> = (props: ITitle) => {
  const { title, subTitle, description } = props;

  const classes = useStyles();

  return (
    <div className='text-center mb-2'>
      <h3 className={classes.title}>{title}</h3>

      {subTitle && <h2 className={classes.subTitle}>{subTitle}</h2>}

      {description && <p className={classes.titleDescription}>{description}</p>}
    </div>
  );
};

export default Title;
