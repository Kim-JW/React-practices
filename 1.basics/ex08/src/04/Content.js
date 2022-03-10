import React from 'react'

function content(){
  return (
    //return(<p>JSX tutorials - 함수 컴포넌트 만들기</p>);

    React.createElement('p', null, 'Pure React(React API)로 컴포넌트 작성하기')
  )
}

export default content;