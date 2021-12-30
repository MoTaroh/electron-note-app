import React, { useState } from 'react'
import Editor from 'rich-markdown-editor'
import Timer from './components/Timer'

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const theme = {
    background: '#00000000',
    text: '#ffffff',
    toolbarBackground: '#ffffff'
  }

  return (
    <div
      className={`
      bg-black bg-opacity-20 flex flex-col h-screen space-y-8
      ${isOpen ? 'p-3 min-w-[320px]' : 'p-1'}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex h-24 space-x-3">
        {isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 flex items-center justify-center rounded text-white bg-black bg-opacity-60"
          >
            →
          </button>
        )}
        {!isOpen && isHover && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 flex items-center justify-center rounded text-white bg-black bg-opacity-60"
          >
            ←
          </button>
        )}
        <Timer isOpen={isOpen}></Timer>
      </div>
      {isOpen && (
        <div className="flex flex-1 flex-col space-y-4 w-[362px]">
          <h3 className=" font-semibold text-lg text-white">NOTES</h3>
          <div className="flex-1 py-4 px-8 rounded bg-black bg-opacity-60">
            <Editor defaultValue="Hello, world!" theme={theme} />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
