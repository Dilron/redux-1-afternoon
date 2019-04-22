import {createStore, bindActionCreators} from 'redux'

let initialState = {
    recipeName: '',
    recipeCategory: '',
    authorFirstName: '',
    authorLastName: '',
    ingredients: [],
    instructions: [],
    recipesList: []
}

export const UPDATENAME = 'UPDATENAME'
export const UPDATECATEGORY = 'UPDATECATEGORY'
export const UPDATEFIRSTNAME = 'UPDATEFIRSTNAME'
export const UPDATELASTNAME = 'UPDATELASTNAME'
export const UPDATEINGREDIENT = 'UPDATEINGREDIENT'
export const UPDATEINSTRUCTION = 'UPDATEINSTRUCTION'
export const UPDATERECIPES = 'UPDATERECIPES'
export const DELETERECIPE = 'DELETERECIPE'

function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATENAME: {
            return {...state, recipeName: action.payload}
        }
        case UPDATECATEGORY: {
            return {...state, recipeCategory: action.payload}
        }
        case UPDATEFIRSTNAME: {
            return {...state, authorFirstName: action.payload}
        }
        case UPDATELASTNAME: {
            return {...state, authorLastName: action.payload}
        }
        case UPDATEINGREDIENT: {
            const newIngredients = [...state.ingredients, action.payload]
            return {...state, ingredients: newIngredients}
        }
        case UPDATEINSTRUCTION: {
            const newInstructions = [...state.instructions, action.payload]
            return {...state, instructions: newInstructions}
        }
        case UPDATERECIPES: {
            const newRecipe = {name: state.recipeName, category: state.recipeCategory, firstName: state.authorFirstName, lastName: state.authorLastName, ingredients: state.ingredients, instructions: state.instructions}
            return {recipeName: '', recipeCategory: '',
            authorFirstName: '',
            authorLastName: '',
            ingredients: [],
            instructions: [], recipesList: [...state.recipesList, newRecipe]}
        }
        case DELETERECIPE: {
            const newList = []
            state.recipesList.forEach((ele) => {
                if(state.recipesList.indexOf(ele) !== action.payload){
                    newList.unshift(ele)
                }
            })
            return {...state, recipesList: newList}
        }
        default:{
            return state
        }
    }
}

export default createStore(reducer)