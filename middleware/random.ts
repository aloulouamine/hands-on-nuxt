import { Middleware } from '@nuxt/types'

const randomMiddleware: Middleware = ({ store }) => {
  console.log('Calculating random value in server.')
  store.commit('random/SetValue', Math.floor(Math.random() * 10))
}

export default randomMiddleware
