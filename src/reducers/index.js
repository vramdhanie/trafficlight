import { SWITCH_LIGHT } from "../actions";

const initialState = {
  lights: [
    {
      id: 1,
      color: 'green',
      on: true,
    },
    {
      id: 2,
      color: 'yellow',
      on: true
    },
    {
      id: 3,
      color: 'red',
      on: false
    }
  ]
};

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LIGHT: {
      const lights = [...state.lights];
      const light = lights.find(light => light.id === action.light_id);
      light.on = !light.on;
      return Object.assign({}, state, {
        lights: lights
      });
    }
  }
  return state;
};

export default lightReducer;
