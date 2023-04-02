import React from 'react'
import FormFirst from './components/FormFirst/FormFirst'
import FormSecend1 from './components/FormSecend/FormSecend1'
import FormSecend2 from './components/FormSecend/FormSecend2'
import FormThird1 from './components/FormThird/FormThird1'
import FormThird2 from './components/FormThird/FormThird2'

function App() {
  return (
    <div>
      <div>FormFirst - 아토믹디자인으로 Form Molecule 생성하기</div>
      <br/>
      <br/>
      <FormFirst/>
      <hr/>
      <div>FormSecend - Form Molecule 생성하기 재사용하기</div>
      <br/>
      <br/>
      <FormSecend1/>
      <br/>
      <br/>
      <br/>
      <br/>
      <FormSecend2/>
      <hr/>
      <div>FormThird - Form Molecule 생성하기 리팩토링하기</div>
      <br/>
      <br/>
      <FormThird1/>
      <br/>
      <br/>
      <br/>
      <br/>
      <FormThird2/>

    </div>
  )
}

export default App