import React from 'react'
import MidDownInside from './MidDownInside'

const MidDown = () => {
  return (
    <div className='m-5'>
        <MidDownInside height={120} backgroundColor={"rgb(245,245,245)"} />
        <MidDownInside height={150} backgroundColor={"rgb(245,245,245)"} />
        <MidDownInside height={120} backgroundColor={"rgb(245,245,245)"} />
    </div>
  )
}

export default MidDown