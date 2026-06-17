import { catchFish } from "@/lib/fishing";

export default function FishingPage() {

  const fish = catchFish();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Fishing Dock
      </h1>

      <p className="mt-5">
        You caught: {fish}
      </p>
    </div>
  );
}
