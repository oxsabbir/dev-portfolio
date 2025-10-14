import { ChevronRightIcon } from "lucide-react";
import Button from "./ui/button";
import Input from "./ui/input";
import TextArea from "./ui/text-area";

export default function ContactForm() {
  return (
    <form className="mt-10">
      <h3 className="font-plusJakarta font-medium text-xl md:text-3xl lg:text-4xl">
        Let's make your project brilliant!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-6 mt-8 ">
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <div className="md:col-span-2">
          <TextArea placeholder="Write your message..." className="w-full" />
        </div>
      </div>
      <div className="pt-8">
        <Button
          variant="shiny"
          className="flex items-center gap-2 group justify-between"
        >
          Send Message
          <ChevronRightIcon className="w-4 h-4 duration-200 group-hover:translate-x-1.5 " />
        </Button>
      </div>
    </form>
  );
}
