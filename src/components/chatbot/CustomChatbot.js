import React from "react";
import ChatBot from "react-simple-chatbot";
import Review from './Review';

function CustomChatbot(props) {
  const config = {
     width: "400px",
     height: "450px",
     floating: true
   };

  const steps = [
      {
           id: "Greet",
           message: "Hello, Welcome to our Bank",
           trigger: "Account number"
        },
	
        {
           id: "Account number",
           message: "Please type your Account number?",
           trigger: "user_input_acc_number"
        },
	{
           id: "user_input_acc_number",
           user: true,
           trigger: "Ask Name",
           validator: (value) => {
            if (isNaN(value)) 
            {
              return 'value must be a number';
            } else if (value < 0) 
            {
              return 'value must be positive';
            } 
            else if (value.length < 16) 
            {
              return 'value must have 16 digits';
            } 
            return true;
          },
        },
        {
          id: "Ask Name",
          message: "Please type your Name?",
          trigger: "user_input_name"
       },
      {
          id: "user_input_name",
          user: true,
          trigger: "loan Name"     
       },

	{
           id:"loan Name",
           message: "Please type your Loan number?",
           trigger: "Waiting_user_input_for_loan"
        },
        {
           id: "Waiting_user_input_for_loan",
           user: true,
           trigger: "Asking options to loan",
           validator: (value) => {
            if (isNaN(value)) 
            {
              return 'value must be a number';
            } else if (value < 0) 
            {
              return 'value must be positive';
            }
            else if (value.length < 10) 
            {
              return 'value must have 10 digits';
            }

            return true;
          },
        },
        {
           id: "Asking options to loan",
           message: "Please click on type of loan which have availed?",
           trigger: "Displaying_options_to_loan"
        },
        {
           id: "Displaying_options_to_loan",
           options: [
                      {
                        value: "home loan",
                        label: "Home loan",
                        trigger: "Asking for time in moratorium"
                      },
                      { 
                        value: "vehicle loan",
                        label: "Vehicle loan",
                        trigger: "Asking for time in moratorium"
                      },
		      {
                        value: "crop loan",
                        label: "Crop loan",
                        trigger: "Asking for time in moratorium"
                      },
		      {
                        value: "educational loan",
                        label: "Educational loan",
                        trigger: "Asking for time in moratorium"
                      },
		      {
                        value: "personal loan",
                        label: "Personal loan",
                        trigger: "Asking for time in moratorium"
                      },
                    ]
        },
        {
           id: "Asking for time in moratorium",
           message: "Would you like to have moratorium ?",
           trigger: "Adding_Time_to_moratorium"
        },
        {
           id: "Adding_Time_to_moratorium",
           options: [
                      {
                        value: true,
                        label: "Yes",
                        trigger: "Asking for reason"
                      },
                      { 
                        value: "false",
                        label: "No",
                        trigger: "end_message"
                      } 
                    ]
        },
        {
          id:"Asking for reason",
          message:"Reason for moratorium?",
          trigger:"Asking_reason_in_moratorium"
        },
        {
          id:"Asking_reason_in_moratorium",
          user: true,
          trigger:"Asking for Time period"
        },
        {
           id: "Asking for Time period",
           message: "How much time do You want for moratorium? ",
           trigger: "Adding_time_for_moratorium"
        },
 	{
           id: "Adding_time_for_moratorium",
           options: [
                      {
                        value:"1 month",
                        label: "1 Months",
                        trigger:"Asking for phone"  
                      },                      
                      {
                          value:"2 month",
                          label: "2 Months",
                          trigger:"Asking for phone"  
                      },                            
                      { 
                        value: "3 month",
                        label: "3 Months",
                        trigger: "Asking for phone"
                      },
                      {
                        value:"4 month",
                        label: "4 Months",
                        trigger:"Asking for phone"  
                      },
                      {
                        value:"5 month",
                        label: "5 Months",
                        trigger:"Asking for phone"  
                      },
                      {
                        value:"6 month",
                        label: "6 Months",
                        trigger:"Asking for phone"  
                      },                                            
                    ]
        },
        {
          id: "Asking for phone",
          message: "Phone Number",
          trigger: "Asking_for_phoneno"
       },
       {
        id: "Asking_for_phoneno",
        user: true,
        trigger: "Asking for present eco cond",
        validator: (value) => {
          if (isNaN(value)) 
          {
            return 'value must be a number';
          } else if (value < 0) 
          {
            return 'value must be positive';
          }
          else if (value.length < 10) 
          {
            return 'value must have 10 digits';
          }

          return true;
        },
     },
        {
           id: "Asking for present eco cond",
           message: "Economic condition",
           trigger: "Adding occupation"
        },
 
        {
           id: "Adding occupation",
           message:"What is your occupation?",
           trigger:"user_input_occupation"
        },
        {
          id:"user_input_occupation",
          user:true,
          trigger:"check the income"
        },
        {
        id: "check the income",
        message: "Do you have any current income?",
        trigger: "check"
        },
        {
        id: "check",
        options: [
          {
            value:true,
            label: "Yes",
            trigger: "Asking for source of income"
          },
          { 
            value: "false",
            label: "No",
            trigger: "no cash"
          }, 
        ]
        },
         {
          id:"no cash",
          message:"Please contact our bank official",
          trigger:"end_message"
         },
        {
           id: "Asking for source of income",
           message: "What is your current income?",
           trigger: "current_income"
        },
        {
          id:"current_income",
          user:true,
          trigger:"review",
          validator: (value) => {
            if (isNaN(value)) 
            {
              return 'value must be a number';
            } else if (value < 0) 
            {
              return 'value must be positive';
            } 
            return true;
          },
        },
        {
          id: "review",
          component: <Review />,
          asMessage: true,
          trigger: "end_message",
        },
        {
          id: "end_message",
          message: "Have a nice day!😁,For further detials please contact the Bank Official.",
          trigger:'end_msg',
          
      },
      {
        id:'end_msg',
        message:"For moratorium calculation refer our home page.",
        end: true
      },
      
        

    ];
  return <ChatBot steps={steps} />;
}
export default CustomChatbot; 