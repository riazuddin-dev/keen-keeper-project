"use client";
import { useParams } from "next/navigation";
import friendsData from "../../../../public/data.json";
import Buttons from "@/components/buttons/buttons";

const DetailsPage = () => {
  const { fdid } = useParams();

  const data = friendsData.find((g) => g.id === Number(fdid));

  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-6 bg-base-200 min-h-screen container mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* LEFT */}
        <div className="space-y-4">
          <div className="card bg-base-100 shadow-md p-6 items-center text-center">
            
            <img
              src={data.picture}
              alt={data.name}
              className="w-20 h-20 rounded-full"
            />

            <h2 className="font-bold text-lg mt-2">{data.name}</h2>

            <div className="flex gap-2 mt-2">
              <span className="badge badge-error">{data.status}</span>
              <span className="badge badge-success">{data.tags[0]}</span>
            </div>

         
            <div className="text-sm italic mt-2">
              {data.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>

            {/* EMAIL */}
            <p className="text-xs text-gray-500">
              Preferred:{" "}
              <span className="font-bold text-black">{data.email}</span>
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="text-2xl space-y-3 font-extrabold text-black">
            <button className="btn btn-outline w-full">Snooze 2 Weeks</button>
            <button className="btn btn-outline w-full">Archive</button>
            <button className="btn btn-error w-full">Delete</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-2 space-y-4">
          
          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            
            <div className="card bg-base-100 p-4 text-center shadow">
              <h1 className="text-2xl font-bold text-green-600">
                {data.days_since_contact}
              </h1>
              <p className="text-sm">Days Since Contact</p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
              <h1 className="text-2xl font-bold text-green-600">
                {data.goal}
              </h1>
              <p className="text-sm">Goal (Days)</p>
            </div>

            <div className="card bg-base-100 p-4 text-center shadow">
              <h1 className="font-bold">{data.next_due_date}</h1>

              <button className="btn btn-xs btn-outline mt-2">
                {data.tags.map((g, index) => (
                  <span key={index} className="mr-1">
                    {g}
                  </span>
                ))}
              </button>
            </div>
          </div>

          {/* RELATIONSHIP */}
          <div className="p-6 shadow flex justify-between items-center">
            <div className="space-y-2">
              <h2 className="font-bold text-xl">Relationship Goal</h2>
              <p className="text-sm font-semibold">
                Connect every{" "}
                <span className="font-bold">30 days</span>
              </p>
            </div>

            <button className="btn btn-sm btn-outline">Edit</button>
          </div>

          {/* QUICK ACTION */}
          <div className="card bg-base-100 p-4 shadow">
            <h2 className="text-start font-bold text-2xl underline mb-7">
              Quick Check-In
            </h2>

            <Buttons datas={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;