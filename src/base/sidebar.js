/** @format */

import {
  AiFillHome,
  AiFillClockCircle,
  AiFillStar,
  AiFillSetting,
} from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import {
  RiCompassDiscoverFill,
  RiSlideshow3Fill,
  RiMovie2Fill,
} from "react-icons/ri";
import { MdOutlineTrendingUp, MdMovie } from "react-icons/md";
export const sidebar = [
  {
    group: "Menu",
    items: [
      {
        name: "Home",
        path: "/",
        icon: <AiFillHome></AiFillHome>,
      },

      {
        name: "Find video",
        path: "/discover",
        icon: <RiCompassDiscoverFill></RiCompassDiscoverFill>,
      },
    ],
  },
  {
    group: "",
    items: [
      // {
      //   name: "Recent",
      //   path: "/recent",
      //   icon: <AiFillClockCircle></AiFillClockCircle>,
      // },
      {
        name: "Trending video",
        path: "/trending",
        icon: <MdOutlineTrendingUp></MdOutlineTrendingUp>,
      },
      // {
      //   name: "Top rated",
      //   path: "/top_rated",
      //   icon: <AiFillStar></AiFillStar>,
      // },
    ],
  },
  {
    group: "Categories",
    items: [
      {
        name: "TV Series",
        path: "/tv",
        icon: <RiMovie2Fill></RiMovie2Fill>,
      },
      {
        name: "Movies",
        path: "/movie",
        icon: <MdMovie></MdMovie>,
      },
    ],
  },
];
