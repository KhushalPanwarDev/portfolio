import { RiReactjsLine } from "react-icons/ri";
import {
  SiAntdesign,
  SiBootstrap,
  SiRedux,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandFramerMotion,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
} from "react-icons/tb";
import { motion } from "framer-motion";
import { Tooltip } from "antd";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="React" trigger="hover">
            <RiReactjsLine className="text-6xl text-cyan-400" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Next js" trigger="hover">
            <TbBrandNextjs className="text-6xl text-pink-600" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Typescript" trigger="hover">
            <TbBrandTypescript className="text-6xl text-green-500" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Redux" trigger="hover">
          <SiRedux className="text-6xl text-purple-700" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Scss" trigger="hover">
          <SiSass className="text-6xl text-fuchsia-500 " />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Html" trigger="hover">
          <TbBrandHtml5 className="text-6xl text-slate-400" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Css" trigger="hover">
          <TbBrandCss3 className="text-6xl text-amber-200" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Javascript" trigger="hover">
          <TbBrandJavascript className="text-6xl text-sky-700" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Antdesign" trigger="hover">
          <SiAntdesign className="text-6xl text-orange-500" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Bootstrap" trigger="hover">
          <SiBootstrap className="text-6xl text-violet-700" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="Tailwindcss" trigger="hover">
          <SiTailwindcss className="text-6xl text-emerald-700" />
          </Tooltip>
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <Tooltip title="FramerMotion" trigger="hover">
          <TbBrandFramerMotion className="text-6xl text-indigo-700" />
          </Tooltip>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
