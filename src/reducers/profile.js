import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
  GET_FILTER_PROFILES
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  bProfiles:[],
  repos: [],
  loading: true,
  error: {}
};

 const  profileReducer= (state = initialState, action) =>{
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        bProfiles:payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: []
      };
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        loading: false
      };
    case NO_REPOS:
      return {
        ...state,
        repos: []
      };
    case GET_FILTER_PROFILES:
      //console.log(payload.res,payload.word)
      return{
        ...state,
        profiles:  filterDataChecking(state.bProfiles,payload.word),
        loading: false
      }
    default:
      return state;
  }
}


const filterDataChecking=(profiles,word)=>{
  let filterObject = [];
   profiles.map((data,i)=>{
    if((data.company+' '.concat(data.education.join(' ')).concat(data.location).concat(data.skills.join(' ')).concat(' '+data.status)).toLowerCase().includes(word.toLowerCase())){
      filterObject.push(data);
     }
  
  })

  return filterObject;
 
}
export default profileReducer;
