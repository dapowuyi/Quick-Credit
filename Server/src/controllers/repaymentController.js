import repayment from '../models/db_repayment';



class LoanRepaymentController {
    static getLoanByLoanId(req, res)  {
    const findLoan = repayment.find(repayment => repayment.loanId === parseInt(req.params.loanId));   
    if (findLoan) 
    {
      return res.status(200).json({
        status:200,
        data: findLoan
      });
    }
    
    else{return res.status(404).json({
    success: 'false',
    message: 'Loan does not exist'
    });
    }
  }
}


  export default LoanRepaymentController;