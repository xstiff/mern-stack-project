
//
// VALIDATORS 
//

const Required = ( val ) => {
    if (val) return true
    return false

}

const SpecifyLenght = (val, min = 2, max) => {
    if (val.length >= min && val.length <= max) return true;
    return false;
}

const EmailLatin = (val) => {
    return !!val.toLowerCase().match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/);
}

const PasswordLatin = (val) => {
    return !!val.toLowerCase().match(/^[a-zA-Z0-9]+$/);
}

const EqualPassword = (v1, v2) => {
    if (v1 === v2) return true;
    return false;
}

const NameLatin = (val) => {
    return !!val.toLowerCase().match(/^[a-zA-Z]+$/);
} 

//
// FULL VALIDATION FUNCTIONS
//

export const ValidateEmail = (val) => {
    

        if (Required(val)) {
            if ( EmailLatin(val) ) {
                if (SpecifyLenght(val, 3, 255)) {
                    return {
                        status: true,
                        message: "Success",
                    };
                }
                else return {
                    status: false,
                    message: "Email must be between 3 and 255 characters.",
                }
            } else return {
                status: false,
                message: "Email is wrong format or contains not allowed characters",
            }
        } else return {
            status: false,
            message: "Email field is required",
        }
    
    
};

export const ValidatePassword = (val) => {
  
        if (Required(val)) {
            if ( PasswordLatin(val) ) {
                if (SpecifyLenght(val, 8, 32)) {
                    return {
                        status: true,
                        message: "Success",
                    };
                }
                else return {
                    status: false,
                    message: "Password must be between 8 and 32 characters.",
                }
            } else return {
                status: false,
                message: "Password contains not allowed characters",
            }
        } else return {
            status: false,
            message: "Password field is required",
        }

};

export const ValidateRePasswords = (val1, val2) => {
    if (Required(val1) && Required(val2)) {
        if (EqualPassword(val1, val2)) {
            return {
                status: true,
                message: "Success",
            };
        } else {
            return {
                status: false,
                message: "Passwords are not equal",
            };
        }
    } else {
        return {
            status: false,
            message: "Both password fields are required",
        };
    }
}


export const ValidateName = (val) => {
    if (Required(val)) {
        if ( NameLatin(val) ) {
            if (SpecifyLenght(val, 2, 32)) {
                return {
                    status: true,
                    message: "Success",
                };
            }
            else return {
                status: false,
                message: "Name must be between 2 and 32 characters.",
            }
        } else return {
            status: false,
            message: "Name is wrong format or contains not allowed characters",
        }
    }
    else return {
            status: false,
            message: "Name field is required",
        };
    
}

export const ClearForm = (form) => form.reset();

