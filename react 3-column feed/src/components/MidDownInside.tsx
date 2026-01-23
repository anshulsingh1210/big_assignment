import React from 'react'

const MidDownInside = ({ height, backgroundColor }: { height: number, backgroundColor: string }) => {
    console.log(height)
  return (
    <div style={{ height: `${height}px`, backgroundColor: backgroundColor }} className={`mb-5 rounded-xl `}>MidDownInside</div>
  )
}

export default MidDownInside