import DataCard from "./DataCard";
import EditButton from "./EditButton";

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center ">
      <div className="text-center">
        <h1 className="text-3xl my-4">Personal info</h1>
        <p className="my-4">Basic info, like your name and photo</p>
      </div>
      <EditButton />
      <DataCard />
    </div>
  );
}
