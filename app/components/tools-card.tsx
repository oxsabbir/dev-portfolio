import { LucideIcon } from "lucide-react";

type ToolsCardProps = {
  title: string;
  toolsList: any[];
  icon: LucideIcon;
};

export default function ToolsCard({
  title,
  toolsList,
  icon: Icon,
}: ToolsCardProps) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      <div className="px-4 py-2 rounded-3xl border flex items-center w-fit border-offWhite  gap-2">
        <Icon strokeWidth={1.3} className="w-5 h-5" />
        <h5 className="font-poppins font-light  text-sm">{title}</h5>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        {toolsList.map((item, i) => (
          <div
            key={i}
            className="bg-background bg-heroBgGradient rounded-lg border border-offWhite p-5"
          >
            <div className=" flex flex-row items-center gap-4">
              <item.icon style={{ color: item.color }} size={45} />
              <div>
                <h3 className="text-base font-poppins">{item.name}</h3>
                <p className="mt-0.5 text-smGray  text-sm">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
