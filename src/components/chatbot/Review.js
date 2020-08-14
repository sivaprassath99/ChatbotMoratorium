import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const Review = (props)  => {


  const [state, setState] = useState({ user_input_acc_number: '', Waiting_user_input_for_loan: '', user_input_name: '', Displaying_options_to_loan:'', Asking_reason_in_moratorium:'', Adding_time_for_moratorium:'', Asking_for_phoneno:'', user_input_occupation:'', current_income:'',check:''});
  
  useEffect(() => {
    const { steps } = props;
    const { user_input_acc_number, Waiting_user_input_for_loan, user_input_name, Displaying_options_to_loan, Asking_reason_in_moratorium, Adding_time_for_moratorium, Asking_for_phoneno, user_input_occupation, current_income, check} = steps;
    setState({ user_input_acc_number, Waiting_user_input_for_loan, user_input_name, Displaying_options_to_loan, Asking_reason_in_moratorium, Adding_time_for_moratorium, Asking_for_phoneno, user_input_occupation, current_income,check });
  }, [props])

  const { user_input_acc_number, Waiting_user_input_for_loan, user_input_name, Displaying_options_to_loan, Asking_reason_in_moratorium, Adding_time_for_moratorium, Asking_for_phoneno, user_input_occupation, current_income, check } = state;

  const saveData = ()=>{

    fetch(`/lmcb/saveaccdetails/accno/${state.user_input_acc_number.value}`,{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        accno : state.user_input_acc_number.value,
        name : state.user_input_name.value,
        phn_no : state.Asking_for_phoneno.value,
        occ : state.user_input_occupation.value,
        have_income : state.check.value,
        income : state.current_income.value
      })
    })
    .then(data=>{
      alert('Your queries has been submitted successfully!')
    })
    .catch((error)=>{
      console.log(error);
    })

    fetch(`/lmcb/savemdetails/loannumber/${state.Waiting_user_input_for_loan.value}`,{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        accno : state.user_input_acc_number.value,
        loannumber : state.Waiting_user_input_for_loan.value,
        type_of_loan : state.Displaying_options_to_loan.value,
        no_of_months : state.Adding_time_for_moratorium.value,
        reason : state.Asking_reason_in_moratorium.value,
        processed : 0
      })
    })
    .then(data=>{
      alert('Your queries has been submitted successfully!')
    })
    .catch((error)=>{
      console.log(error);
    })
  }

    return (
      <div style={{ width: '110%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Account Number</td>
              <td>{user_input_acc_number.value}</td>
            </tr>
            <tr>
              <td>Loan Number</td>
              <td>{Waiting_user_input_for_loan.value}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{user_input_name.value}</td>
            </tr>
            <tr>
              <td>Loan</td>
              <td>{Displaying_options_to_loan.value}</td>
            </tr>
            <tr>
              <td>Reason for Moratorium</td>
              <td>{Asking_reason_in_moratorium.value}</td>
            </tr>
            <tr>
              <td>Moratorium Time</td>
              <td>{Adding_time_for_moratorium.value}</td>
            </tr>
            <tr>
              <td>Occupation</td>
              <td>{user_input_occupation.value}</td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>{Asking_for_phoneno.value}</td>
            </tr>
            <tr>
              <td>Income</td>
              <td>{current_income.value}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={()=>saveData()}>Submit</button>
      </div>
    );
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};
export default Review;