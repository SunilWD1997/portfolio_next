import React from 'react'

const Heading = ({title}) => {
  return (
    <div className='flex items-center gap-3'>
        <h2 className='text-2xl font-medium'>{title}</h2> <div className=' w-[50px] h-[1px] border-[2px] border-orange-600 relative top-[5px] rounded'></div>
    </div>
  )
}

export default Heading