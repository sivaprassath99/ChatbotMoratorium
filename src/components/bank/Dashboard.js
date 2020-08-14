import React from 'react';
import { removeUserSession } from './Common';
 
class Dashboard extends React.Component {

  props={}
 
  handleLogout = () =>{
    removeUserSession();
    this.props.history.push('/login')
  };

  state = {
    queries: []
  };

  getQueries = ()=>{
    fetch(`/lmcb/getalldetails/processed/${0}`,{
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(res=>res.json())
    .then(response=>{
      this.setState({queries: response})
      console.log(this.queries);
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  componentDidMount = ()=>{
    this.getQueries();
  }

  accept = (accNo, loanNumber, tOf, nOM, Reason)=>{
    console.log("tis ", accNo, loanNumber, tOf, nOM, Reason);
    fetch(`/lmcb/updateprocessed/${loanNumber}`, {
      method: 'put',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        accno: accNo,
        loannumber: loanNumber,
        type_of_loan: tOf,
        no_of_months: nOM,
        reason: Reason,
        processed: 1
      })
    })
    .then(res=>{
      console.log("accept", res);
    })
    .catch(err=>{
      console.log(err);
    })
  };

  displayQueries = () => {
    const queries = this.state.queries;

    return (
      <table style={{margin: "1em auto"}}>
          <tr>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Name</td>            
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Account no</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Phone</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Occupation</td> 
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Loan number</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Type of Loan</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Income</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>Reason</td>
            <td style={{paddingRight: "2.5em", fontWeight: "bold", border: "1px solid black", padding:  "0.5em"}}>No of months</td>
          </tr>
          
            {
              queries.map((query, index) => (
              <tr key={index}>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.name}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.accno}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.phn_no}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.occ}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.loannumber}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.type_of_loan}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.income}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.reason}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} >{query.no_of_months}</td>
                <td style={{paddingRight: "2.5em", border: "1px solid black", padding:  "0.5em"}} ><button onClick={()=>this.accept(query.accno, query.loannumber, query.type_of_loan, query.no_of_months, query.reason)}>Accept</button></td>
              </tr>
              ))}
          
        </table>
    )
  };
  
  render() {

    return (
      <div style={{display: "block", position: "relative"}}>
        <center><h2>Welcome Admin!</h2></center> 
        <input style={{float: "right"}} type="button" onClick={this.handleLogout} value="Logout" />
        {this.displayQueries()}
      </div>
    );
  }

}
 
export default Dashboard;