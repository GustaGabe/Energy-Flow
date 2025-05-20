import { EnergyOverview } from "@/components/dashboard/energyOverview";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-gray-400">Monitor your energy consumption and production through the day</p>

      <div className=" flex flex-row gap-4">
        <EnergyOverview />
      </div>
    </div>
  );
}
