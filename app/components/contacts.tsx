import SectionWrapper from "./section-wrapper";
import { Contact, Mail, Map, PhoneCall } from "lucide-react";
import CopyButton from "./extra/copy-button";
import ContactForm from "./contact-form";

export default function Contacts() {
  return (
    <footer>
      <SectionWrapper
        title="Contact"
        subTitle="Let's Get In Touch"
        icon={Contact}
        id="contact"
        className="!pb-0"
      >
        <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2 ">
          <div className=" flex items-center gap-4 group p-4 md:p-6 w-full rounded-lg border border-offBorder bg-cardGradient">
            <div className="flex items-center gap-4">
              <PhoneCall className="md:w-8 md:h-8 w-7 h-7 text-secondery" />
            </div>
            <div>
              <p className="md:text-lg text-base">Phone</p>
              <p className=" md:text-xl text-lg font-normal">8801902317010</p>
            </div>
            <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
              <CopyButton copyData="+8801902317010" />
            </div>
          </div>

          <div className=" flex items-center group gap-4 p-4 md:p-6 w-full rounded-lg border border-offBorder bg-cardGradient">
            <div className="flex items-center gap-4">
              <Mail className="md:w-8 md:h-8 w-7 h-7 text-secondery" />
            </div>
            <div>
              <p className="md:text-lg text-base">Email</p>
              <p className=" md:text-xl text-lg font-normal">
                sabbir2always@gmail.com
              </p>
            </div>
            <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
              <CopyButton copyData="sabbir2always@gmail.com" />
            </div>
          </div>

          <div className=" flex items-center group gap-4 p-4 md:p-6 w-full lg:col-span-2 rounded-lg border border-offBorder bg-cardGradient">
            <div className="flex items-center gap-4">
              <Map className="md:w-8 md:h-8 w-7 h-7 text-secondery" />
            </div>
            <div>
              <p className="md:text-lg text-base">Address</p>
              <p className=" md:text-xl text-lg font-normal">
                Pabna, Rajshahi, Bangladesh
              </p>
            </div>
            <div className="ml-auto hidden md:block opacity-0 group-hover:opacity-100 duration-200">
              <CopyButton copyData="Pabna, Rajshahi, Bangladesh" />
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="py-10">
          <p className="text-center text-sm">
            &copy; 2025 Sabbir Hossain, All rights reserved
          </p>
        </div>
      </SectionWrapper>
    </footer>
  );
}
