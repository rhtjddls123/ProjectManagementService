'use client';

import { useCallback, useReducer } from 'react';
import { ModalStyle } from '../_styles/styledComponentStyles';
import { modalStyleProps } from '../_types/type';
import { FormButton } from './Button';
import { Checkbox } from './CheckBox';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Modal = (props: Props & modalStyleProps) => {
  return (
    <>
      <div className={props.className}>
        <ModalStyle
          visible={props.visible}
          bgColor={props.bgColor}
          width={props.width}
          height={props.height}
        >
          {props.children}
        </ModalStyle>
      </div>
    </>
  );
};

export const IssueModal = (props: Props & modalStyleProps) => {
  const [visible, visibleToggle] = useReducer(
    useCallback((pre) => !pre, []),
    props.visible || false
  );
  const [checked, checkToggle] = useReducer(
    useCallback((pre) => !pre, []),
    false
  );

  return (
    <>
      <div className={`visibility: ${visible ? 'visible' : 'hidden'}`}>
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-10'>
          <Modal
            bgColor={props.bgColor}
            width={props.width}
            height={props.height}
          >
            <div>
              {props.children}
              <div className='mt-auto mb-[2%]'>
                <Checkbox checked={checked} onChange={checkToggle}>
                  {`\t내용을 모두 확인했습니다.`}
                </Checkbox>
                <br />
                <FormButton
                  color='#03cf5d'
                  disabled={!checked}
                  onClick={visibleToggle}
                >
                  확인
                </FormButton>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};
