import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { P, PBold } from "./styledComponents";

const data = [
  { title: "Phone", value: 9843440345, icon: <FaMobile /> },
  { title: "Email", value: "presabkhadka30@gmail.com", icon: <MdEmail /> },
  { title: "Location", value: "Itahari, Nepal", icon: <FaLocationDot /> },
];

export default function Contact() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="flex items-center mb-4 border-b pb-4">
          <div className="w-1/5">{item.icon}</div>
          <div className="w-4/5 flex flex-col">
            <PBold>{item.title}</PBold>
            <P>{item.value}</P>
          </div>
        </div>
      ))}
    </div>
  );
}
