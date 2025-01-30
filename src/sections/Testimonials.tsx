import leetcodeAvatar from "@/assets/images/LeetCode_logo_rvs.webp";
import gfgAvatar from "@/assets/images/gfg.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Image from "next/image";
import { Fragment } from "react";

const profiles = [
  {
    name: "LeetCode Profile",
    link: "https://leetcode.com/u/ShaswataRoy_007/",
    description:
      "Check out my LeetCode profile where I solve various DSA problems and participate in contests.",
    avatar: leetcodeAvatar,
  },
  {
    name: "GeeksforGeeks Profile",
    link: "https://www.geeksforgeeks.org/user/shaswatalb5h/",
    description:
      "Explore my GeeksforGeeks profile with detailed solutions and coding challenges.",
    avatar: gfgAvatar,
  },
];

export const TestimonialsSection  = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebbrow="Coding Profiles"
          title="My Coding Journey"
          description="Explore my coding profiles to see my problem-solving skills and achievements."
        />
        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip 
        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        py-4 -my-4"
        >
          <div
            className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s]
          hover:[animation-play-state:paused]"
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {profiles.map((profile, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:max-w-md p-8 
                    md:p-10 hover:-rotate-3 transition duration-300"

                  >
                    <div className="flex items-center gap-4">
                      <div className="size-14 bg-gray-700 inline-flex justify-center items-center rounded-full flex-shrink-0">
                        <Image
                          src={profile.avatar}
                          alt={profile.name}
                          className="max-w-full rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{profile.name}</div>
                        <a
                          href={profile.link}
                          target="_blank"
                          className="text-sm text-blue-400 underline"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm">
                      {profile.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
