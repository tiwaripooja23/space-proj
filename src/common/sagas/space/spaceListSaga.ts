import { put, takeLatest, call } from "redux-saga/effects";
import { spaceListAPi } from "../../api/spaceApi";
import { SpaceOperationAction } from "../../actionSpace/spaceOperationAction";

export function* getSpaceListDetails() {
  yield takeLatest(SpaceOperationAction.GET_SPACE_VIEW_LIST, getSpaceListDetail);
}
function* getSpaceListDetail(action: any) {
     let response = yield call(spaceListAPi, action.params);
        if (response && !response.error && response != undefined) {
     yield put({
      type: SpaceOperationAction.SPACE_LIST_RESPONSE,
      payload: response,
    
    
    });

  } else {
    yield put({


      type: SpaceOperationAction.SPACE_LIST_RESPONSE_ERROR,
      payload: response,
    });
  }
}
