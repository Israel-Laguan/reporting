const Validate(name , value){
    let band = true;
    let msg = '';

    switch (name) {
        case 'client' || 'description':
            if(value && value.lenght === 0){                
                return {
                    band:false,
                    msg:`${name} should not be empty`
                }
            }
            break;
    
        default:
            break;
    }
}

export { Validate };