import actionTypes from "../actions/actionTypes";

const initState = {
    isLoading: false,
    list: [{
            id: 1,
            title: "AAAAA",
            desc: "this A ,that a ,we are all an a",
            hasRead: false,
        },
        {
            id: 2,
            title: "BBBBB",
            desc: "this b ,that b ,we are all a b",
            hasRead: true,
        },
    ],
};

export default (state = initState, action) => {
    switch (action.type) {
        case actionTypes.START_NOTIFICATION_FETCH:
            return {
                ...state,
                list: action.payload.list
            }

            case actionTypes.MARK_NOTIFICATION_AS_READ_BY_ID:
                const newList = state.list.map((item) => {
                    if (item.id === action.payload.id) {
                        item.hasRead = true;
                    }
                    return item;
                });

                return {
                    ...state,
                    list: newList,
                };
            case actionTypes.MARK_NOTIFICATION_AS_UNREAD_BY_ID:
                const newListUn = state.list.map((item) => {
                    if (item.id === action.payload.id) {
                        item.hasRead = false;
                    }
                    return item;
                });

                return {
                    ...state,
                    list: newListUn,
                };
            case actionTypes.MARK_NOTIFICATION_AS_READ:
                const newListAll = state.list.map((t) => {
                    t.hasRead = true;
                    return t;
                });
                return {
                    ...state,
                    list: newListAll,
                };
            case actionTypes.START_NOTIFICATION_READ:
                return ({
                    ...state,
                    isLoading: true
                })
            case actionTypes.FINISH_NOTIFICATION_READ:
                return ({
                    ...state,
                    isLoading: false
                })
            default:
                return state;
    }
};