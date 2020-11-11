import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eb3a1b86 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _d33cd69c = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _360949f6 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _9bf51614 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _1fe93a76 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _7e941880 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _ce608f7a = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _eb3a1b86,
    children: [{
      path: "",
      component: _d33cd69c,
      name: "home"
    }, {
      path: "/login",
      component: _360949f6,
      name: "login"
    }, {
      path: "/register",
      component: _360949f6,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _9bf51614,
      name: "profile"
    }, {
      path: "/settings",
      component: _1fe93a76,
      name: "settings"
    }, {
      path: "/editor",
      component: _7e941880,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ce608f7a,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
