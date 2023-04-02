import { useRef, useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const TextInput = styled(Input)`
  width: 100%;
`;

const ImageInput = styled(Input).attrs({ type: 'file', multiple: true, accept:'image/*' })`
  display: none;
`;
// 이 오류는 styled-components를 함수나 렌더링 메서드 안에서 호출하면 발생합니다. styled-components는 렌더링 시마다 새로운 컴포넌트를 만들기 때문에, 컴포넌트의 렌더링 메서드 안에서 호출하면 불필요한 오버헤드를 유발할 수 있습니다. 이를 방지하기 위해 styled-components는 컴포넌트가 렌더링되기 전에 미리 컴파일된 CSS를 생성하므로, 함수나 렌더링 메서드 안에서 호출하지 않도록 주의해야 합니다.

export const ImageInputs = (labelfor) => {

  
 return (
   <>
     <ImageInput id={labelfor} />
     <button
       type="button"
       className="photoSelector"
     >
       사진 첨부하기
     </button>
   </>
 ); 
}

export const TitleInput = styled(TextInput)``;

export const DescInput = styled(TextInput).attrs({ as: 'textarea', rows: 6})`
  resize: none;
`;

