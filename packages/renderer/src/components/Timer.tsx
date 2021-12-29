import React, { useEffect, useState } from 'react'

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

const Timer = (props: Props) => {
  let initialCount = 10 * 60
  const initialText: string = convertSecondsToMMSS(initialCount)
  const [seconds, setSeconds] = useState(initialCount)
  const [countText, setCountText] = useState(initialText)
  const [isActive, setIsActive] = useState(false)

  const toggleCountdown = () => {
    setIsActive(!isActive)
  }

  const resetCountdown = () => {
    setSeconds(initialCount)
    setIsActive(false)
  }

  const setInitialCount = (count: number) => {
    initialCount = count
    console.log(initialCount)
  }

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
      alert('time is up!')
      resetCountdown()
    }
    return () => clearInterval(intervalId)
  }, [isActive, seconds])

  useEffect(() => {
    // convert seconds to mm:ss
    setCountText(convertSecondsToMMSS(seconds))
    return () => {}
  }, [seconds])
  return (
    <div className="timer flex flex-1 rounded p-4 justify-between items-center text-white bg-black bg-opacity-60">
      <span className="font-bold text-5xl">{countText}</span>
      {props.isOpen && (
        <div className="flex space-x-3">
          <button
            onClick={toggleCountdown}
            className="h-8 w-8 bg-white text-blue-400 rounded-full"
          >
            ▶
          </button>
          <button
            onClick={resetCountdown}
            className="h-8 w-8 bg-white text-red-400 rounded-full"
          >
            ■
          </button>
        </div>
      )}
    </div>
  )
}

export default Timer
