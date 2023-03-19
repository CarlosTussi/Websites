import CountdownCard from "./ContdownCard";

function Countdown ()
{
    return (
        <>
            <CountdownCard value="27" type="days"/>
            <CountdownCard value="12" type="hours"/>
            <CountdownCard value="25" type="minutes"/>
            <CountdownCard value="45" type="seconds"/>
        </>
    )
}

export default Countdown;