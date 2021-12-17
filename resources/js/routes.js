import AllPosts from "./components/AllPosts.vue";
import CreatePost from "./components/CreatePost.vue";
import EditPost from "./components/EditPost.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: AllPosts,
    },
    {
        name: "create",
        path: "/create",
        component: CreatePost,
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditPost,
    },
];
