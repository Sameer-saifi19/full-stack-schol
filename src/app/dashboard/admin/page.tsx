import AnnouncementCard from "@/components/announcementcard";
import { AttendanceChart } from "@/components/attendancechart";
import CountChart from "@/components/countchart";
import EventsCard from "@/components/eventscard";
import { FinanceChart } from "@/components/financeChart";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import UserCard from "@/components/usercard";

export default function Adminpage() {
  return (
    <div className="p-4 flex flex-col lg:flex-row gap-6 mb-8">
      {/* Left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
        {/* middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count charts */}
          <div className="w-full lg:w-1/3">
            <CountChart />
          </div>
          {/* attendance charts */}
          <div className="w-full lg:w-2/3 h">
            <AttendanceChart />
          </div>
        </div>
        {/* bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <Card className="p-0 m-0 rounded-xl">
          <Calendar className="rounded-xl"/>
        </Card>
          <EventsCard/>
          <AnnouncementCard/>
      </div>
    </div>
  );
}
