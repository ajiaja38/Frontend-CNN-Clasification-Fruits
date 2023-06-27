import React, { useState, useRef, useCallback } from 'react'
import Webcam from 'react-webcam'

const WebcamComponent = () => {
  const webcamRef = useRef(null)

  const [isLoading, setIsLoading] = useState(true)
  const [imageCapture, setImageCapture] = useState(null)

  const videoConstraints = {
    width: 480,
    height: 320,
    facingMode: 'environtment'
  }

  const handleIsLoading = () => setIsLoading(false)

  const getCapture = useCallback(() => {
    const imageCaptureResult = webcamRef.current.getScreenshot()
    setImageCapture(imageCaptureResult)
  }, [])

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
          ref={webcamRef}
        />
      </div>

      <button
        type='button'
        onClick={getCapture}
        className='
          p-3
          bg-blue-600
          hover:bg-blue-400
          active:bg-blue-300
          rounded
          text-white
          my-3
          shadow-lg
        '
      >
        Ambil screenshot
      </button>

      <div>
        Hasil Screenshot
        {
          imageCapture && (
            <img
              src={imageCapture}
              alt='screenshot output'
              className='
                h-56
              '
            />
          )
        }
      </div>
    </div>
  )
}

export default WebcamComponent
