import { motion } from "motion/react";
import { Card } from "./ui/card";
import { ArrowUpRight } from "lucide-react"
import { TextReveal } from "./ui/Typography";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
}

const ProjectCard = ({ projectInfo }: { projectInfo: ProjectCardProps }) => {

  return (
    <Card className="">
      <div className="absolute top-2 right-2 w-full h-full flex justify-end md:hidden">
        <div className="bg-white size-8 rounded-full text-black grid place-items-center">
          <ArrowUpRight />
        </div>
      </div>
      <div className="md:py-8 relative">
        <motion.div
          className="flex justify-between items-center max-md:hidden px-4"
        >
          <p className="text-sm md:text-xl font-semibold max-md:opacity-0">
            {projectInfo.title}
          </p>
          <button className="flex gap-2 items-center justify-center max-md:px-4">
            <TextReveal className="max-md:text-sm">Visit</TextReveal>
            <span className="bg-black text-white/80 rounded-full p-1">
              <ArrowUpRight />
            </span>
          </button>
        </motion.div>
      </div>
      <Image
        src={projectInfo.imageUrl}
        width={500}
        height={500}
        alt={projectInfo.title}
        className="h-[500px] w-[500px] object-contain object-center rounded-xl md:rounded-t-3xl"
      />
    </Card>
  )
}

export default ProjectCard;