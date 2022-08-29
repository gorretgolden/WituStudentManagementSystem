import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import StudentList from "views/StudentsList";
import TutorsList from "views/TutorsList";
import Courses from "views/Courses";
import Programs from "views/Programs";
import Notes from "views/Notes";
import Assignments from "views/Assignments";
import Exams from "views/Exams";
import Results from "views/Results";

const studentDashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "View Site",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/student"
  },
  {
    path: "/dashboard",
    name: "student Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/student"
  },
  {
    path: "/user",
    name: "student Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/student"
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-notes",
    component: StudentList,
    layout: "/student"
  },
 
  {
    path: "/programs",
    name: "Programs",
    icon: "nc-icon nc-atom",
    component: Programs,
    layout: "/student"
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "nc-icon nc-pin-3",
    component: Notes,
    layout: "/student"
  },
  {
    path: "/assigments",
    name: "Assignments",
    icon: "nc-icon nc-pin-3",
    component: Assignments,
    layout: "/student"
  },
  {
    path: "/exams",
    name: "Exams",
    icon: "nc-icon nc-pin-3",
    component: Exams,
    layout: "/student"
  },
  {
    path: "/results",
    name: "Results",
    icon: "nc-icon nc-pin-3",
    component: Results,
    layout: "/student"
  },
  
];

export default studentDashboardRoutes;
