import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/Router'
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/* 
CONSIGNES :
● Les paramètres des routes doivent être gérés par React Router dans l'URL pour récupérer les infos de chaque logement.
● une page par route.
● page 404 pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.

PAGES :
- accueil : header, bannière 1, mosaïque logements, footer
- à propos : header, bannière 2, contenu, footer
- page logement : header, contenu, footer

COMPOSANTS :
- header
- footer
- card logement
*/
