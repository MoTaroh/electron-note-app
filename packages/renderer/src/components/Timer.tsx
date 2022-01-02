import React, { useEffect, useState } from 'react'
import TimerInput from './TimerInput'
import { useSpring, useTransition, animated } from 'react-spring'

let initialCount = 15 * 60

type Props = {
  isOpen: boolean
}

const convertSecondsToMMSS = (seconds: number) => {
  const min: number = Math.floor(seconds / 60)
  const mm: string = min < 10 ? `0${min}` : `${min}`

  const sec: number = seconds % 60
  const ss: string = sec < 10 ? `0${sec}` : `${sec}`

  return `${mm}:${ss}`
}

/**
 * Timer Component
 * @param props isOpen
 * @returns html
 */
const Timer = (props: Props) => {
  const [seconds, setSeconds] = useState(initialCount)
  const [isActive, setIsActive] = useState(false)
  const [isInput, setIsInput] = useState(false)

  const toggleCountdown = () => {
    setIsActive(!isActive)
  }

  const resetCountdown = () => {
    setSeconds(initialCount)
    setIsActive(false)
  }

  const handleInput = () => {
    if (props.isOpen) {
      setIsActive(false)
      setIsInput(!isInput)
    }
  }

  const setInitialCount = (count: number) => {
    initialCount = count
    setSeconds(count)
  }

  const { width } = useSpring({
    from: { width: 0 },
    to: { width: props.isOpen ? 320 : 160 }
  })
  const buttonAnimation = useTransition(props.isOpen, {
    from: { opacity: 0, height: 0, width: 0 },
    enter: { opacity: 1, height: 32, width: 32 },
    leave: { opacity: 0, height: 0, width: 0 }
  })

  useEffect(() => {
    let intervalId: number
    if (isActive) {
      // run timer
      intervalId = window.setInterval(() => {
        setSeconds(counter => counter - 1)
      }, 1000)
    }
    if (!isActive) {
      console.log('pause')
    }
    if (isActive && seconds <= 0) {
      alert('Time is up!')
      resetCountdown()
    }
    return () => clearInterval(intervalId)
  }, [isActive, seconds])

  return (
    <animated.div
      className="relative flex items-center justify-between h-24 p-4 text-white bg-black rounded bg-opacity-60"
      style={{ width }}
    >
      <button onClick={() => handleInput()} className="text-5xl font-bold">
        {convertSecondsToMMSS(seconds)}
      </button>
      {buttonAnimation((style, item) =>
        item ? (
          <div className="flex space-x-3">
            <animated.button
              onClick={toggleCountdown}
              className="text-blue-400 btn"
              style={style}
            >
              ▶
            </animated.button>
            <animated.button
              onClick={resetCountdown}
              className="text-red-400 btn"
              style={style}
            >
              ■
            </animated.button>
          </div>
        ) : (
          ''
        )
      )}
      {isInput && <TimerInput setInitialCount={setInitialCount} />}
    </animated.div>
  )
}

export default Timer
