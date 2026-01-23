import React from 'react'
import MidDownInside from './MidDownInside'

const Left = () => {
  return (
    <div className='border-1 border-[#f5f5f5] flex-1'>
        <div className='m-3'>
            <MidDownInside height={35} backgroundColor={"rgb(229,229,229)"} />
            <MidDownInside height={35} backgroundColor={"rgb(245,245,245)"} />
            <MidDownInside height={35} backgroundColor={"rgb(245,245,245)"} />
            <MidDownInside height={35} backgroundColor={"rgb(245,245,245)"} />
            <MidDownInside height={35} backgroundColor={"rgb(245,245,245)"} />
        </div>
    </div>
  )
}

export default Left