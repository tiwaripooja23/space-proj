import { SpaceOperationAction } from "../../actionSpace/spaceOperationAction";

/**
 * @description 
 * @param state - store's state
 * @param action - sction dispatching.....
 */
const spaceListReducer = (
  state = {
    spaceList: [],
  },
  action: { type: any; payload?: any }
) => {
  switch (action.type) {
    case SpaceOperationAction.SPACE_LIST_RESPONSE:
      return {
        ...state,
        spaceList: action.payload,
      };
    case SpaceOperationAction.SPACE_LIST_RESPONSE_ERROR:
      return {
        ...state,
        spaceList: [],
        spaceListError: action.payload,
      };
    default:
      return state;
  }
};

export default spaceListReducer;
