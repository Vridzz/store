import Update from "./views/profile-sections/Upload.jsx";
import RecordList from "./views/profile-sections/DoctorTableList.jsx";
import DoctorUserpage from "./views/profile-sections/DoctorUserpage.jsx";

var dashRoutes = [
  {
    path: "/profile",
    name: "My Profile",
    icon: "users_single-02",
    component: DoctorUserpage,
    layout: "/doctor"
  },
  
  {
    path: "/view",
    name: "View Patients",
    icon: "files_paper",
    component: RecordList,
    layout: "/doctor"
  }
  // {
  //   path: "/update",
  //   name: "Update Records",
  //   icon: "design-2_ruler-pencil",
  //   component: Update,
  //   layout: "/doctor"
  // },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "objects_spaceship",
  //   component: Upgrade,
  //   layout: "/doctor"
  // }
];
export default dashRoutes;
