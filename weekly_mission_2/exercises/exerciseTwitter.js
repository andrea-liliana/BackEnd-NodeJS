const user = {
    username: "@andrea_ghh",
    name: "Andrea Gómez",
    bio: "Empty",
    age: 23,
    location: "CDMX, Mexico",
    dateJoined: "October 2020",
    topics: ["Technology", "Video games", "Sports"],  
    numberFollowers: 90,
    numberFollowing: 95, 
    getNumberFollowers: function(){
      return `${this.username} has ${this.numberFollowers} followers`
    },
    getNumberFollowing: function(){
      return `${this.username} follows ${this.numberFollowing} people`
    },
    getTopics: function(){
        return `The user's ${this.username} topics are: ${this.topics}`
    }
}


const trendingTopic = {
    topic: "Climate Change",
    user: "@IPCC",
    numberTweets: 1559,
    numberReplies: 305,
    numberLikes: 2011,
    dateCreated: "01/03/22",
    getNumberTweets: function(){
      return `Tweet from ${this.user} has ${this.numberTweets} retweets`
    },
    getNumberLikes: function(){
      return `Tweets about ${this.topic} has ${this.numberLikes} likes`
    },
}


console.log("Twitter Model")

console.log("\nTwitter User Model")

console.log("User name: " + user.name)
console.log("User age: "  + user.age)
console.log(user.getNumberFollowers())
console.log(user.getNumberFollowing())
console.log(user.getTopics())

console.log("\nTwitter Trendig Topic Model")

console.log("Trending Topic: " + trendingTopic.topic)
console.log("User: "  + trendingTopic.user)
console.log(trendingTopic.getNumberTweets())
console.log(trendingTopic.getNumberLikes())