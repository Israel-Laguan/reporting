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

          console.log(method)
          headers['x-access-token'] = localStorage.getItem('id_token');

        const res = await fetch(`https://etl-auth.herokuapp.com/api/v1${url}`, {
            headers,
            method,
            body
        });           

        if(method !== 'DELETE' && method !== 'PUT'){
            console.log("Ahhhhhh")
            let { success, errors, msg, data } = await res.json();   
            console.log("Fetch Response:",{ success, errors, msg, data });        
            return { success, errors, msg, data };
        }
        
        console.log("RESSS",res)
        

    } catch (error) {
        console.log(error);        
    }
}

module.exports = {fetcher};