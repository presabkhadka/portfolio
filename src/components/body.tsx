import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { H2, P, H4 } from "./styledComponents";

export default function Body() {
  return (
    <div className="">
      <Tabs defaultValue="home">
        <TabsList className="flex gap-4 p-8 mx-auto w-fit">
          <TabsTrigger value="home" className="p-4 rounded-2xl">
            Home
          </TabsTrigger>
          <TabsTrigger value="resume" className="p-4 rounded-2xl">
            Resume
          </TabsTrigger>
          <TabsTrigger value="work" className="p-4 rounded-2xl">
            Work
          </TabsTrigger>
          <TabsTrigger value="contact" className="p-4 rounded-2xl">
            Contact
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="home"
          className="w-full py-6 px-12 flex flex-col gap-4"
        >
          <H2 className="border-orange-500 border-b-2 w-fit">ABOUT ME</H2>
          <P className="text-justify">
            Welcome to my portfolio! I am an enthusiastic frontend developer
            with a strong focus on React and a passion for pushing the
            boundaries of web development. My journey in this ever-evolving
            field has been dynamic and exciting, and I am always eager to refine
            my skills while staying up-to-date with the latest industry
            innovations.
          </P>
          <H2 className="border-orange-500 border-b-2 w-fit">TECH STACK</H2>
          <div className="grid grid-cols-4 gap-6">
          <div className="flex  flex-col gap-4 col-span-2 border-2  p-4 rounded-lg shadow-lg items-center">
              <H4>Languages</H4>
              <div className="flex w-full gap-10 items-center justify-center">
                <img src="../../src/assets/js.png" alt="" className="h-8" />
                <img src="../../src/assets/ts.png" alt="" className="h-8" />
                <img src="../../src/assets/py.png" alt="" className="h-8" />
              </div>
            </div>
            <div className="flex  flex-col gap-4 col-span-2 border-2  p-4 rounded-lg shadow-lg items-center">
              <H4>Frameworks & Libraries</H4>
              <div className="flex w-full gap-10 items-center justify-center">
                <img src="../../src/assets/react.png" alt="" className="h-8" />
                <img src="../../src/assets/ex.png" alt="" className="h-8" />
                <img
                  src="../../src/assets/tailwind.png"
                  alt=""
                  className="h-10"
                />
              </div>
            </div>
            <div className="flex  flex-col gap-4 col-span-2 border-2  p-4 rounded-lg shadow-lg items-center">
              <H4>Database</H4>
              <div className="flex w-full gap-10 items-center justify-center">
                <img src="../../src/assets/mongo.png" alt="" className="h-8" />
              </div>
            </div>
            <div className="flex  flex-col gap-4 col-span-2 border-2  p-4 rounded-lg shadow-lg items-center">
              <H4>AI & ML</H4>
              <div className="flex w-full gap-10 items-center justify-center">
                <img src="../../src/assets/numpy.png" alt="" className="h-8" />
                <img src="../../src/assets/pandas.png" alt="" className="h-8" />
                <img src="../../src/assets/mat.png" alt="" className="h-8" />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="resume" className="w-full py-6 px-12">
          <H2 className="border-orange-500 border-b-2 w-fit">RESUME</H2>
        </TabsContent>
        <TabsContent value="work" className="w-full py-6 px-12">
          <H2 className="border-orange-500 border-b-2 w-fit">WORK</H2>
        </TabsContent>
        <TabsContent value="contact" className="w-full py-6 px-12">
          <H2 className="border-orange-500 border-b-2 w-fit">CONTACT</H2>
        </TabsContent>
      </Tabs>
    </div>
  );
}
