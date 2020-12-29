import { ADD_FOOD, DELETE_FOOD} from './types';

export const addFood = (price,search_image,brands_filter_facet,adet) => (
  {
    type: ADD_FOOD,
    data:{price,search_image,brands_filter_facet,adet} 
  }
);

export const deleteFood = (key) => (
  {
    type: DELETE_FOOD,
    key: key
  }
);


