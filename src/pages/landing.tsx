import { H4, SmallText } from "../components/styledComponents";
import Navbar from "../components/navbar";
import Contact from "../components/contact";
import { Button } from "../components/ui/button";
import Body from "../components/body";

function Landing() {
  return (
    <div className="grid grid-cols-12 auto-rows-auto gap-4 px-6 ">
      <div className="col-span-full">
        <Navbar />
      </div>
      <div className="col-start-2 col-end-5 p-4 border-2 rounded-lg shadow-2xl flex flex-col gap-4">
        <div className="h-auto flex flex-col items-center">
          <img
            src="../../src/assets/presab.jpeg"
            alt="photo"
            className="h-40 w-40 object-cover object-center rounded-full"
          />
          <div className="flex flex-col items-center gap-4">
            <H4>Presab Khadka</H4>
            <SmallText className="text-coolgray-500">
              Frontend Developer
            </SmallText>
          </div>
        </div>

        <div className="shadow-lg p-6 border-2 rounded-lg">
          <Contact />
          <div className="flex justify-center">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/presabkhadka30/"
                target="_blank"
              >
                <img src="../../src/assets/fb.png" className="h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/presabkhadka30/"
                target="_blank"
              >
                <img src="../../src/assets/linkedin.png" className="h-10" />
              </a>
              <a
                href="https://www.instagram.com/presabkhadka30/"
                target="_blank"
              >
                <img src="../../src/assets/ig.png" className="h-10" />
              </a>
              <a href="https://github.com/presabkhadka" target="_blank">
                <img src="../../src/assets/git.png" className="h-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-7 p-4 border-2 rounded-lg shadow-2xl">
        <div className="w-full">
          <Body />
        </div>
      </div>
    </div>
  );
}
export default Landing;
