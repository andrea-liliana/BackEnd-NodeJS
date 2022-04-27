const user = {
    name: "Andrea Gómez",
    basicInfo: {Gender : "Female", Birthday : "05/08"},
    friends: 420,
    bio: "Empty",
    currentCity: "Mexico City" ,  
    details: {StudiesAt: "UNAM", Workplace: "Dev", Hometown: "Mérida"},

    getBasicInfo: function(){
      return `The user's ${this.name} gender is ${this.basicInfo.Gender} and her/his birthday is the ${this.basicInfo.Birthday}`
    },
    getDetails: function(){
      return `The user ${this.name} studies at ${this.details.StudiesAt}, works at ${this.details.Workplace} and was born in ${this.details.Hometown}`
    }
}

 
console.log("Facebook Model")

console.log("\nFacebook User Model")

console.log("User name: " + user.name)
console.log("Current City: " + user.currentCity)
console.log(user.getBasicInfo())
console.log(user.getDetails())