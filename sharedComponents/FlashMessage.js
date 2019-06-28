import React, {useState, useEffect} from 'react';
import {createPortal} from 'react-dom';
import styled, {ThemeProvider, keyframes} from 'styled-components';
import {useFlashMessageContext} from '../hooks/useFlashMessage/index';

// reutilized component to display messages
const FlashMessage = ({removeMessage, message, type}) => {
  const [visible, setVisible] = useState(message);
  const { removeMessage } = useFlashMessageContext();
 return (
      <Fade in={visible}>
        <Container>
            <Text>{message} {type}</Text>
           <Close onClick={() => {
             setVisible('');
             // after hiding component with animation
             // the component it is unmounted
             setTimeout(() => removeMessage && removeMessage(), 400);
             }}>X</Close>
        </Container>
      </Fade>
      )
};

export default React.memo(FlashMessage);

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    height: 150px;
    display: grid;
    grid-template-rows: 50px 50px 50px;
    grid-template-columns: 100px 200px 100px;
    justify-items: center;
    align-items: center;
    border: 1px solid white;
    background-color: red;
    color: white;
`;

const Text = styled.span`
    grid-column: 2;
    grid-row:2;
`;

const Close = styled.div`
    grid-column: 3;
    grid-row:1;
    cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
 
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Fade = styled.div`
  visibility: ${props => props.in ? 'visible' : 'hidden'};
  animation: ${props => props.in ? fadeIn : fadeOut} .400s linear;
  transition: visibility .400s linear;
`;