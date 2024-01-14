"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "../ui/badge"
import useCountdown from "@/hooks/useCountdown"
import { timeDiffInSecond } from "@/utils/time-utils"
import { useEffect } from "react"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"


const data = {
    tableId: "table 1",
    status: "Playing",
    startPlayTimestamp: new Date('2024-01-14T20:08:20'),
    playHours: 0
}

const TabelInformation = () => {
    const { toast } = useToast()
    const now = new Date();
    const endSession = new Date(data.startPlayTimestamp.getTime() + data.playHours * 60 * 60 * 1000);
    const totalPlayInSecond = endSession > now ? timeDiffInSecond(endSession, now) : 0;
    const { hour, minute, second, padHour, padMinute, padSecond } = useCountdown(totalPlayInSecond);

    useEffect(() => {
        if (hour === 0 && minute === 0 && second === 0) {
            toast({
                title: `Session End on ${data.tableId}`,
                variant: "destructive",
                action: <ToastAction altText="Try again">+1 Play Hour</ToastAction>,
            })
        }
    }, [hour, minute, second])


    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>Table 1</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    Status: <Badge variant='default'>Free</Badge>
                </div>
                <div>
                    Start Play : {data.startPlayTimestamp.toISOString()}
                </div>
                <div>
                    Play Time : {data.playHours} Hours
                </div>
                <div>
                    Time Remaning : {`${padHour}:${padMinute}:${padSecond}`}
                </div>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Deploy</Button>
            </CardFooter>
        </Card>
    )
}

export default TabelInformation