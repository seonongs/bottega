import { createWebHistory, createRouter } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/board/BoardView";
import BoardWrite from "@/views/board/BoardWrite";
import BoardDetail from "@/views/board/BoardDetail";
import BoardModify from "@/views/board/BoardModify";

const routes = [
    {
        path: "/",
        name: "HomeView",
        component: HomeView,
    },
    {
        path: "/board",
        name: "BoardView",
        component: BoardView,
    },
    {
        path: "/board-write",
        name: "BoardWrite",
        component: BoardWrite,
    },
    {
        path: "/board-detail/:id",
        name: "BoardDetail",
        component: BoardDetail,
    },
    {
        path: "/board-modify/:id",
        name: "BoardModify",
        component: BoardModify,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
