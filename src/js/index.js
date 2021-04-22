import students from './data/students';
import skills from './data/skills';
import categories from './data/categories';
import levels from './data/levels'

console.log('category', skills[0].category.name);
console.log('catego', categories[0].name);
console.log('skill', skills[0].name);
console.log('level', levels[0]);


const app = document.getElementById('app');

const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = 'Arbre de compétence';
app.appendChild(title);

const category1 = document.createElement('div');
const category2 = document.createElement('div');
const category3 = document.createElement('div');



const renderCategory = (nameOfCategory, type) =>{
    const categoryTitle = document.createElement('h4');
    categoryTitle.innerHTML = nameOfCategory;
    type == 1 ? 
    category1.appendChild(categoryTitle) 
    : 
    type == 2 ?
    category2.appendChild(categoryTitle) 
    :
    category3.appendChild(categoryTitle) 
}

const selectSkills = (skills, categoryName) =>{
   const skillsSelected = skills.filter( element => element.category.name ===  categoryName)
   console.log('teeest', skillsSelected);
    return skillsSelected
     
}
const renderLevel = (levels, divSkill)=>{
    levels.forEach(element =>{
        let labelRadio = document.createElement("p");
        labelRadio.innerHTML= element.name
        let level = document.createElement("INPUT");
        level.setAttribute("type", "radio");
        divSkill.appendChild(level)
        divSkill.appendChild(labelRadio)

    })
      
  
}
const renderSkills = (skills, categoryType) => {
    if ( categoryType  == 1 ) {
        skills.forEach(skill =>{
            const skill1 = document.createElement('p');
            skill1.classList.add('skill1');
            skill1.innerHTML = `${skill.name}`;
            category1.appendChild(skill1);
            const divLevels = document.createElement('div');
            divLevels.classList.add('divLevels')
            renderLevel(levels, divLevels)
            category1.appendChild(divLevels);
        })
        
        app.appendChild(category1);
    } else if (categoryType  == 2 ) {
        skills.forEach(skill=>{
            const skill2 = document.createElement('p');
            skill2.classList.add('skill2');
            skill2.innerHTML = `${skill.name}`;
            category2.appendChild(skill2);
            const divLevels = document.createElement('div');
            divLevels.classList.add('divLevels')
            renderLevel(levels, divLevels)
            category2.appendChild(divLevels);
        })
        app.appendChild(category2);
    } else {
        skills.forEach(skill =>{
            const skill3 = document.createElement('p');
            skill3.classList.add('skill3');
            skill3.innerHTML = `${skill.name}`;
            category3.appendChild(skill3);
            const divLevels = document.createElement('div');
            divLevels.classList.add('divLevels')
            renderLevel(levels, divLevels)
            category3.appendChild(divLevels);
        })
        app.appendChild(category3);

    }
};

const renderStudents = (students) => {
    const title = document.createElement('h2');
    title.classList.add('title');
    title.innerHTML = 'Liste des apprenants';
    app.appendChild(title);
  students.forEach((student, index) => {
    const studentEl = document.createElement('p');
    studentEl.classList.add('student');
    studentEl.innerHTML = student.firstname;
    app.appendChild(studentEl);
  });
};

const renderAll = (categories, skills) =>{
    categories.forEach(category => {
        if(category.name ===  "Concevoir et développer des composants d'interface utilisateur en intégrant les recommandations de sécurité" ){
            let categoryType = 1;
            renderCategory(category.name, categoryType );
            renderSkills(selectSkills(skills, category.name), categoryType);
            
        }else if(category.name ===  'Concevoir et développer la persistance des données en intégrant les recommandations de sécurité'){
            let categoryType = 2;  
            renderCategory(category.name, categoryType);
            renderSkills(selectSkills(skills, category.name), categoryType);
        }else{
            let categoryType = 3;
            renderCategory(category.name, categoryType);
            renderSkills(selectSkills(skills, category.name), categoryType);
        }
    })
}

//On appelle notre function pour créer le tout
renderStudents(students);
renderAll(categories, skills);


