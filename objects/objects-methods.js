let restaurant = {
    name: 'Chinmay coffee shop',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
        
}

restaurant.seatParty(72)
//console.log(restaurant)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(3)
//console.log(restaurant)
console.log(restaurant.checkAvailability(7))

// just a comment