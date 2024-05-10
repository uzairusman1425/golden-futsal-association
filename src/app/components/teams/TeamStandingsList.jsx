import React from "react";
import rm from "../../../../public/images/sidebar/teams/rm.png";

import Image from "next/image";

function TeamStandingsList() {
  return (
    <>
      <tbody className="flex w-full  justify-between h-16 overflow-y-auto lg:gap-16 text-white items-center  bg-primary rounded-xl mt-2">
        <tr className="flex gap-14 ">
          <th className="w-[30px] h-10 rounded-lg bg-green-500 flex items-center justify-center font-bold">
            1
          </th>

          <th className="flex items-center gap-2">
            <Image
              src={rm}
              width={30}
              className="bg-primary rounded-full"
              alt="rm.png"
            />
            Arsenal
          </th>
        </tr>
        <tr className="flex gap-[35px] ">
          <th>28</th>
          <th>19</th>
          <th>72</th>
          <th>22</th>
          <th>65</th>
          <th>26</th>
          <th>39</th>
          <th>64</th>
        </tr>
      </tbody>
    </>
  );
}

export default TeamStandingsList;
