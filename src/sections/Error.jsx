import React from 'react'

const Error = () => {
  return (
    <>
        
        {/* Page Not Found, Please Write Valid URL... */}
        
        <div className="text-center mt-8">
      <div className="bg-yellow-200 rounded-md p-4">
        <h1 className="text-3xl font-bold mb-2">
            Page Not Found
        </h1>
        <div className="w-20 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-700">Please Write Valid URL...</p>
      </div>
    </div>
        <br />
    </>
  )
}

export default Error
