const Validate = (name , value)=>{
    let band = true;
    let msg = '';
    let res = true;
    switch (name) {
        case 'client':
            res = notEmpty('Client',value);
            console.log(res)
            if(res) return res;
            return {band,msg};
        break;
        case 'description':
            res = notEmpty('Descripción',value)
            if(res) return res;
            return {band,msg}
        break;
    
        default:
            mesg = 'default validate';
            return {band,msg};
        break;
    }
}

const notEmpty = (name, value) =>{
    if(!value || value.lenght === 0){                
        return {
            band:false,
            msg:`${name} should not be empty`
        }
    }
    return false;
}
export default  Validate ;