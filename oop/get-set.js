const data = {
    locations: [],
    get location() {
        return this._location
    },

    set location(value) {
        this._location = value.trim()
        this.locations.push(this._location)
    }
}

// code that uses data object

data.location = 'London'
data.location = 'Budapest'

console.log(data)