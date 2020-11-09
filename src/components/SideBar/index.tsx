import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';
import { 
  Container,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List 
            title='Talvez você curta'
            elements={[
              <FollowSuggestion 
                name='Luiz Batanero'
                nickname='@luizbatanero'
              />,
              <FollowSuggestion 
                name='Luke Morales'
                nickname='@lukemorales'
              />,
              <FollowSuggestion 
                name='Camila Magalhães'
                nickname='@camilamagalhaes'
              /> 
            ]}
          />

          <List 
            title='Talvez você curta'
            elements={[
              <News 
                title='Assuntos do momento no Brasil'
                trends='Bootcamp da Rocketseat'
              />, 
              <News 
                title='Assuntos do momento no Brasil'
                trends='Vitória de Biden'
              />, 
              <News 
                title='Assuntos do momento no Brasil'
                trends='Dólar cai para R$ 5.46'
              />, 
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar;