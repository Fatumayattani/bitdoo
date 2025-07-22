import Nat "mo:base/Nat";
import List "mo:base/List";
import Principal "mo:base/Principal";

actor Bitdoo {

  // Loan status definition
  type LoanStatus = { #Requested; #Funded; #Repaid }; 

  // Loan structure
  type Loan = {
    id: Nat;
    borrower: Principal;
    amount: Nat;
    termMonths: Nat;
    purpose: Text;
    fundedBy: ?Principal;
    repaid: Bool;
    status: LoanStatus;
  };

  // State
  stable var loanIdCounter : Nat = 0;
  stable var loans : List.List<Loan> = List.nil<Loan>();

  // Create a new loan request
  public shared(msg) func requestLoan(amount: Nat, termMonths: Nat, purpose: Text) : async Nat {
    let loan : Loan = {
      id = loanIdCounter;
      borrower = msg.caller;
      amount = amount;
      termMonths = termMonths;
      purpose = purpose;
      fundedBy = null;
      repaid = false;
      status = #Requested;
    };
    loans := List.push(loan, loans);
    loanIdCounter += 1;
    return loan.id;
  };

  // Get all loans
  public query func getAllLoans() : async [Loan] {
    List.toArray(loans)
  };

  // Fund a loan by ID
  public shared(msg) func fundLoan(loanId: Nat) : async Text {
    var updatedLoans : List.List<Loan> = List.nil();
    var found = false;

    label l for (loan in List.toArray(loans).vals()) {
      if (loan.id == loanId and loan.status == #Requested) {
        let updatedLoan : Loan = {
          loan with
          fundedBy = ?msg.caller; // Changed from Principal.fromActor(this) to msg.caller
          status = #Funded;
        };
        updatedLoans := List.push(updatedLoan, updatedLoans);
        found := true;
        break l;
      } else {
        updatedLoans := List.push(loan, updatedLoans);
      }
    };

    if (not found) {
      return "Loan not found or already funded.";
    };

    loans := List.reverse(updatedLoans);
    "Loan successfully funded."
  };

  // Repay a loan
  public shared(_) func repayLoan(loanId: Nat) : async Text {
    var updatedLoans : List.List<Loan> = List.nil();
    var found = false;

    label l for (loan in List.toArray(loans).vals()) {
      if (loan.id == loanId and loan.status == #Funded and not loan.repaid) {
        let updatedLoan : Loan = {
          loan with
          repaid = true;
          status = #Repaid;
        };
        updatedLoans := List.push(updatedLoan, updatedLoans);
        found := true;
        break l;
      } else {
        updatedLoans := List.push(loan, updatedLoans);
      }
    };

    if (not found) {
      return "Loan not found or already repaid.";
    };

    loans := List.reverse(updatedLoans);
    "Loan successfully repaid."
  };
}