const data = {
    hurry : false,
}
const HurrayReducer = (state = data, action) => {
    switch (action.type) {
        case "hurray":
            return {
                ...state,
                hurry : action.payload
            };
            
    
        default:
            return state
    }
}

export default HurrayReducer