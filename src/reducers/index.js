import legende from '../images/configurateur/modele/selection/legende.png';
import pure from '../images/configurateur/modele/selection/pure.png';

// jantes............................................................

import janteLegende from '../images/configurateur/jantes/selection/jante-legende.jpg';
import janteSerac from '../images/configurateur/jantes/selection/jante-serac.jpg';
import janteStandard from '../images/configurateur/jantes/selection/jante-standard.jpg';

import janteBlancLegende from '../images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg';
import janteBleuLegende from '../images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg';
import janteNoirLegende from '../images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg';
import janteBlancSerac from '../images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg';
import janteBleuSerac from '../images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg';
import janteNoirSerac from '../images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg';
import janteBlancStandard from '../images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg';
import janteBleuStandard from '../images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg';
import janteNoirStandard from '../images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg';


const initialState = {

  version: {
    1: { id: 1, name: "legende", px: 58500, img:legende},
    2: { id: 2, name: "pure", px: 54700, img:pure},
    },

  jantes : {
    1: {name: "legende", px: 0, imgCard:janteLegende, imgBlanc:janteBlancLegende,imgBleu:janteBleuLegende, imgNoir:janteNoirLegende, id:1},
    2: {name:"serac", px: 0, imgCard:janteSerac, imgBlanc:janteBlancSerac,imgBleu:janteBleuSerac, imgNoir:janteNoirSerac, id:2},
    3: {name:"standard", px: 0, imgCard:janteStandard}, imgBlanc:janteBlancStandard,imgBleu:janteBleuStandard, imgNoir:janteNoirStandard, id:3},
 

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

      
  // }
//   if (action.type === "HIT_BACK") {
    
//     return {...state, 
//                     players: {...state.players, 
//                     [action.payload]: {...state.players[action.payload],
//                     pv:state.players[action.payload].pv-5}}}
                    
//     }
  
  return state;
}



 
export default rootReducer;