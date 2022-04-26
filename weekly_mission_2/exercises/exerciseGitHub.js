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

const pullRequest = {
  title : "Fix typo",
  branchName : "Main",
  dateCreated : "24/04/2022",
  status : "Open",
  author : "andrea-liliana", 
  repositoryNameAssociated : "LaunchX",
  getStatus: function(){
    return `The pull request ${this.title} is ${this.status}`
  },
  getTitleAndAutor: function(){
    return `The pull request ${this.title} was created by ${this.author}` 
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

console.log("\nGitHub Pull Request Model")

console.log("Pull Request Title:" + pullRequest.title)
console.log("Branch Name: " + pullRequest.branchName)
console.log(pullRequest.getTitleAndAutor())

   