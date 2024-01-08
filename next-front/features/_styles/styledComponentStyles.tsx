'use client';

import styled from 'styled-components';
import { buttonStyleProps, modalStyleProps } from '../_types/type';

export const HamburgerButtonStyle = styled.div`
  width: 35px;
  height: 5px;
  background-color: black;
  margin: 6px 0;
`;

export const Button = styled.button<buttonStyleProps>`
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.color || '#333'};
  border-radius: 10px;
  color: #ffffff;
  font-size: 15px;
  text-shadow: 0px 1px 0px #2f6627;
  font-weight: bold;
  opacity: ${(props) => props.opacity || '1'};
  position: ${(props) => (props.disabled ? 'relative' : 'static')};
  z-index: ${(props) => (props.disabled ? '-1' : '0')};
`;

export const ModalStyle = styled.div<modalStyleProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.width || '300px'};
  height: ${(props) => props.height || '200px'};
  z-index: 9999;

  position: absolute;

  background-color: ${(props) => props.bgColor || 'white'};
  border: 1px solid black;
  border-radius: 8px;
`;
