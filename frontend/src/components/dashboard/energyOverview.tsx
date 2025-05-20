import { Battery, Zap, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Progress } from "../ui/progress"

export const EnergyOverview = () => {
    return (
        <div className="mt-6 flex flex-row gap-4">
           <Card className="flex max-w-[28%] flex-col ">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center gap-2">
                    <h2 className="text-sm font-bold">Current Energy</h2>
                    <Battery className="w-4 h-4 text-green-500" />
                </CardTitle>
            </CardHeader>
            <CardContent className="w-xl">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">50%</h1>
                        <Progress value={50} className="flex w-sm" />
                    </div>
                </div>
            </CardContent>
           </Card>  

            <Card className="w-full max-w-[28%] flex flex-col ">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center gap-2">
                    <h2 className="text-sm font-bold">Remaining Energy</h2>
                    <Zap className="w-4 h-4 text-green-500" />
                </CardTitle>
            </CardHeader>
            <CardContent className="w-xl">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">20%</h1>
                        <Progress value={20} className="flex w-sm" />
                    </div>
                </div>
            </CardContent>
           </Card>        

            <Card className="w-full max-w-[28%] flex flex-col ">
            <CardHeader>
                <CardTitle className="flex flex-row justify-between items-center gap-2">
                    <h2 className="text-sm font-bold">Energy Trend</h2>
                    <ArrowUpRight className="w-4 h-4 text-green-500" />
                </CardTitle>
            </CardHeader>
            <CardContent className="w-xl">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-baseline gap-2">
                        <h1 className="text-3xl font-bold">+12%</h1>
                        <span className="text-sm text-green-500 font-semibold">increase</span>
                    </div>
                </div>
            </CardContent>
           </Card>           
        </div>
    )
}