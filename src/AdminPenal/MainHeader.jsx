import React from 'react'
import { FaBars } from 'react-icons/fa'

const MainHeader = () => {
  return (
    <div className='bg-white flex h-12 mb-4 justify-between'>
        <div>Brand</div>
        <div>
            <FaBars className=' cursor-pointer'/> 
        </div>
    </div>
  )
}

export default MainHeader