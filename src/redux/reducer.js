initialState = {
    username: '',
    profile_pic: ''
}

const UPDATE_USER = 'UPDATE_USER';
const LOGOUT = 'LOGOUT'

export const updateUserData = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                username: action.payload.user.username,
                profile_pic: action.payload.user.profile_pic
            }
        case LOGOUT:
            return {
                ...state,
                username: '',
                profile_pic: ''
            }
        default:
            return state;
    }
}