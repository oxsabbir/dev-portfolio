import { socialLinks } from "@/app/utils/constants";
import profileImage from "@/public/profileImage.png";
import Image from "next/image";
export default function ProfileCard() {
  return (
    <>
      <div className="bg-background lg:sticky top-0 cardBackground rounded-xl p-4 rounded-tr-none">
        <div className=" p-4 pb-0 flex flex-col gap-5">
          <Image
            src={profileImage}
            width={280}
            height={280}
            alt="profile-image"
            className=" rounded-xl rounded-tr-none"
          />

          <div className=" flex flex-col items-center gap-3 ">
            <p className=" text-secondery text-sm font-normal uppercase">
              Software Engineer
            </p>
            <h4 className="font-semibold text-3xl">Sabbir Hossain</h4>
          </div>

          <div className="flex items-center gap-4 justify-center">
            {socialLinks.map((item) => (
              <a
                key={item.title}
                className=" p-2.5 border-whiteLowOpacity border-2 rounded-2xl"
                href={item.link}
              >
                {<item.icon />}
              </a>
            ))}
          </div>
        </div>
        <div className=" flex items-center justify-between mt-5 px-4 text-sm gradientBorderTop font-semibold text-center">
          <a className="py-3 ">Contact Me</a>
          <div className=" gradientBorderCenter h-[40px] gradientBorderCenter w-[1px] "></div>
          <a className="py-3">Contact Me</a>
        </div>
      </div>
    </>
  );
}
