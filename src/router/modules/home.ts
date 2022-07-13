
const Layout = () => import("/@/layouts/default/index.vue");

const homeRouter = {
  path: "/",
  name: "home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "home-filled",
    title: "menus.hshome",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("/@/views/home.vue"),
      meta: {
        title: "menus.hshome"
      }
    }
  ]
};

export default homeRouter;
