import { SpaceOperationAction } from "../../../actionSpace/spaceOperationAction";

export const getSpaceList = (params: any) => ({
  params,
  type: SpaceOperationAction.GET_SPACE_VIEW_LIST,
});
