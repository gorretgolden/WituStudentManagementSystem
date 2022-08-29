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
import CourseUnits from "views/CourseUnits";
import Semisters from "views/Semisters";
import Roles from "views/Roles";

const dashboardRoutes = [
  {
    upgrade: true,
    path: "/upgrade",
    name: "View Site",
    icon: "nc-icon nc-alien-33",
    component: Upgrade,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Admin Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/roles",
    name: "Roles",
    icon: "nc-icon nc-notes",
    component: Roles,
    layout: "/admin"
  },
  {
    path: "/courses",
    name: "Courses",
    icon: "nc-icon nc-paper-2",
    component: Courses,
    layout: "/admin"
  },
  {
    path: "/semisters",
    name: "Semisters",
    icon: "nc-icon nc-atom",
    component: Semisters,
    layout: "/admin"
  },
  {
    path: "/programs",
    name: "Programs",
    icon: "nc-icon nc-atom",
    component: Programs,
    layout: "/admin"
  },
  {
    path: "/course_units",
    name: "CourseUnits",
    icon: "nc-icon nc-atom",
    component: CourseUnits,
    layout: "/admin"
  },
  {
    path: "/tutors",
    name: "Tutors",
    icon: "nc-icon nc-notes",
    component: TutorsList,
    layout: "/admin"
  },
  
  {
    path: "/students",
    name: "Students",
    icon: "nc-icon nc-notes",
    component: StudentList,
    layout: "/admin"
  },
 

  {
    path: "/exams",
    name: "Exams",
    icon: "nc-icon nc-pin-3",
    component: Exams,
    layout: "/admin"
  },
  {
    path: "/results",
    name: "Results",
    icon: "nc-icon nc-pin-3",
    component: Results,
    layout: "/admin"
  },
 
];

export default dashboardRoutes;
