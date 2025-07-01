// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

export default clerkMiddleware((auth, req) => {
  const { userId } = auth();

  if (isProtectedRoute(req) && !userId) {
    return auth().redirectToSignIn({ returnBackUrl: req.url });
  }

  return undefined;
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // matches all except static files
    "/(api|trpc)(.*)",
  ],
};
