import Loans from "../models/db";

class LoanController {
  static getAllLoan(req, res) {
    let { status, repaid } = req.query;

    if (status === 'approved' && repaid === 'false') {
      const data = Loans.filter(
        loan => loan.status === status && loan.repaid === false
      );
      return res.status(200).send({
        status: 200,
        data
      });
    }

    if (status === 'approved' && repaid === 'true') {
      const data = Loans.filter(
        loan => loan.status === status && loan.repaid === true
      );
      return res.status(200).send({
        status: 200,
        data
      });
    }
    return res.status(200).send({
      message: "Loans retreived successfully",
      status: 200,
      data: Loans
    });

  }
  
  
  static getLoanById(req, res) {
    const findLoan = Loans.find(loan => loan.id === parseInt(req.params.id));
    if (findLoan) {
      return res.status(200).json({
        status: 200,
        data: findLoan
      });
    } else {
      return res.status(404).json({
        success: "false",
        message: "Loan does not exist"
      });
    }
  }

  
}

export default LoanController;
