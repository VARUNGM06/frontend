var user="access";

switch (user){
    case "admin": console.log("can access all");
    break;
    case "subadmin": console.log("can access some");
    break;
    case "testprep": console.log("can access all tests");
    break;
    case "user": console.log("can access all content");
    break;
    default:
        console.log("trial user");
        break;

}