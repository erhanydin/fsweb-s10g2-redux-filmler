import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";


const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoriteReducer = (state = initialState, action) => {
    
    // Var olup olmadığının kontrolü
    const control = (id) => {
        let control = true;
        state.favorites.forEach(favori => {
            if (favori.id === id) {
                control = false
            }
        })
        return control;
    }



    switch (action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !(state.displayFavorites)
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: control(action.payload.id)
                    ?
                    [...state.favorites, action.payload]
                    :
                    state.favorites

            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state;
    }
}

export default favoriteReducer;