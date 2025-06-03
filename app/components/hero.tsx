import ProfileCard from "./profile-card";

export default function Hero() {
  return (
    <div className=" flex flex-col gap-4 xl:flex-row">
      <div className="min-w-[340px]">
        <ProfileCard />
      </div>
      <div className="md:p-14 px-10 py-10  flex-grow bg-background bg-heroBgGradient">
        <h4 className="text-2xl font-poppins">
          Hello I'm <span className="text-secondery">Sabbir Hossain</span>
        </h4>
        <div className="py-5">
          <h2 className="font-plusJakarta lg:text-5xl text-3xl leading-9 lg:leading-snug font-medium">
            Senior Data Engineer and <br className="hidden lg:block" />{" "}
            <span className="px-4 my-1 -rotate-2 font-poppins inline-block rounded-[50px] font-medium bg-secondery text-background">
              Data Scientist
            </span>{" "}
            Based in <br /> California, Los Angeles.
          </h2>
        </div>
        <p className="font-poppins smallText">
          Have worked in a variety of positions, including key developer,
          solution designer, and data architect. Strong engineering background
          combined with closely working with business customers.
        </p>
        <div className="pt-8 flex lg:flex-row flex-wrap  gap-4 items-center justify-between">
          <div className=" flex items-center gap-2 lg:gap-4">
            <h3 className="font-plusJakarta text-5xl lg:text-6xl">20</h3>

            <div className=" flex-col flex gap-0 lg:gap-1">
              <p className="smallText">Completed</p>
              <p className="smallText">Project</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 lg:gap-4">
            <h3 className="font-plusJakarta text-5xl lg:text-6xl">2</h3>

            <div className=" flex-col flex gap-0 lg:gap-1">
              <p className="smallText">Years of</p>
              <p className="smallText">Experience</p>
            </div>
          </div>
          <div className=" flex items-center gap-2 lg:gap-4">
            <h3 className="font-plusJakarta text-5xl lg:text-6xl">230</h3>

            <div className=" flex-col flex gap-0 lg:gap-1">
              <p className="smallText">Problems</p>
              <p className="smallText">Solved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
