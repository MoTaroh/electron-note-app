import React from 'react'

const timerValues = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]

type Props = {
  setInitialCount: (count: number) => void
}

const TimerInput = (props: Props) => {
  return (
    <div className="absolute left-0 z-10 grid grid-cols-4 gap-2 p-3 text-white bg-black border border-white rounded top-28 bg-opacity-20 border-opacity-20 backdrop-filter backdrop-blur-lg">
      {timerValues.map((second, i) => (
        <button
          key={i}
          onClick={() => props.setInitialCount(second * 60)}
          className="w-16 h-16 text-4xl font-bold bg-black rounded bg-opacity-60 hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
        >
          {second}
        </button>
      ))}
    </div>
  )
}

export default TimerInput
