import { Button } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import "./Timer.scss"

export default function Timer() {

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null as any);

  // The state for our timer
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(-1);

  useEffect(() => {
    if (start !== -1){
      setTimer(start)
    }
  }, [start])

  
  useEffect(() => {
    if (start !== -1) {
      let timeout: any;
      timeout = setTimeout(() => {
        setTimer(timer + 1)
      }, 1000)

      Ref.current = timeout;
    }
  }, [timer])

  const [button, setButton] = useState("Start Timer")

  const onClickReset = () => {
    clearTimeout(Ref.current);
    setStart((oldStart => (oldStart === 1)? 0 : 1))
    setButton("Reset Timer")
  }

  return (
    <div className="timer">
      <h2>{new Date(timer * 1000).toISOString().substr(11, 8)}</h2>
      <Button onClick={onClickReset}>{button}</Button>
    </div>
  )
}