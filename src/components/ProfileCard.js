import { MapPin, Star } from "lucide-react";

const ProfileCard = () => (
  <div className="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 p-5 w-full max-w-sm">
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-xl bg-blue-100 grid place-items-center">
        <MapPin className="h-6 w-6" />
      </div>
      <div>
        <p className="font-semibold">Sadiq's Provisions</p>
        <p className="text-xs text-slate-500">Aboabo, Tamale</p>
      </div>
    </div>
    <div className="mt-4 aspect-video rounded-xl bg-slate-100 grid place-items-center text-slate-400 text-sm">Storefront Photo</div>
    <div className="mt-4 flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i === 4 ? 'opacity-40' : ''}`} fill="currentColor" />
      ))}
      <span className="ml-2 text-xs text-slate-500">(23 reviews)</span>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
      <div className="rounded-xl bg-slate-50 p-3">
        <p className="text-slate-500">Open Hours</p>
        <p className="font-medium">8:00am – 9:30pm</p>
      </div>
      <div className="rounded-xl bg-slate-50 p-3">
        <p className="text-slate-500">Phone</p>
        <p className="font-medium">050 606 3217</p>
      </div>
    </div>
  </div>
);
export default ProfileCard;
