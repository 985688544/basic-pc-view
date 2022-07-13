
const Layout = () => import("/@/layouts/default/index.vue");

const remainingRouter = [
  {
    path: "/login",
    name: "login",
    component: () => import("/@/views/sys/login/Login.vue"),
    meta: {
      title: "menus.hslogin",
      showLink: false,
      rank: 101
    }
  },
  {
    path: "/redirect",
    component: Layout,
    meta: {
      icon: "home-filled",
      title: "menus.hshome",
      showLink: false,
      rank: 104
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        name: "redirect",
        component: () => import("/@/views/sys/redirect/index.vue")
      }
    ]
  }
];

export default remainingRouter;
