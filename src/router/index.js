import { createRouter, createWebHistory, } from "vue-router";
import Style from "@/views/admin/StyleView.vue";
import HomePageLayout from '@/layouts/HomePageLayout.vue';
import AdminHome from "@/views/admin/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePageLayout,
    children: [
      {
        path: '/',
        name: 'home-page',
        component: () => import('@/views/user/HomePage.vue')
      },
      {
        meta: {
          title: "DomainVerifier",
        },
        path: "/domain-checker",
        name: "domain-checker",
        component: () => import("@/views/user/products/DomainVerifier.vue"),
      },
      {
        meta: {
          title: "EmailVerifier",
        },
        path: "/email-checker",
        name: "email-checker",
        component: () => import("@/views/user/products/EmailVerifier.vue"),
      },
      {
        meta: {
          title: "BulkEmailVerifier",
        },
        path: "/bulk-email-checker",
        name: "bulk-email-checker",
        component: () => import("@/views/user/products/BulkEmailVerifier.vue"),
      },
      {
        meta: {
          title: "Integration",
        },
        path: "/integration",
        name: "integration",
        component: () => import("@/views/user/products/Integration.vue")
      },
      {
        path: "integration/mailchimp",
        name: "mailchimp",
        component: () => import('@/views/user/integrations/ServiceDetails.vue')
      },
      {
        path: "integration/mailchimp/setup",
        name: "mailchimp-setup",
        component: () => import('@/views/user/integrations/MailChimp.vue')
      },
      {
        meta: {
          title: "Conatct",
        },
        path: "/contact",
        name: "contact",
        component: () => import("@/views/user/ContactPage.vue"),
      },
      {
        meta: {
          title: "Faq",
        },
        path: "/faq",
        name: "Faq",
        component: () => import("@/views/user/FaqPage.vue"),
      },
    ]
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/admin",
    name: "dashboard",
    component: AdminHome,
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/admin/TablesView.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/admin/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/admin/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/admin/UiView.vue"),
  },
  {
    meta: {
      title: "Responsive layout",
    },
    path: "/responsive",
    name: "responsive",
    component: () => import("@/views/admin/auth/ResponsiveView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/admin/auth/LoginPage.vue"),
  },
  {
    meta: {
      title: "Register",
    },
    path: "/register",
    name: "register",
    component: () => import("@/views/admin/auth/RegisterPage.vue"),
  },
  {
    meta: {
      title: "Forgot Password",
    },
    path: "/fogot-password",
    name: "fogot-password",
    component: () => import("@/views/admin/auth/ForgotPassword.vue"),
  },
  {
    meta: {
      title: "Check Email",
    },
    path: "/check-email",
    name: "check-email",
    component: () => import("@/views/admin/auth/CheckEmail.vue"),
  },
  {
    meta: {
      title: "Set New Password",
    },
    path: "/set-new-password",
    name: "set-new-password",
    component: () => import("@/views/admin/auth/SetNewPassword.vue"),
  },
  {
    meta: {
      title: "PasswordReset",
    },
    path: "/reset-password",
    name: "reset-password",
    component: () => import("@/views/admin/auth/PasswordReset.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/admin/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
