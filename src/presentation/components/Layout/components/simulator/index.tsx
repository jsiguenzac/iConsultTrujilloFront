import React from 'react';
import styled from 'styled-components';

const SimulatorMask = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1001;
  position: fixed;
  pointer-events: none;
  @media (min-width: 992px) {
    border: 4px solid #1a055d;
    z-index: 1001;
  }
`;

const Container = styled.div`
  background-color: #1a055d;
  bottom: 0px;
  width: 100%;
  height: 64px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: auto;
`;

const IntroText = styled.span`
  color: #fff;
  margin-left: 32px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const EndButton = styled.button`
  background: #ffffff;
  border: 1px solid #5b36f2;
  border-radius: 4px;
  padding: 10px 16px;
  color: #5b36f2;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-right: 32px;

  &:hover {
    background: #e2dffd;
  }
  &:focus {
    background: #c6c0fc;
  }
  &:active: {
    background: #c6c0fc;
  }
`;

interface Props {
  handleInactiveSimulate: () => void;
}

const Simulator = (props: Props) => {
  const { handleInactiveSimulate } = props;

  const simulator = localStorage.getItem('persist:simulator');
  const role = localStorage.getItem('role');
  const firstNameUserSimulated = simulator
    ? JSON.parse(simulator).firstNameUserSimulated
    : null;
  return (
    <SimulatorMask data-testid="cmp-simulator">
      <Container id="cmp-simulator-bottom">
        {firstNameUserSimulated && (
          <IntroText>
            Ingresaste a la plataforma como:{' '}
            <b>{firstNameUserSimulated.replaceAll('"', '')}</b>
            <b> {role === 'visor' ? ' - Rol asignado: Visor' : null}</b>
          </IntroText>
        )}
        <EndButton
          type="button"
          onClick={handleInactiveSimulate}
          data-testid="cmp-end-simulator"
        >
          Finalizar simulación
        </EndButton>
      </Container>
    </SimulatorMask>
  );
};

export default Simulator;
