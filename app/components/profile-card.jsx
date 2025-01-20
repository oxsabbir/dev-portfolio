import profileImage from "@/public/profileImage.png";
import Image from "next/image";
export default function ProfileCard() {
  return (
    <>
      <div className="bg-background lg:sticky top-0 cardBackground rounded-xl p-4 rounded-tr-none">
        <div className=" p-4">
          <Image
            src={profileImage}
            width={280}
            height={280}
            alt="profile-image"
            className=" rounded-xl rounded-tr-none"
          />

          <div className=" flex flex-col items-center gap-3 py-5">
            <p className=" text-secondery text-sm font-normal uppercase">
              Software Engineer
            </p>
            <h4 className="font-semibold text-3xl">Andrew Ryan</h4>
          </div>

          <div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
