import React from 'react';

import { Container } from './styles';

interface Props {
  title: string;
  trends: string;
}

const News: React.FC<Props> = ({
  title,
  trends,
}) => {
  return (
    <Container>
      <span>{title}</span>
      <strong>{trends}</strong>
    </Container>
  )
}

export default News;