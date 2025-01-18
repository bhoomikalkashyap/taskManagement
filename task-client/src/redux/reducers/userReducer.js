import { USER_DATA_FAILED, USER_DATA_LOADED, USER_DATA_LOADING } from "../actions/returnType";
import { userData } from "../constants/initialStateData";
export const userReducer = (state = userData, action) => {
    switch (action.type) {
        case USER_DATA_LOADING:
            return {
                ...state,
                loading: true,
                success: false,
                error: false,
            };
        case USER_DATA_FAILED:
            return {
                ...state,
                loading: false,
                success: false,
                error: true,
                data: action.data,
            };
        case USER_DATA_LOADED:
            return {
                ...state,
                loading: false,
                success: true,
                error: false,
                data: action.data,
            };
        default:
            return state;
    }
};