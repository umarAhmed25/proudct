import React from 'react'

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center w-full h-screen fixed top-0 left-0 bg-white z-50">
      <div className="flex justify-center items-center space-x-1 text-sm ">
        Loading
      </div>
    </div>
  )
}
