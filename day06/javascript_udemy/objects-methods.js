let restaurant = {
    name:'ASB',
    guestCapacity:75,
    guestCount:0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity-this.guestCount 
        return partySize <= seatsLeft;
    },
    seatParty : function(partySize){
        this.guestCount = this.guestCount + partySize;
        console.log(this.guestCount)
    },
    
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize;
    }
    
}
restaurant.seatParty(72);
console.log(restaurant.guessCount)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));
//seatParty -> party size to be seated + guesscount
//removeParty -> take party size to leave restaurant and remove from guess count;