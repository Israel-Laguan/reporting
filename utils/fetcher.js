const fetcher = async (url, method = 'GET', data = {})=>{    
    try {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }

          let body = undefined;

          if(method === 'POST'){
            body = JSON.stringify(data)
          }

          console.log("Fetch Method: ",method)
          headers['x-access-token'] = localStorage.getItem('id_token');

        const res = await fetch(`https://etl-authorize.herokuapp.com/api/v1${url}`, {
            headers,
            method,
            body
        });           

        if(method !== 'DELETE' && method !== 'PUT'){
            let { ok, errors, msg, data } = await res.json();   
            console.log("Fetch Response:",{ ok, errors, msg, data });        
            return { ok, errors, msg, data };
        }
        console.log("Fetch Response",res)
        return res;
        

    } catch (error) {
        console.log(error);        
    }
}

module.exports = {fetcher};