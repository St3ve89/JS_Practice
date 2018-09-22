const getPuzzle = (wordCount) => {
    // Making an http request
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch data')
        }
    }).then((data) => {
        return data.find(country => country.alpha2Code === countryCode)
    })
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=8bbd7bf3b61b60').then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch location')
        }
    })
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     // make new request for all countries
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', e => {
//         // parse the responseText to get back the array of objects
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             // find your country object by it's country code (alpha2Code property)
//             const country = data.find(country => country.alpha2Code === countryCode)
//             // print the full country name (name property)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data')
//         }

//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })