const data = {
    resultGroundFloor : "",
    resultFirstFloor : "",
    resultAtticFloor : ""    
}
const ResultReducer = (state = data, action) => {
    switch (action.type) {
        case "resultGroundFloor":
            return {
                ...state,
                resultGroundFloor : action.payload
            };

        case "resultFirstFloor":
            return {
                ...state,
                resultFirstFloor : action.payload
            };
            
        case "resultAtticFloor":
            return {
                ...state,
                resultAtticFloor : action.payload
            };
            
    
        default:
            return state
    }
}

export default ResultReducer