import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  EditButton, 
  LocationIcon, 
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Andres doSantos</h1>
        <h2>@andresdoSantos</h2>
        <p>
          Developer at <a href="https://andresdosantos.vercel.app">andres.com</a>
        </p>
        <ul>
          <li>
            <LocationIcon />  
            Três Rios, RJ, Brasil
          </li>
          <li>
            <CakeIcon />  
            Nascido(a) em 16 de Janeiro de 2001
          </li> 
        </ul>

        <Followage>
          <span>
            Seguindo <strong>15</strong>
          </span>
          <span>
            <strong>0 </strong> Seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;