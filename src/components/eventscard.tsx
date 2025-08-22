import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function EventsCard(){
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Events</CardTitle>
                    <CardAction><CardDescription>08-09-2025</CardDescription></CardAction>
                </CardHeader>
                <Card className="p-4 mx-4" >
                    <CardTitle>
                        Event 1
                    </CardTitle>
                    <CardDescription>
                        This is the details about event 1
                    </CardDescription>
                </Card>
                <Card className="p-4 mx-4" >
                    <CardTitle>
                        Event 1
                    </CardTitle>
                    <CardDescription>
                        This is the details about event 1
                    </CardDescription>
                </Card>
                <Card className="p-4 mx-4" >
                    <CardTitle>
                        Event 1
                    </CardTitle>
                    <CardDescription>
                        This is the details about event 1
                    </CardDescription>
                </Card>
            </Card>
        </>
    )
}