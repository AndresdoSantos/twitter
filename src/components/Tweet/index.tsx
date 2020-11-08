import React from 'react';

import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
          </Header>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;