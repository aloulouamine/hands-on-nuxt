interface RandomState {
  value: number
}

export const state = () =>
  <RandomState>{
    value: 0,
  }

export const mutations = {
  SetValue(state: RandomState, value: number) {
    state.value = value
  },
}
