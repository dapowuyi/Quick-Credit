import uuid from 'uuid';

const User = 

    [
       
        { 
            token: "45erkjherht45495783",
            id: uuid.v4(), 
            firstname : "Dapo",
            lastname : "Adewuyi",
            email: "dapo@apicentre.com",
            password : "A@tyjk",
            address : "123, Ikorodu Rd, Lagos"
        }
    
    ];

    export default User;

    /*class User {
        constructor() {
          this.user = [];
        }
        
        create(data) {
          const newUsers = {
            id: data.id,
            firstname: 'Dapo' ,
            lastname: 'Adewuyi',
            email: 'dapo.adewuyi@andela.com',
            password: 'a90320m'
          };
          this.user.push(newUsers);
          return newUsers;
        }
    }*/