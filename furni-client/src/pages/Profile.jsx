import { FiUser, FiMail } from "react-icons/fi";

function Profile() {
  return (
    <>
      <div className="bg-[#3b5d50]">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold text-white">My Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white shadow-lg rounded-2xl p-10">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#3b5d50] flex items-center justify-center">
              <FiUser className="text-5xl text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Welcome!</h2>
              <p className="text-gray-500">This is your Furni account.</p>
            </div>
          </div>

          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4 border rounded-lg p-4">
              <FiUser className="text-2xl text-[#3b5d50]" />
              <div>
                <p className="text-gray-500">Name</p>
                <h3 className="font-semibold">Your Name</h3>
              </div>
            </div>

            <div className="flex items-center gap-4 border rounded-lg p-4">
              <FiMail className="text-2xl text-[#3b5d50]" />
              <div>
                <p className="text-gray-500">Email</p>
                <h3 className="font-semibold">you@example.com</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
 