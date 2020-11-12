import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fa8cb50 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _613ed2f6 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _1cea8283 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _657abe43 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _49c5ca6e = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _73d9f193 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _4c450190 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _7fa8cb50,
    children: [{
      path: "",
      component: _613ed2f6,
      name: "home"
    }, {
      path: "/login",
      component: _1cea8283,
      name: "login"
    }, {
      path: "/register",
      component: _1cea8283,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _657abe43,
      name: "profile"
    }, {
      path: "/settings",
      component: _49c5ca6e,
      name: "settings"
    }, {
      path: "/editor",
      component: _73d9f193,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4c450190,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
