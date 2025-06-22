import { Button } from "@/components/ui/button";
import { Layers, Pencil, Zap } from "lucide-react";

export default function Layout() {
  return (
    <main>
      <section className="h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Manage your content with ease
            </h1>
            <p className="text-gray-400 max-width-[700px]">
              {/* Task-1 : add sizes for all devices  */}
              Streamline your content workflow, publish with confidence
            </p>
          </div>
          <div className="flex gap-4 ">
            <Button variant="myvariant" size="lg">
              Try it out
            </Button>
            <Button variant="myvariant" size="lg">
              Must try
            </Button>
          </div>
        </div>
      </section>
      <section className="sm:h-[50vh] md:[h-[60vh] lg:h-[70vh] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-2 bg-gray-700/15">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Pencil size={50} />
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl font-bold tezt-center">
            Intuitive Editor
          </h1>
          <p className="w-[50%] text-center">
            Create and edit content with user-friendly interface{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Layers size={50} />
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl font-bold text-center">
            Flexible Tools
          </h1>
          <p className="w-[50%] text-center">
            Create and edit content with user-friendly interface{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <Zap size={50} />
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl font-bold">
            Blazing Fast
          </h1>
          <p className="w-[50%] text-center">
            Create and edit content with user-friendly interface{" "}
          </p>
        </div>
      </section>
      <section></section>
    </main>
  );
}
