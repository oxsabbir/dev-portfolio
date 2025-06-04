import SectionWrapper from "./section-wrapper";
import { Contact, Mail, Map, PhoneCall } from "lucide-react";
import CopyButton from "./extra/copy-button";
import ContactForm from "./contact-form";

export default function Contacts() {
  return (
    <SectionWrapper
      title="Contacts"
      subTitle="Let's Get In Touch"
      icon={Contact}
    >
      <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2 ">
        <div className=" flex items-center gap-4 group p-6 w-full rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <PhoneCall className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Phone</p>
            <p className=" text-xl font-medium">8801902317010</p>
          </div>
          <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
            <CopyButton copyData="+8801902317010" />
          </div>
        </div>

        <div className=" flex items-center group gap-4 p-6 w-full rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <Mail className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Email</p>
            <p className=" text-xl font-medium">sabbir2always@gmail.com</p>
          </div>
          <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
            <CopyButton copyData="sabbir2always@gmail.com" />
          </div>
        </div>

        <div className=" flex items-center group gap-4 p-6 w-full lg:col-span-2 rounded-lg border border-offWhite bg-cardGradient">
          <div className="flex items-center gap-4">
            <Map className="w-8 h-8 text-secondery" />
          </div>
          <div>
            <p className="text-lg">Address</p>
            <p className=" text-xl font-medium">Pabna, Rajshahi, Bangladesh</p>
          </div>
          <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
            <CopyButton copyData="Pabna, Rajshahi, Bangladesh" />
          </div>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
}
