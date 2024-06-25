function getUserData(name, role){
    switch(role){
        case "admin":
            return `${name} can access all content`;
            
        case "subadmin":
            return `${name} can access some content`;
            
        
        case "testprep":
            return `${name} can access test content`;
          
       
        case "user":
            return `${name} can access all content`;
        
        default:
            return `${name}trial user`

    }          
}



console.log(getUserData("varun","subadmin"));