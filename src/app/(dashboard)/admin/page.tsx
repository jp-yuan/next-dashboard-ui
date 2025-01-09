import UserCard from "@/components/UserCard";
import CountChart from "@/components/CountChart";
import AttendanceChart from "@/components/AttendanceChart";

const adminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/* LEFT */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* UserCard */}
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex gap-4 flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/2 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-1/2 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>

                <div>
                    {/* Additional Chart Placeholder */}
                    <div className=""></div>
                </div>
                {/* BOTTOM */}
                <div className="">
                    <div className=""></div>
                </div>
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3">Right Content Here</div>
        </div>
    );
};

export default adminPage;
