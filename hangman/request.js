// Making an HTTP request
const request = new XMLHttpRequest()
request.addEventListener('readystatechange',(e)=>{
    if(e.target.readyState ===4 && e.target.status === 200){
        const data = JSON.parse(e.target.alphaCode)
        console.log(data)
    }
})

request.open('GET','http://restcountries.eu/rest/v2/all')
request.send()