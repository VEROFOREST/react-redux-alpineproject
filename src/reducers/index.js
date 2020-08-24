import legende from '../images/configurateur/modele/selection/legende.png';
import pure from '../images/configurateur/modele/selection/pure.png';



const initialState = {
//   //TODO : complete players {} and monster{}
  version: {
    1: { name: "legende", px: 58500, img:{legende}, id: 1 },
    2: { name: "pure", px: 54700, img:{pure}, id: 2 }}

//   monster: {
//     pv: 10,
//     pvMax: 300
//   },
//   hasPlayed : []
}; 


 
function rootReducer(state = initialState, action) {
  
//   if (action.type === "CHOICE_TYPE") {
//     // let currentPlayer=[action.payload]
    
    
//         return {...state,
        
//          version: {...state.version, 
//                 [action.payload]: {...state.version [action.payload],
//                 pv: state.version.pv-5}}
   
//         }

      
  }
//   if (action.type === "HIT_BACK") {
    
//     return {...state, 
//                     players: {...state.players, 
//                     [action.payload]: {...state.players[action.payload],
//                     pv:state.players[action.payload].pv-5}}}
                    
//     }
  
//   return state;
 



 
export default rootReducer;