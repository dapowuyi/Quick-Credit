
    import moment from 'moment';
    import uuid from 'uuid';

    const Loans =
    [
        {
            id :  1,
            user : "dapo@apicentre.com" ,
            createdOn : Date.now(),
            status : "approved",
            repaid : true,
            tenor : 6, 
            amount : 200000.00,
            paymentInstallment : 40000.00,
            balance : 30000.00,
            interest : 30000.00
        },
        
        {
            id : 2,
            user : "dapo@apicentre.com" ,
            createdOn : Date.now(),
            status : "approved",
            repaid : true,
            tenor : 6, 
            amount : 200000,
            paymentInstallment : 40000,
            balance : 30000,
            interest : 30000
        },

        {
            id : 3,
            user : "dapo@apicentre.com" ,
            createdOn : Date.now(),
            status : "approved",
            repaid : true,
            tenor : 6, 
            amount : 200000,
            paymentInstallment : 40000,
            balance : 30000,
            interest : 30000
        }


    ];
    export default Loans;