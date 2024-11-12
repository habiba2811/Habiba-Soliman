import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { DiRedis } from 'react-icons/di';
import { BiLogoPostgresql } from 'react-icons/bi';
import { FaNodeJs, FaDocker, FaAws } from 'react-icons/fa';

import {
  SiTypescript,
  SiGit,
  SiPowerbi,
  SiTerraform,
  SiMongodb,
} from 'react-icons/si';
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 ">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-7xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaDocker className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPowerbi className="text-7xl text-yellow-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaAws className="text-7xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTerraform className="text-7xl text-purple-700" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
