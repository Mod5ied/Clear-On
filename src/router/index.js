import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/HomePage";
import AssistPage from "../components/AssistPage";
import VideosPage from "../components/VideosPage";

import faculties from "../views/faculties";
import finals from "../views/finals";
import hostels from "../views/hostels";
import bioscience from "../views/facultylist/BioSci";
import engr from "../views/facultylist/Engr";
import pharm from "../views/facultylist/Pharm";
import physcience from "../views/facultylist/PhySci"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/assist",
    name: "AssistPage",
    component: AssistPage,
  },
  {
    path: "/videos",
    name: "VideosPage",
    component: VideosPage,
  },
  {
    path: "/faculties",
    name: "faculties",
    component: faculties,
  },
  {
    path: "/finals",
    name: "finals",
    component: finals,
  },
  {
    path: "/hostels",
    name: "hostels",
    component: hostels,
  },
  // below are router setup for faculties
  {
    path: "/bioscience",
    name: "bioscience",
    component: bioscience,
  },
  {
    path: "/engr",
    name: "engr",
    component: engr,
  },
  {
    path: "/pharm",
    name: "pharm",
    component: pharm,
  },
  {
    path: "/physcience",
    name: "physcience",
    component: physcience,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
