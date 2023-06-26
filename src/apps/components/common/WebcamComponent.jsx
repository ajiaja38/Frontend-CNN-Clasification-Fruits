import React, { useState } from 'react'
import Webcam from 'react-webcam'

const WebcamComponent = () => {
  const [isLoading, setIsLoading] = useState(true)

  const videoConstraints = {
    width: 480,
    height: 320,
    facingMode: 'environtment'
  }

  const handleIsLoading = () => setIsLoading(false)

  return (
    <div
      className='
        flex
        flex-col
        w-full
        justify-center
        items-center
      '
    >
      <h1
        className='
          text-xl
          font-semibold
          inline-block
          mb-2
        '
      >
        Perlihatkan Buah dalam frame.
      </h1>
      <div
        className='
          p-2
          border-black
          border-2
          border-dashed
          shadow-md
          flex
          flex-col
          justify-center
          items-center
        '
      >
        {
          isLoading && (<h1 className='font-bold'>Loading...</h1>)
        }
        <Webcam
          audio={false}
          videoConstraints={videoConstraints}
          mirrored={true}
          onLoadedData={handleIsLoading}
        />
      </div>
    </div>
  )
}

export default WebcamComponent
