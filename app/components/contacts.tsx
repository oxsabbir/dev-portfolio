import SectionWrapper from "./section-wrapper";

import {
  Clipboard,
  Contact,
  LocateIcon,
  Mail,
  MailIcon,
  Map,
  PhoneCall,
} from "lucide-react";
import Button from "./ui/Button";

export default function Contacts() {
  return (
    <SectionWrapper
      title="Contacts"
      subTitle="Let's Get In Touch"
      icon={Contact}
    >
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 ">
        <div className=" flex items-center gap-4 p-6 w-full rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <PhoneCall className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Phone</p>
            <p className=" text-xl font-medium">8801902317010</p>
          </div>
        </div>

        <div className=" flex items-center gap-4 p-6 w-full rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Email</p>
            <p className=" text-xl font-medium">sabbir2always@gmail.com</p>
          </div>
          <div></div>
        </div>

        <div className=" flex items-center gap-4 p-6 w-full md:colspa rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <Map className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Address</p>
            <p className=" text-xl font-medium">Pabna, Rajshahi, Bangladesh</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
