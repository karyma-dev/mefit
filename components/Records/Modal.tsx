import React, { useEffect, useRef } from 'react'

const Modal = ({ exercise, setIsOpen }) => {
  const el = useRef()

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return function cleanup() {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const handleClickOutside = (e) => {
    if (el && !el.current.contains(e.target)) {
      setIsOpen()
    }
  }

  return (
    <div ref={el}>
      <h1>Modal</h1>
    </div>
  )
}

export default Modal
