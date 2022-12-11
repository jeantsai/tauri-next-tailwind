import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <>
      <header className="sticky flex top-0 p-5 justify-between max-w-5xl mx-auto z-20">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/jjeantsai/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCyshaJyDDH_Qn7GsWp2OzWw"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="jeantsai_qq"
            network="wechat"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github/jeantsai"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>

        <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300">
          <SocialIcon network="email" fgColor="grey" bgColor="transparent" />
          <p className="hidden sm:inline-flex text-sm text-gray-400">联系我</p>
        </motion.div>
      </header>
    </>
  );
}

export default Header;
