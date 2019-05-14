

    const Loans =
    [
        {
            id :  1,
            user : "dapo@apicentre.com",
            createdOn : Date.now(),
            status : "repaid",
            repaid : true,
            tenor : 3, 
            amount : 100000.00,
            paymentInstallment : 40000.00,
            balance : 0.00,
            interest : 20000.00
        },
        
        {
            id :  2,
            user : "isabelleavery@quilch.com",
            createdOn : Date.now(),
            status : "pending",
            repaid : true,
            tenor : 6, 
            amount : 200000.00,
            paymentInstallment : 40000.00,
            balance : 60000.00,
            interest : 40000.00
        },

        {
            id : 3,
            user : "francisroberts@quilch.com" ,
            createdOn : Date.now(),
            status : "approved",
            repaid : true,
            tenor : 4, 
            amount : 80000.00,
            paymentInstallment : 25000.00,
            balance : 50000.00,
            interest : 20000.00
        }


    ];
    export default Loans;