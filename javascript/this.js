var user = {
    name: "varun",
    mobileNo: 90333093039,
    age: 22,
    address: "Rnsit College",
    getAddress: function() {
        console.log("Address is",this.address);
        function sayHello(){
             console.log("hello");
             console.log("line 10");
        }
        sayHello();
}
}

user.getAddress();
