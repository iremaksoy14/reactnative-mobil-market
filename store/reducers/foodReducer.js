import { ADD_FOOD, DELETE_FOOD,ADD_2FOOD } from '../actions/types';


const initialState = {
  foodList: []
}

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodList: state.foodList.concat({
          key: Math.random(),
          price: action.data.price,
          search_image:action.data.search_image,
          brands_filter_facet:action.data.brands_filter_facet,
          adet:action.data.adet
        })
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodList: state.foodList.filter((item) =>
          item.key !== action.key)
      };

     
       default:
         return state;
  }
}

export default foodReducer;