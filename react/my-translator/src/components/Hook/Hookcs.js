
const sendData = (url, data) => {
    
    const response = fetch(url, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify(data)
    })
    return response 
}


export default sendData
