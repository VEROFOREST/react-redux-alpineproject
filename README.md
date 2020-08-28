This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




import bleulegende from '../images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-1.jpg';
import bleulegende2 from '../images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-2.jpg';
import bleulegende3 from '../images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-3.jpg';
import bleulegende4 from '../images/configurateur/modele/legende/modele_legende-couleur_bleu-jante_legende-4.jpg';

import bleupure from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (1).jpg';
import bleupure2 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (2).jpg';
import bleupure3 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (3).jpg';
import bleupure4 from '../images/configurateur/modele/pure/modele_pure-couleur_bleu-jante_serac (4).jpg';



import blanclegende from '../images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-1.jpg';
import blanclegende2 from '../images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-2.jpg';
import blanclegende3 from '../images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-3.jpg';
import blanclegende4 from '../images/configurateur/modele/legende/modele_legende-couleur_blanc-jante_legende-4.jpg';

import blancpure from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (1).jpg';
import blancpure2 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (2).jpg';
import blancpure3 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (3).jpg';
import blancpure4 from '../images/configurateur/modele/pure/modele_pure-couleur_blanche-jante_serac (4).jpg';



import noirlegende from '../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-1.jpg';
import noirlegende2 from '../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-2.jpg';
import noirlegende3 from '../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-3.jpg';
import noirlegende4 from '../images/configurateur/modele/legende/modele_legende-couleur_noir-jante_legende-4.jpg';

import noirpure from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (1).jpg';
import noirpure2 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (2).jpg';
import noirpure3 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (3).jpg';
import noirpure4 from '../images/configurateur/modele/pure/modele_pure-couleur_noire-jante_serac (4).jpg';



 const displayColorSelectionCards = () => {
        
        return Object.keys(couleursChoix).map(key => 
            // return console.log(couleurChoix[key].key)
        (
       
        <BoutonCard key={couleursChoix[key].key} couleur={couleursChoix[key]} />
                
        ));
      }

      pages couleurs
      import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FooterComponent from './footer';
import Button from 'react-bootstrap/Button';
import BoutonCard from './boutonCard';

import CarouselComponent from './carousel';
import {useSelector} from 'react-redux'


const Couleurs = () => {

  const  couleursChoix= useSelector((state)=> state.couleurs)

  console.log(couleursChoix)

     const displayColorSelectionCards = () => {
        
        return Object.keys(couleursChoix).map(key => 
            // return console.log(couleurChoix[key].key)
        (
       
        <BoutonCard key={couleursChoix[key].key} couleur={couleursChoix[key]} />
                
        ));
      }
    





    return (
      <div>

        <CarouselComponent/>
        {displayColorSelectionCards()}
        <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./jantes">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Jantes</span>
              </div>
          </Button>
          </div>

      </div>
    );

}

export default Couleurs;
bouton card
import React from 'react';
import '../App.css';
import BoutonCarousel from './boutonCarrousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FooterComponent from './footer';
import Button from 'react-bootstrap/Button';
import BoutonCard from './boutonCard';



const Couleurs = () => {

    return (
      <div className="App">

        <BoutonCarousel/>
        <BoutonCard/>
        <div className="footer">
          <FooterComponent/>
          <Button className="footer_boutonOption" href="./jantes">
              <div className="footer_boutonContent">
              <span className="footer_boutonContentSpan">Option suivante: Jantes</span>
              </div>
          </Button>

        </div>

      </div>
    );

}

export default Couleurs;
