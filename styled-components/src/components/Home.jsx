import React from 'react';
import ChangeThemeButton from './ChangeThemeButton';
import { TiTrash } from 'react-icons/ti';
import { BaseButton } from '../styledComponents';
import { StyledButton, PrimaryButton } from '../styledComponents';

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <BaseButton type="submit">Base Button</BaseButton>
      <StyledButton as="a" href="#">
        Styled Button
      </StyledButton>
      <PrimaryButton variant="outline">Deneme</PrimaryButton>
      <PrimaryButton>Primary</PrimaryButton>

      <div className="col-sm-5">
        <TiTrash />
        <ChangeThemeButton />
      </div>
    </>
  );
};

export default Home;
