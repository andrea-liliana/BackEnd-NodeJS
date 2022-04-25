const repo = {
    name: "LaunchX",
    author: "andrea-liliana",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
}

const issue = {
  title : "Week1-LaunchX",
  repositoryNameAssociated : "LaunchX",
  status : "Open",
  numberOfComments : "15",
  labels : "documentation",
  author : "carlogilmar", 
  dateCreated : "20/04/2022", 
  lastUpdated : "24/04/2022",
  getTitleAndAuthor: function(){
    return `The issue ${this.name} was created by ${this.author}`
  },
  getGeneralInfo: function(){
    return `The issue ${this.name} in the repo ${this.repositoryNameAssociated} is ${this.status} and the last update was the ${this.lastUpdated}` 
  }
}

console.log("\nGitHub Model")

console.log("GitHub Repository Model")

console.log("Repo Name:" + repo.name)
console.log("Total Issues: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())


console.log("\nGitHub Issue Model")

console.log("Issue:" + issue.title)
console.log("Associated Repository Name: " + issue.repositoryNameAssociated)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

   