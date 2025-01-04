import React from 'react'

export default function Title(props) {
  return (
    <div>
        <h1 style={{backgroundColor : 'greenyellow',
                    borderBottom : '5px solid red', 
                    textAlign : 'center'}}>
            {/* 16. 用props傳入參數 */}
            {props.mainTitle}
        </h1>        
    </div>
  )
}
