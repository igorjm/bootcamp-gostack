import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg'

import { Header } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <Header>
      <img src={logoImg} alt="Github Explorer" />
      <Link to="/dashboard">
        Voltar
      </Link>
    </Header>
  );
}

export default Repository;
