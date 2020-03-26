const fetcher = async (url, method = 'GET')=>{
    try {
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }

          console.log(method)
          headers['x-access-token'] = localStorage.getItem('id_token');

          const res = await fetch(`https://etl-auth.herokuapp.com/api/v1${url}`, {
              headers,
              method
            });      
            console.log(await res.json())      
        let { success, errors, msg, data } = await res.json();        
        console.log("Fetch Response:",{ success, errors, msg, data });        
        return { success, errors, msg, data };

    } catch (error) {
        console.log(error);        
    }
}

module.exports = {fetcher};