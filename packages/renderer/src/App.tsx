import React, { useState } from 'react'
import Editor from 'rich-markdown-editor'
import base from 'rich-markdown-editor/dist/styles/theme'
import Timer from './components/Timer'

import { useSpring, useTransition, animated } from 'react-spring'

const App: React.VFC = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const theme = {
    ...base,
    background: '#00000000',
    text: '#ffffff',
    toolbarBackground: '#ffffff',
    toolbarItem: '#000000'
  }
  const { padding } = useSpring({
    from: { padding: 4 },
    to: {
      padding: isOpen ? 12 : 4
    }
  })
  const hoverAnimation = useTransition(isHover, {
    from: { width: 0, opacity: 0 },
    enter: { width: 32, opacity: 1 },
    leave: { width: 0, opacity: 0 }
  })
  const openHeightAnimation = useTransition(isOpen, {
    from: { height: 0, opacity: 0 },
    enter: { height: 600, opacity: 1 },
    leave: { height: 0, opacity: 0 }
  })

  return (
    <animated.div
      className={`
      bg-black bg-opacity-20 flex flex-col h-screen space-y-8 backdrop-filter backdrop-blur-lg
      ${isOpen ? 'p-3 min-w-[320px]' : 'p-1'}`}
      style={{ padding }}
    >
      <div
        className="flex h-24 space-x-3"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-8 text-white bg-black rounded bg-opacity-60"
          >
            →
          </button>
        )}
        {hoverAnimation((style, item) =>
          item && !isOpen ? (
            <animated.button
              style={style}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center text-white bg-black rounded bg-opacity-60"
            >
              ←
            </animated.button>
          ) : (
            ''
          )
        )}
        <Timer isOpen={isOpen}></Timer>
      </div>
      {openHeightAnimation((style, item) =>
        item ? (
          <animated.div
            className="flex flex-col space-y-4 w-[362px]"
            style={style}
          >
            <h3 className="text-lg font-semibold text-white ">NOTES</h3>
            <div className="flex-1 px-8 py-4 bg-black rounded bg-opacity-60">
              <Editor defaultValue="Hello, world!" theme={theme} />
            </div>
          </animated.div>
        ) : (
          ''
        )
      )}
    </animated.div>
  )
}

export default App
