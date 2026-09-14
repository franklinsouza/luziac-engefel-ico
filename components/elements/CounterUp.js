import { useState } from "react"
import CountUp from "react-countup"
import ScrollTrigger from './ScrollTrigger'
export default function CounterUp({ count, time }) {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} component="span">
                <CountUp end={count} duration={time} redraw={true}>
                    {({ countUpRef }) => (
                        <span className="count odometer" ref={countUpRef}></span>
                    )}
                </CountUp>
            </ScrollTrigger>
        </>
    )
}
