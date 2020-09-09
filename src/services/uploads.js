import FormData from 'form-data'

const uploadRequest = (data, callback) => {
    const body = new FormData()

    body.append('title', data.title)
    body.append('description', data.description)
    body.append('file', data.files[0])

    fetch('http://localhost:4000/forms', {
        method: 'POST',
        body: body
    })
    .then(response => {
        callback(response)
    })
    .catch(error => { console.log(error)})
}

export default uploadRequest