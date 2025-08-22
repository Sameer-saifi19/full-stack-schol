import Link from "next/link";
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function AnnouncementCard(){
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Events</CardTitle>
                    <CardAction><CardDescription><Link href="#">View all</Link></CardDescription></CardAction>
                </CardHeader>
                <Card className="p-4 mx-4" >
                    <CardTitle>
                        Announcement 1
                    </CardTitle>
                    <CardDescription>
                        This is the details about announcement 1
                    </CardDescription>
                </Card>
                
            </Card>
        </>
    )
}