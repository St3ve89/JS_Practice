const getPuzzle = (wordCount, callback) => {
    // Making an http request
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode, callback) => {
    // make new request for all countries
    const countryRequest = new XMLHttpRequest()

    countryRequest.addEventListener('readystatechange', e => {
        // parse the responseText to get back the array of objects
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            // find your country object by it's country code (alpha2Code property)
            const country = data.find(country => country.alpha2Code === countryCode)
            // print the full country name (name property)
            callback(undefined, country)
        } else if (e.target.readyState === 4) {
            callback('Unable to fetch data')
            console.log('Unable to fetch data')
        }

    })

    countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryRequest.send()
}