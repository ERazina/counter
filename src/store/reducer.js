export const initialState = {
    counter: 0
};

export function doApp (state = initialState, action){
    switch (action.type) {
        case 'increase':
          return Object.assign({}, state, {
            counter: state.counter + 1
          })
        case 'decrease':
        return Object.assign({}, state, {
            counter: state.counter - 1
        })
          default:
              return state
        }
}