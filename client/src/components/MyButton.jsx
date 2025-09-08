import React from 'react'

const MyButton = ({btnTxt,width,height}) => {
  return (
    <button className='bg-[#23A26D] w-full rounded-md cursor-pointer'>
        {btnTxt}
    </button>
  )
}

export default MyButton