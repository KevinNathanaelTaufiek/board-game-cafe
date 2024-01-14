"use client"

import { padTime } from '@/utils/time-utils';
import { useEffect, useMemo, useState } from 'react'

const useCountdown = (initialSeconds: number) => {
    const [counter, setCounter] = useState(initialSeconds);

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    const { hour, minute, second } = useMemo(() => {
        const second = counter % 60
        const minute = Math.floor(counter / 60) % 60;
        const hour = Math.floor(counter / 3600);
        return ({
            hour, minute, second
        })
    }, [counter])

    return {
        hour,
        minute,
        second,
        padHour: padTime(hour),
        padMinute: padTime(minute),
        padSecond: padTime(second),
    }
}

export default useCountdown