/* eslint-disable no-unneeded-ternary */
import React, { useState } from 'react'

const FormUploadsFile = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [detectionResult, setDetectionResult] = useState(null)

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    const imageUrl = URL.createObjectURL(file)
    setSelectedImage(imageUrl)
    setDetectionResult(null)
  }

  const handleDetectionResult = () => {
    setDetectionResult('Ini merupakan buah Apel.')
  }

  return (
    <div
      className='
        w-full
        flex
        justify-center
        items-center
        p-3
      '
    >
      <div
        className='
          flex
          flex-col
          justify-center
          items-center
          gap-4
          w-fit
        '
      >
        <h1
          className='
            font-semibold
            md:text-xl
          '
        >
          Upload Gambar Buah
        </h1>

        <div>
          <input
            type='file'
            onChange={handleImageUpload}
            className='
              w-full
              border
              bg-gray-800
              text-white
              rounded-xl
              p-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              hover:bg-gray-700
              transition-colors
              duration-300
            '
          />
        </div>

        <div
          className='
            border-black
            border-2
            border-dashed
            p-2
            flex
            justify-center
            items-center
            w-full
          '
        >
          {
            selectedImage
              ? (
                  <img
                    src={selectedImage}
                    className='
                      w-full
                      h-64
                      object-cover
                      object-center
                    '
                  />
                )
              : (
                  <h1>Gambar anda akan tampil disini</h1>
                )
          }
        </div>

        <button
          type='button'
          onClick={handleDetectionResult}
          className={
            `
              w-full
              py-2
              shadow-md
              text-white
              transition-all
              ease-out
              duration-150
              ${
                selectedImage
                ? 'bg-blue-500 hover:bg-blue-300 active:bg-blue-200'
                : 'cursor-not-allowed bg-blue-300'
              }
            `
          }
          disabled={selectedImage ? false : true}
        >
          Identifikasi
        </button>

        {
          detectionResult &&
          <div
            className='
              w-full
              p-1
            '
          >
            <h1
              className='
                text-2xl
                font-semibold
                text-center
              '
            >
              {detectionResult}
            </h1>
          </div>
        }
      </div>
    </div>
  )
}

export default FormUploadsFile
