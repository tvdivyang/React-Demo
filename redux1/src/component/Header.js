import React from 'react'
import "../App.css"
import { useSelector } from 'react-redux'

function Header() {
    const result = useSelector((state)=>state.cartData)

  return (
    <>
     <div className=''>
        <span className='span-item'>{result.length}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7j0SBzjy4-lmyhs3qFH8mMRQeYFvJC2w1-uV6C-QtW32aPtZ6Fp2lqeUUTRw9u74h_w&usqp=CAU" className='img-left' alt="" />
        </div> 
    </>
  )
}

export default Header
