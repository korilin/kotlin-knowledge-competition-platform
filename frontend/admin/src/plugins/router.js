import { createRouter, createWebHashHistory } from "vue-router";
import Profile from "../views/Profile.vue";
import Error from "../views/Error.vue";
import Contests from "../views/Contests.vue";
import ContestForm from "../views/ContestForm.vue";
import Contest from "../views/Contest.vue";
import Questions from "../views/Questions.vue";
import Question from "../views/Question.vue";
import QuestionForm from "../views/QuestionForm.vue";
import Login from "../Login.vue";

const routes = [
  { path: "/login", component: Login, name: "login" },
  {
    path: "/",
    redirect: (to) => {
      return { path: "/profile" };
    },
  },
  { path: "/profile", component: Profile, name: "profile" },
  { path: "/contests", component: Contests, name: "contests" },
  { path: "/contets/new", component: ContestForm, name: "contest-new" },
  {
    path: "/contest/item/:contestId",
    component: Contest,
    name: "contest-item"
  },
  { path: "/questions", component: Questions, name: "questions" },
  { path: "/question/new", component: QuestionForm, name: "question-new" },
  {
    path: "/question/item/:questionId",
    component: Question,
    name: "question-item",
  },
  { path: "/error", component: Error },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
