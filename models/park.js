const Park = function(name, ticketPrice){
  this.name = name
  this.ticketPrice = ticketPrice
  this.collection = []
}

Park.prototype.addDinosaur = function(dinosaur){
  this.collection.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaurToDelete){
  for ( let i = 0; i < this.collection.length; i++) {
    if (this.collection[i] === dinosaurToDelete) {
      this.collection.splice(i, 1)
    }

  }
}

Park.prototype.bestAttraction = function(){
  this.collection.sort(function(a, b){return b.guestsAttractedPerDay-a.guestsAttractedPerDay});
  return this.collection[0]
}

Park.prototype.species = function(species) {
   speciesCollection = []
  for ( let i = 0; i < this.collection.length; i++) {
    if (this.collection[i].species === species) {
      speciesCollection.push(this.collection[i])
    }
  }
  return speciesCollection
}


module.exports = Park;
