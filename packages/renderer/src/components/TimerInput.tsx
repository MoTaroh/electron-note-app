import React from 'react'

type Props = {
  setInitialCount: (count: number) => void
}

const TimerInput = (props: Props) => {
  return (
    <div className="absolute z-10 top-28 left-0 grid grid-cols-4 gap-2 p-3 bg-black bg-opacity-20 text-white rounded border border-white border-opacity-20 backdrop-filter backdrop-blur-lg">
      <button
        onClick={() => props.setInitialCount(5 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        5
      </button>
      <button
        onClick={() => props.setInitialCount(10 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        10
      </button>
      <button
        onClick={() => props.setInitialCount(15 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        15
      </button>
      <button
        onClick={() => props.setInitialCount(20 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        20
      </button>
      <button
        onClick={() => props.setInitialCount(25 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        25
      </button>
      <button
        onClick={() => props.setInitialCount(30 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        30
      </button>
      <button
        onClick={() => props.setInitialCount(35 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        35
      </button>
      <button
        onClick={() => props.setInitialCount(40 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        40
      </button>
      <button
        onClick={() => props.setInitialCount(45 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        45
      </button>
      <button
        onClick={() => props.setInitialCount(50 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        50
      </button>
      <button
        onClick={() => props.setInitialCount(55 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        55
      </button>
      <button
        onClick={() => props.setInitialCount(60 * 60)}
        className="w-16 h-16 bg-black bg-opacity-60 font-bold text-4xl rounded hover:bg-white hover:bg-opacity-20 hover:border hover:border-white hover:border-opacity-20"
      >
        60
      </button>
    </div>
  )
}

export default TimerInput
