export default function Hero() {
  return (
    <>
      <div className="md:p-14 px-10 rounded-tr-xl bg-background">
        <h4 className="text-2xl font-poppins">
          Hello I'm <span className="text-secondery">Sabbir Hossain</span>
        </h4>
        <div className=" py-5">
          <h2 className="font-plusJakarta text-5xl leading-tight font-medium">
            Senior Data Engineer and <br />{" "}
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
        <div className="pt-8 flex items-start justify-between">
          <div className=" flex items-center gap-4">
            <h3 className="font-plusJakarta text-6xl">20</h3>

            <div className=" flex-col flex gap-1">
              <p className="smallText">Completed</p>
              <p className="smallText">Project</p>
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <h3 className="font-plusJakarta text-6xl">2</h3>

            <div className=" flex-col flex gap-1">
              <p className="smallText">Years of</p>
              <p className="smallText">Experience</p>
            </div>
          </div>
          <div className=" flex items-center gap-4">
            <h3 className="font-plusJakarta text-6xl">230</h3>

            <div className=" flex-col flex gap-1">
              <p className="smallText">Problems</p>
              <p className="smallText">Solved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
