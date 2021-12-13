import { Middleware } from '@nuxt/types'

const randomMiddleware: Middleware = ({ store }) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      store.commit('random/SetValue', Math.floor(Math.random() * 10))
      resolve()
    }, 2000)
  )
}

export default randomMiddleware
