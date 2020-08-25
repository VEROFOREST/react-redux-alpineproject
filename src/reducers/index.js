import legende from '../images/configurateur/modele/selection/legende.png';
import pure from '../images/configurateur/modele/selection/pure.png';
import janteLegende from '../images/configurateur/jantes/selection/jante-legende.jpg';
// import janteWhiteLegende from '../images/configurateur/jantes/vues/couleur-blanc_jante-legende(2).jpg';
// import janteBlueLegende from '../images/configurateur/jantes/vues/couleur-bleu_jante-legende(3).jpg';
// import janteBlackLegende from '../images/configurateur/jantes/vues/couleur-noir_jante-legende(1).jpg';



const initialState = {
//   //TODO : complete players {} and monster{}
  version: {
    1: { name: "legende", px: 58500, img:{legende}, id: 1 },
    2: { name: "pure", px: 54700, img:{pure}, id: 2 }},


  // jantes : {
  //   1: {name:"legende", px: 0, imgCard:{janteLegende}, imgWhite:{janteWhiteLegende},imgBlue:{janteBlueLegende}, imgBlack:{janteBlackLegende}, id:1},
  //  2: {name:"serac", px: 0, imgCard:{janteSerac}, imgWhite:{janteWhiteSerac},imgBlue:{janteBlueSerac}, imgBlack:{janteBlackSerac}, id:2},
  //   3: {name:"standard", px: 0, imgCard:{janteStandard}, imgWhite:{janteWhiteStandard},imgBlue:{janteBlueStandard}, imgBlack:{janteBlackStandard}, id:3},
  // }

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