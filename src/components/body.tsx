import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { H2, P, H4, PBold } from "./styledComponents";
import { RiGraduationCapLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

export default function Body() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div>
      <Tabs defaultValue="home" onValueChange={setActiveTab}>
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

        {activeTab === "home" && (
          <TabsContent
            value="home"
            className="w-full py-2 px-12 flex flex-col gap-4"
          >
            <H2 className="border-orange-500 border-b-2 w-fit">ABOUT ME</H2>
            <P className="text-justify">
              Welcome to my portfolio! I am an enthusiastic frontend developer
              from Nepal, specializing in React. With a passion for crafting
              engaging and user-friendly websites, I thrive on transforming
              ideas into digital experiences. My goal is to leverage my skills
              to create innovative solutions that enhance the web experience for
              users.
            </P>
            <H2 className="border-orange-500 border-b-2 w-fit">TECH STACK</H2>
            <div className="grid grid-cols-4 gap-6">
              <div className="flex  flex-col gap-4 col-span-2 border-2 p-4 rounded-lg shadow-lg items-center">
                <H4>Languages</H4>
                <div className="flex w-full gap-10 items-center justify-center">
                  <img src="../../src/assets/js.png" alt="" className="h-8" />
                  <img src="../../src/assets/ts.png" alt="" className="h-8" />
                  <img src="../../src/assets/py.png" alt="" className="h-8" />
                </div>
              </div>
              <div className="flex  flex-col gap-4 col-span-2 border-2 p-4 rounded-lg shadow-lg items-center">
                <H4>Frameworks & Libraries</H4>
                <div className="flex w-full gap-10 items-center justify-center">
                  <img
                    src="../../src/assets/react.png"
                    alt=""
                    className="h-8"
                  />
                  <img src="../../src/assets/ex.png" alt="" className="h-8" />
                  <img
                    src="../../src/assets/tailwind.png"
                    alt=""
                    className="h-10"
                  />
                </div>
              </div>
              <div className="flex  flex-col gap-4 col-span-2 border-2 p-4 rounded-lg shadow-lg items-center">
                <H4>Database</H4>
                <div className="flex w-full gap-10 items-center justify-center">
                  <img
                    src="../../src/assets/mongo.png"
                    alt=""
                    className="h-8"
                  />
                </div>
              </div>
              <div className="flex  flex-col gap-4 col-span-2 border-2 p-4 rounded-lg shadow-lg items-center">
                <H4>AI & ML</H4>
                <div className="flex w-full gap-10 items-center justify-center">
                  <img
                    src="../../src/assets/numpy.png"
                    alt=""
                    className="h-8"
                  />
                  <img
                    src="../../src/assets/pandas.png"
                    alt=""
                    className="h-8"
                  />
                  <img src="../../src/assets/mat.png" alt="" className="h-8" />
                </div>
              </div>
            </div>
          </TabsContent>
        )}

        {activeTab === "resume" && (
          <TabsContent
            value="resume"
            className="w-full py-6 px-12 flex flex-col gap-4"
          >
            <H2 className="border-orange-500 border-b-2 w-fit">RESUME</H2>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-4 border-2  rounded-lg flex flex-col gap-2">
                <div className="border-b-2 p-2">
                  <H4 className="flex gap-2 items-center">
                    <RiGraduationCapLine className="text-orange-500" />{" "}
                    Education
                  </H4>
                  <div className="flex flex-col gap-2">
                    <P>2019 - 2021</P>
                    <PBold>10+2, Science</PBold>
                    <P>Trinity International College, Kathmandu</P>
                  </div>
                </div>
                <div className="border-b-2 p-2">
                  <div className="flex flex-col gap-2">
                    <P>2022 - Present</P>
                    <PBold>Bsc (Hons) Computing</PBold>
                    <P>Itahari International College, Morang</P>
                  </div>
                </div>
              </div>
              <div className="col-span-4 border-2  rounded-lg flex flex-col gap-2">
                <div className="border-b-2 p-2">
                  <H4 className="flex gap-2 items-center">
                    <HiOutlineOfficeBuilding className="text-orange-500" />{" "}
                    Experience
                  </H4>
                  <div className="flex flex-col gap-2">
                    <P>July 2024 - September 2024</P>
                    <PBold>React Internship</PBold>
                    <P>InfoDevelopers Pvt Ltd, Sanepa-02</P>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        )}

        {activeTab === "work" && (
          <TabsContent
            value="work"
            className="w-full py-6 px-12 flex flex-col gap-4"
          >
            <H2 className="border-orange-500 border-b-2 w-fit">WORK</H2>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 border-2 rounded-lg flex flex-col gap-2 overflow-hidden">
                <img
                  src="../../src/assets/ims.png"
                  alt="ims"
                  className="w-full aspect-video"
                />
                <div className="p-2 flex flex-col gap-2">
                  <PBold className="text-center">
                    Inventory Management System
                  </PBold>
                  <P className="text-center">TypeScript, React, Tailwind</P>
                </div>
              </div>
              <div className="col-span-2 border-2 rounded-lg flex flex-col gap-2 overflow-hidden ">
                <img
                  src="../../src/assets/bookstore.jpg"
                  alt="ims"
                  className="w-full aspect-video"
                />
                <div className="p-2 flex flex-col gap-2">
                  <PBold className="text-center">
                    Book Store Admin Pannel CRUD
                  </PBold>
                  <P className="text-center">TypeScript, React, Tailwind</P>
                </div>
              </div>
            </div>
          </TabsContent>
        )}

        {activeTab === "contact" && (
          <TabsContent value="contact" className="w-full py-6 px-12">
            <H2 className="border-orange-500 border-b-2 w-fit">CONTACT</H2>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
