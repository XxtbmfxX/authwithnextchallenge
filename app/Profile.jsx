import Link from "next/link";
import DataCard from "./profile/DataCard";

export default function Profile() {
  return (
    <>
      <div className="  w-full mt-8 flex flex-col items-center   ">
        <div className="text-center">
          <h1 className="text-3xl my-4">Personal info</h1>
          <p className="my-4">Basic info, like your name and photo</p>
        </div>
        <div className="md:border-2 mt-8 md:border-gray-300 rounded-lg  p-8 w-3/4  max-w-3xl ">
          <div className="flex justify-between pb-8  border-b-2 ">
            <div className="text  ">
              <h2 className="text-2xl">Profile</h2>
              <p className="">Some info may be visible to other people</p>
            </div>

            <Link
              className="border-2 h-10 w-24 active:animate-pulse  border-gray-200 flex justify-center text-center items-center rounded-lg "
              href={"/profile"}>
              Edit
            </Link>
          </div>
          <DataCard />
        </div>
      </div>
    </>
  );
}
