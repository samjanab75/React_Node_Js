import profile from "../assets/profilesam7.png";

const ProfileCard = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-200 p-5">
      <div className="bg-purple-100 w-[420px] rounded-3xl shadow-2xl overflow-hidden">

        {/* Top Section */}
        <div className="bg-slate-800 h-32 relative">
          <img
            src={profile}
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-white object-cover absolute left-1/2 -translate-x-1/2 top-6"
          />
        </div>

        {/* Profile Details */}
        <div className="pt-28 pb-8 px-8 text-center">

          <h1 className="text-4xl font-bold text-slate-800">
            SAMJANA BHANDARI D
          </h1>

          <p className="text-xl text-gray-600 mt-2">
            FRONTEND DEVELOPER
          </p>

          <hr className="my-6" />

          <div className="space-y-4 text-left">

            <div className="flex justify-between">
              <span className="font-semibold">ID</span>
              <span>SLA-5933 </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Email</span>
              <span className="text-right">
                samjanab75@gmail.com
              </span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Phone</span>
              <span>+91 77084 414404</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Location</span>
              <span>North Korattur, Chennai, India</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Joined</span>
              <span>MAY-7-2026 </span>
            </div>

          </div>
        </div>

       

      </div>
    </div>
  );
};

export default ProfileCard;