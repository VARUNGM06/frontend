var user = {
    modelName:"motorola",
    version:"14 OS",
    ram:"8gb",
    rom:"128gb",
    camara:"60mp",
    versionCount:[],
    buyVersion:function(versionName){
        this.versionCount.push(versionName);

    },
    getVersionCount: function(){
        return`${this.modelName} is has the total number of ${this.versionCount.length} version`
    },
    infoCount: function(){
        return `${this.modelName}  ${this.version} ${this.ram}  ${this.rom} ${this.camara}  ${this.versionCount.length} `
    }

}

var versionCount=true;
console.log(user.getVersionCount());

user.buyVersion("15 os");
user.buyVersion("16 os");

console.log(user.getVersionCount());
console.log(user.modelName);
console.table(user.infoCount());
