
function DoValidate_frmAdd(){
    var form = $("#RegisterForm");
    form.validate({
        rules:{
           /* TKTypeAdd:{
                required: true
                // candidateCheck: true
            },*/
            firstName:{
                required: true,
                rangelength:[2, 10]
            },
            lastName:{
                required: true,
                rangelength:[2, 10]
            },
            phoneNumber:{
                required: true,
                phoneAddCheck:true,
            },
            userEmail:{
                required: true,
                emailAddCheck:true
            },
            city:{
                required: true,
                rangelength:[1, 20]
            },
            addressDetails:{
                required: true
            },
            password:{
                required: true
            },
            confirmPassword:{
                equalTo: "#password"
            },
            customCheck1:{
                required:true
            }
        },
        messages:{
            /*TKTypeAdd:{
                required: "You should choose a candidate"
                // candidateCheck: ""
            },*/
            firstName:{
                required: "first name is required",
                rangelength:"Length must be at least 2 letters"
            },
            lastName:{
                required: "first name is required",
                rangelength:"Length must be at least 2 letters"
            },
            phoneNumber:{
                required: "phone number is required",
                rangelength:"Length must be at least 2 letters"
            },
            userEmail:{
                required: "Email is required",
                emailAddCheck:"Please enter a valid email address"
            },
            city:{
                required: "city is required"
            },
            addressDetails:{
                required: "address is required"
            },
            password:{
                required: "Enter password"
            },
            confirmPassword:{
                equalTo: "Password is not match"
            },
            customeCheck1:{
                required:"is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailAddCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email Add Checker");

    jQuery.validator.addMethod("phoneAddCheck",
    function validatePhone(phoneNumber){
        var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
        return phoneNumberPattern.test(phoneNumber); 
     },
     "Phone Add Checker");

// jQuery.validator.addMethod("candidateCheck",
//     function(value, element)
//     {
//         return this.optional(element) && value !== "";
//     },
//     "Candidate Checker");
