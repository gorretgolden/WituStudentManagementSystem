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
    path: "/user",
    name: "tutor Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/tutor"
  },
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-notes",
    component: StudentList,
    layout: "/tutor"
  },
  {
    path: "/tutors",
    name: "Tutors",
    icon: "nc-icon nc-notes",
    component: TutorsList,
    layout: "/tutor"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "nc-icon nc-paper-2",
    component: Courses,
    layout: "/tutor"
  },
  {
    path: "/programs",
    name: "Programs",
    icon: "nc-icon nc-atom",
    component: Programs,
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
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "nc-icon nc-bell-55",
  //   component: Notifications,
  //   layout: "/tutor"
  // }
];

export default tutorDashboardRoutes;
