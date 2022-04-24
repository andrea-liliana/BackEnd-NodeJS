 # Ejercicio 1 : Modelado de GitHub

 ```mermaid
 classDiagram
 class Repo
 Repo : +name
 Repo : +author
 Repo : +language
 Repo : +numberOfCommits
 Repo : +stars
 Repo : +forks
 Repo : +issues_open
 Repo : +issues_close
 Repo : +getTotalIssues()
 Repo : +getGeneralInfo()
 ```

 ```mermaid
 classDiagram
 class Issue
 Issue : +title
 Issue : +repositoryNameAssociated
 Issue : +status
 Issue : +numberOfComments
 Issue : +labels
 Issue : +author
 Issue : +dateCreated
 Issue : +lastUpdated
 Issue : +getTitleAndAuthor()
 Issue : +getGeneralInfo()
 ```

 ```mermaid
 classDiagram
 class PullRequest
 PullRequest : +title
 PullRequest : +branchName
 PullRequest : +dateCreated
 PullRequest : +status
 PullRequest : +repositoryNameAssociated
 PullRequest : +getStatus()
 PullRequest : +getTitleAndAutor()
 ```