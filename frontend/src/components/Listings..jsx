import "../App.css";
import { Badge } from "@/components/ui/badge.jsx";
import { Button } from "@/components/ui/button.jsx";

export default function Listings({
  // eslint-disable-next-line react/prop-types
  bagTitle,
  // eslint-disable-next-line react/prop-types
  searchTitle,
  // eslint-disable-next-line react/prop-types
  announcement,
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  view,
}) {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-20 space-y-8 px-2">
        <Badge
          className="rounded-sm bg-gradient-to-br border-transparent from-[#c21d03] to-[#fd5732] text-white uppercase font-medium"
          variant="destructive"
        >
          {bagTitle}
        </Badge>
        <h2 className="font-black text-xl md:text-2xl lg:text-4xl uppercase">
          {searchTitle ? searchTitle : "our latest listings"}
        </h2>
        <div className="flex flex-row items-center justify-between">
          <p className="text-justify font-medium">{announcement}</p>
          {view && (
            <Button className="rounded-none" variant="outline">
              View all
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 place-items-center gap-6">
          {children}
        </div>
      </div>
    </section>
  );
}
