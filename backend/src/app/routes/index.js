import express from "express";
import { MemberRoutes } from "../modules/member/member.routes.js";
import { AuthRoutes } from "../modules/auth/auth.routes.js";

const router = express.Router();
const moduleRoutes = [
  { path: "/member", route: MemberRoutes },
  { path: "/auth", route: AuthRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
