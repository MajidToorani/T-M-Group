//validate register form
//=======================
function DoValidate_frmAdd() {
    var form = $("#RegisterForm");
    form.validate({
        rules: {
            firstName: {
                required: true,
                rangelength: [2, 20]
            },
            lastName: {
                required: true,
                rangelength: [2, 20]
            },
            phoneNumber: {
                required: true,
                phoneAddCheck: true
            },
            userEmail: {
                required: true,
                emailAddCheck: true
            },
            city: {
                required: true,
                rangelength: [1, 20]
            },
            addressDetails: {
                required: true
            },
            password: {
                required: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            },
            customCheck1: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "first name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            lastName: {
                required: "last name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            phoneNumber: {
                required: "phone number is required",
                phoneAddCheck: "Please enter a valid phone number"
            },
            userEmail: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            city: {
                required: "city is required"
            },
            addressDetails: {
                required: "address is required"
            },
            password: {
                required: "Enter password"
            },
            confirmPassword: {
                required: "Confirm password",
                equalTo: "Password is not match"
            },
            customCheck1: {
                required: "is required"
            }
        }
    });
    return form.valid();
}

//validate sign in form
//======================
function DoValidate_frmLogIn() {
    var form = $("#LogInForm");
    form.validate({
        rules: {
            userName: {
                required: true,
                emailAddCheck: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
            userName: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            loginPassword: {
                required: "Enter password"
            }
        }
    });
    return form.valid();
}

//validate business info form
//============================
function DoValidate_frmManufacturer() {
    var form = $("#BusinessForm");
    form.validate({
        rules: {
            firstName: {
                required: true,
                rangelength: [2, 20]
            },
            lastName: {
                required: true,
                rangelength: [2, 20]
            },
            companyName: {
                required: true,
                rangelength: [2, 20]
            },
            companyUrl: {
                required: true
            },
            bnNumber: {
                required: true
            },
            contactFName: {
                required: true,
                rangelength: [2, 20]
            },
            contactLName: {
                required: true,
                rangelength: [2, 20]
            },
            phoneNumber: {
                required: true,
                phoneAddCheck: true
            },
            userEmail: {
                required: true,
                emailAddCheck: true
            },
            city: {
                required: true
            },
            country: {
                required: true
            },
            addressDetails: {
                required: true
            },
            cPostalCode: {
                required: true
            },
            cPassword: {
                required: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#cPassword"
            },
            customCheck2: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "first name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            lastName: {
                required: "last name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            companyName: {
                required: "company name is required"
            },
            companyUrl: {
                required: "Please enter a valid url"
            },
            bnNumber: {
                required: "Business number is required"
            },
            contactFName: {
                required: "contact first name is required"
            },
            contactLName: {
                required: "contact first name is required"
            },
            phoneNumber: {
                required: "phone number is required",
                phoneAddCheck: "Please enter a valid phone number"
            },
            userEmail: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            city: {
                required: "city is required"
            },
            country: {
                required: "country is required"
            },
            addressDetails: {
                required: "address is required"
            },
            cPostalCode: {
                required: "postal/zip code is required"
            },
            cPassword: {
                required: "Enter password"
            },
            confirmPassword: {
                required: "Confirm password",
                equalTo: "Password is not match"
            },
            customCheck2: {
                required: "is required"
            }
        }
    });
    return form.valid();
}

//validate sign in for manufacturer
//==================================
function DoValidate_frmLogInMan() {
    var form = $("#LogInManForm");
    form.validate({
        rules: {
            userName: {
                required: true,
                emailAddCheck: true
            },
            loginPassword: {
                required: true
            }
        },
        messages: {
            userName: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            loginPassword: {
                required: "Enter password"
            }
        }
    });
    return form.valid();
}

//validate setting form
//=======================
function DoValidate_frmUpdateSetting() {
    var form = $("#SettingForm");
    form.validate({
        rules: {
            settingFirstName: {
                required: true,
                rangelength: [2, 20]
            },
            lastName: {
                required: true,
                rangelength: [2, 20]
            },
            phoneNumber: {
                required: true,
                phoneAddCheck: true
            },
            userEmail: {
                required: true,
                emailAddCheck: true
            },
            city: {
                required: true,
                rangelength: [1, 20]
            },
            password: {
                required: true
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            settingFirstName: {
                required: "first name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            lastName: {
                required: "last name is required",
                rangelength: "Length must be between 2 and 20 letters"
            },
            phoneNumber: {
                required: "phone number is required",
                phoneAddCheck: "Please enter a valid phone number"
            },
            userEmail: {
                required: "Email is required",
                emailAddCheck: "Please enter a valid email address"
            },
            city: {
                required: "city is required"
            },
            password: {
                required: "Enter password"
            },
            confirmPassword: {
                required: "Confirm password",
                equalTo: "Password is not match"
            }
        }
    });
    return form.valid();
}

//validate add product info form
//===============================
function DoValidate_frmSaveProduct() {
    var form = $("#saveProductForm");
    form.validate({
        rules: {
            productName: {
                required: true
            },
            productPrice: {
                required: true
            },
            category: {
                required: true
            },
            description: {
                required: true
            }
        },
        messages: {
            productName: {
                required: "name is required"
            },
            productPrice: {
                required: "price is required"
            },
            category: {
                required: "category should be selected"
            },
            description: {
                required: "description is required"
            }
        }
    });
    return form.valid();
}

//validate update product info form
//===============================
function DoValidate_frmUpdateProduct() {
    var form = $("#updateProductForm");
    form.validate({
        rules: {
            updateName: {
                required: true
            },
            updatePrice: {
                required: true
            },
            category: {
                required: true
            },
            updateDescription: {
                required: true
            }
        },
        messages: {
            updateName: {
                required: "name is required"
            },
            updatePrice: {
                required: "price is required"
            },
            category: {
                required: "category should be selected"
            },
            updateDescription: {
                required: "description is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailAddCheck",
    function(value, element) {
        //var regex =/^[^@]+@[^@]+\.[^@]+$/;
        var regex =/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
        return this.optional(element) || regex.test(value);
    },
    "Email is not valid");

jQuery.validator.addMethod("phoneAddCheck",
    function(value, element) {
        var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        return this.optional(element) || regex.test(value);
    },
    "Phone is not valid");
