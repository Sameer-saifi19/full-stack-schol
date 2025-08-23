import AnnouncementCard from "@/components/announcementcard";
import EventsCard from "@/components/eventscard";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardAction, CardHeader } from "@/components/ui/card";
import React from "react";

export default function StudentPage() {
  return (
    <>
      <div className="p-4 flex gap-4 flex-col xl:flex-row">
        {/* {LEFT} */}
        <div className="w-full xl:w-2/3">
          <Card className="h-full p-4 rounded-md">
              <CardHeader>Students (4a)</CardHeader>
              <CardAction></CardAction>
          </Card>
        </div>
        {/* Right */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <Card className="p-0 m-0 rounded-xl">
            <Calendar className="rounded-xl" />
          </Card>
          <EventsCard />
          <AnnouncementCard />
        </div>
      </div>
    </>
  );
}
