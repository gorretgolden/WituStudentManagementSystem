import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import TutorsList from "views/TutorsList";
import Courses from "views/Courses";
import Programs from "views/Programs";
import Notes from "views/Notes";
import Assignments from "views/Assignments";
import Exams from "views/Exams";
import Results from "views/Results";
import TutorStudentList from "views/tutor/students";
import TutorPrograms from "views/tutor/program";
import TutorProfile from "views/tutor/profile";

const tutorDashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "View Site",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/tutor"
  },
  {
    path: "/dashboard",
    name: "tutor Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/tutor"
  },
  {
    path: "/profile",
    name: "tutor Profile",
    icon: "nc-icon nc-circle-09",
    component: TutorProfile,
    layout: "/tutor"
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-notes",
    component: TutorStudentList,
    layout: "/tutor"
  },
 
  {
    path: "/programs",
    name: "Programs",
    icon: "nc-icon nc-atom",
    component:TutorPrograms,
    layout: "/tutor"
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "nc-icon nc-pin-3",
    component: Notes,
    layout: "/tutor"
  },
  {
    path: "/assigments",
    name: "Assignments",
    icon: "nc-icon nc-pin-3",
    component: Assignments,
    layout: "/tutor"
  },
  {
    path: "/exams",
    name: "Exams",
    icon: "nc-icon nc-pin-3",
    component: Exams,
    layout: "/tutor"
  },
  {
    path: "/results",
    name: "Results",
    icon: "nc-icon nc-pin-3",
    component: Results,
    layout: "/tutor"
  },
  
];

export default tutorDashboardRoutes;
