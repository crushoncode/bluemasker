fetch('http://localhost:3000/', {
    method: 'get'
}).then(function(response) {
    return response.json()
}).then(function(response) {
    console.log(response)
}).catch(function(response) {
    console.error(response)
})