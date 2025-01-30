"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import customImage from "@/assets/images/3_body_problem.jpg";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import ExpressJs from "@/assets/icons/icons8-express-js (1).svg";
import NodeJSIcon from "@/assets/icons/icons8-js.svg";
import { Cardheader } from "@/components/CardHeader";
import { Toolbox } from "@/components/ToolboxItems";
import LocationCard from "@/components/LocationCard";
import {motion} from 'framer-motion'
import { useRef } from "react";

const toolBoxIcons = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML",
    iconType: HtmlIcon,
  },
  {
    title: "CSS",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Git/Github",
    iconType: GitHubIcon,
  },
  {
    title: "ExpressJS",
    iconType: ExpressJs,
  },
  {
    title: "NodeJS",
    iconType: NodeJSIcon,
  },
];

const interest = [
  {
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "5%",
  },
  {
    title: "Gameing",
    emoji: "🎮",
    left: "50%",
    top: "5%",
  },
  {
    title: "Football",
    emoji: "⚽",
    left: "10%",
    top: "35%",
  },
  {
    title: "Movies",
    emoji: "🍿",
    left: "35%",
    top: "40%",
  },
  {
    title: "Travel",
    emoji: "🧳",
    left: "70%",
    top: "40%",
  },
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebbrow="About Me"
          title="A Glimpse into my World"
          description="Learn more about eho I am, What I do and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <Cardheader
                title="Currently Watching"
                description="The show I'm following right now"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={customImage} alt="3-Body-Problem" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <Cardheader
                title="My Toolbox"
                description="Explore the realm of languages and technologies I wield with
                expertise"
                className=""
              />
              <Toolbox 
                toolBoxIcons={toolBoxIcons} 
                className="" 
                itemsWrpperClassName="animate-move-left [animation-duration:10s]"  
                />
              <Toolbox
                toolBoxIcons={toolBoxIcons}
                className="mt-6"
                itemsWrpperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <Cardheader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyondthe digital relam"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {interest.map((item) => (
                  <motion.div
                    key={item.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-t
                from-emerald-300 to-sky-400 rounded-full py-1.5 absolute overflow-y-hidden"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <LocationCard/>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
