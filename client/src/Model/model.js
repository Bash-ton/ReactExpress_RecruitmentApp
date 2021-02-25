export default class model{
    constructor(){
        this.myExpertise = [];
        this.observers = [];
    }
    getExpertise(){
        return this.myExpertise;
    }
    removeExpertise(name){
		this.myExpertise = [...this.myExpertise.filter((exp) => exp.name !== name)];
        this.notifyObserver();
    }
    addExpertise(t, y){
        var exp = {name: t, year: y};
        this.myExpertise = [...this.myExpertise, exp];
        this.notifyObserver();
    }
    getAllExpertise(){
        const exp = ["A-skills", "B-skills", "C-skills", "D-skills", "E-skills"];
        return exp;
    }

    addObserver(obs){
        this.observers = this.observers.concat(obs);
        return () => this.removeObserver(obs);
    }
    
    notifyObserver(){
        this.observers.forEach(function(callback) {
            callback();
        });    
    }
    removeObserver(obs) {
        this.observers = this.observers.filter(o => o !== obs)
    }

}