export class Student {
    //Une classe vient avec son constructeur
    //Nous avons 2 paramètres
    constructor(firstname, lastname) {

        //On teste le type du premier paramètre
        //Si le type est différent de 'string' alors on warn l'utilisateur.rice
        if (typeof firstname !== 'string') {
            console.warn(`Your first parameter ${firstname} is wrong : ${typeof firstname}`)
        }

        //Si le type est différent de 'string' alors on warn l'utilisateur.rice
        if (typeof lastname !== 'string') {
            console.warn(`Your second parameter ${lastname} is wrong : ${typeof lastname}`)
        }

        //On rajoute ces 2 paramètres en tant que propriété de notre class Student
        this.firstname = firstname
        this.lastname = lastname
    }
}