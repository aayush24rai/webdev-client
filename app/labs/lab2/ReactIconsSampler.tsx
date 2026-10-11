import "@/app/labs/lab2/tailwind/utilities.css";
import { FaCalendar, FaEnvelopeOpenText, FaRegClock } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBookBible } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";
import { MdSchool } from "react-icons/md";
import { HiAcademicCap } from "react-icons/hi2";
import { TbBrain } from "react-icons/tb";
import { BsShieldLock } from "react-icons/bs";
export default function ReactIconsSampler() {
  return (
    <div id="wd-react-icons-sampler" className="mb-4 font-sans">
      <h2 className="text-lg font-semibold">React Icons Sampler</h2>
      <div className="flex gap-3 text-3xl">
        <VscAccount />
        <AiOutlineDashboard />
        <FaBookBible />
        <FaCalendar />
        <FaEnvelopeOpenText />
        <FaRegClock />
        {/* Sample icons from two more families: md and hi2 */}
        <MdSchool id="wd-ai-icon-md" className="text-4xl text-blue-600" />
        <HiAcademicCap id="wd-ai-icon-hi2" className="text-4xl text-blue-600" />
        {/* My icons: a brain for ML/NLP (tb) and a lock for cybersecurity (bs) */}
        <TbBrain id="wd-my-icon-ml" className="text-4xl text-purple-700" />
        <BsShieldLock id="wd-my-icon-security" className="text-4xl text-green-700" />
      </div>
    </div>
  );
}
