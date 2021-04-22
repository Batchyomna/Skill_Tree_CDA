import {Category} from '../entities/category';

const Category1 = new Category(
  "Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité"
);
const Category2 = new Category(
  'Concevoir et développer la persistance des données en intégrant les recommandations de sécurité'
);
const Category3 = new Category(
  'Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité'
);

const categories = [];
categories.push(Category1, Category2, Category3);

export default categories;
