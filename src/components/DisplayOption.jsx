import React, {useState} from 'react'

const DisplayOption = () => {
  const [components, setComponents] = useState("1")

  const handlerClick = (event) => {
  }

  return (
    <div className=' mt-3 flex gap-8'>
      <button className='btn' onClick={handlerClick}>fila</button>
      <button className='btn'>colum</button>
    </div>
  )
}

export default DisplayOption
