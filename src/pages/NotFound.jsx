import React from 'react'

function NotFound() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <img src="/images/notfound.jpeg" className="absolute h-full w-full object-cover" />
      <div className="inset-0 bg-black opacity-25 absolute">
      </div>
    </div>

  )
}

export default NotFound
