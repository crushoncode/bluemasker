fetch('http://localhost:3000/', {
    method: 'get'
}).then(function(response) {
    return response.json()
}).then(function(response) {
    console.log(response)
}).catch(function(response) {
    console.error(response)
})

const handleFormSubmit = event => {
  
    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();
    
    // TODO: Call our function to get the form data.
    const data = {};
    console.log(data)
    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "  ");  
  };

const form = document.getElementsByClassName('mask-form')[0];
form.addEventListener('submit', handleFormSubmit);