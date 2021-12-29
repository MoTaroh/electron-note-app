import React, { useState } from 'react'
import Editor from 'rich-markdown-editor'
import Timer from './components/Timer'

const App: React.FC = () => {
  const theme = {
    background: '#00000000',
    text: '#ffffff',
    toolbarBackground: '#ffffff'
  }

  return (
    <div className="bg-black border min-w-[320px] border-white border-opacity-50 bg-opacity-20 p-3 flex flex-col space-y-8">
      <div className="flex h-24 space-x-3">
        <button className="w-8 flex items-center justify-center rounded text-white bg-black bg-opacity-60">
          →
        </button>
        <Timer></Timer>
      </div>
      <div className="flex flex-col space-y-4">
        <h3 className=" font-semibold text-lg text-white">NOTES</h3>
        <div className="py-4 px-8 bg-black bg-opacity-60">
          <Editor defaultValue="Hello, world!" theme={theme} />
        </div>
      </div>
    </div>
  )
}

export default App
