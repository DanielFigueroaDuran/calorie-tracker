import { Activity } from "../types"

export type ActivityActions =
      { type: 'save-activity', payload: { newActivity: Activity } } |
      { type: 'set-active', payload: { id: Activity['id'] } }

type ActivityState = {
      activities: Activity[],
      activeId: Activity['id']
}

export const initialState: ActivityState = {
      activities: [],
      activeId: ''
}

export const activityReducer = (
      state: ActivityState = initialState,
      action: ActivityActions
) => {
      if (action.type === 'save-activity') {
            // console.log(action.payload.newActivity);
            return {
                  ...state,
                  activities: [...state.activities, action.payload.newActivity]
            }
      }

      if (action.type === 'set-active') {
            return {
                  ...state,
                  activeId: action.payload.id
            }
      }

      return state;
}