
import {Skill} from '../entities/skill';
import categoriesData from './categories';

//console.log(categoriesData);

const MaquetterUneApplication = new Skill(
  'maquetter une application',
  categoriesData[0]
);
const DevUneInterfaceDesktop = new Skill(
  'Développer une interface utilisateur de type desktop',
  categoriesData[0]
);
const DevComposantsAccesDonnées = new Skill(
  'Développer des composants d’accès aux données',
  categoriesData[0]
);
const DevFrontEndInterFaceUtilisateurWeb = new Skill(
  'Développer la partie front-end d’une interface utilisateur web',
  categoriesData[0]
);
const DevBackEndInterFaceUtilisateurWeb = new Skill(
  'Développer la partie back-end d’une interface utilisateur web',
  categoriesData[0]
);

const ConcevoirUneBDD = new Skill(
  'concevoir une base de données',
  categoriesData[1]
);
const MettreEnPlaceBDD = new Skill(
  'mettre en place une base données',
  categoriesData[1]
);
const DevCompDeLangUneBDD = new Skill(
  "Développer des composants de le language d'une base de données",
  categoriesData[1]
);

const CollaborerGestionProjetInformatique = new Skill(
  'Collaborer à la gestion d’un projet informatique et à l’organisation de l’environnement de développement',
  categoriesData[2]
);
const ConcevoirUneApp = new Skill(
  'Concevoir une application',
  categoriesData[2]
);
const DevComposantMetier = new Skill(
  'Développer des composants métier',
  categoriesData[2]
);
const ConstruireAppEnCouches = new Skill(
  'Construire une application organisée en couches',
  categoriesData[2]
);
const DevUneAppMobile = new Skill(
  'Développer une application mobile',
  categoriesData[2]
);
const PrepareExecuterPlanDeTestUneApp = new Skill(
  "Préparer et executer les plans de tests d'une application",
  categoriesData[2]
);
const PrepareExecuterDeploimentDeTestUneApp = new Skill(
  "Préparer et executer le déploiement d'une application",
  categoriesData[2]
);

const skills = [];

skills.push(
  MaquetterUneApplication,
  DevUneInterfaceDesktop,
  DevComposantsAccesDonnées,
  DevFrontEndInterFaceUtilisateurWeb,
  DevBackEndInterFaceUtilisateurWeb,
  ConcevoirUneBDD,
  MettreEnPlaceBDD,
  DevCompDeLangUneBDD,
  CollaborerGestionProjetInformatique,
  ConcevoirUneApp,
  DevComposantMetier,
  PrepareExecuterPlanDeTestUneApp,
  DevUneAppMobile,
  ConstruireAppEnCouches,
  PrepareExecuterDeploimentDeTestUneApp
);

export default skills;
