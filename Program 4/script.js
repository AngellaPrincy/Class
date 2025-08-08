function validateName()
{
    const regex=/^[A-Za-z\s]+$/;
    if(!regex.test(name))
    {
        return "Name must contain alphabets and space"
    }
}
function validateEmail()
{
    const regex=/^[a-zA-Z0-9.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!regex.test(email))
    {
        return "Email is not valid"
    }
}
function validatePassword()
{
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password))
    {
        return "Password must contain atleast 1 number and capitals"
    }
}
function validatePhone()
{
    const regex=/^[9876][0-9]{10}$/;
    if(!regex.test(phone))
    {
        return "must contain number"
    }
}
function handleform()
{
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
let phone=document.getElementById("phone").value;

let validate_name=validateName(name)
let validate_email=validateEmail(email)
let validate_password=validatePassword(password)
let validate_phone=validatePhone(phone)

if(validateName=="valid"&&validateEmail=="valid"&&validatePassword=="valid"&&validatePhone=="valid")
{
    return "valid"
}

document.getElementById("nameError").innerText = validate_name="valid" ? "": validate_Name();
document.getElementById("emailError").innerText = validate_email="valid" ? "": validate_email();
document.getElementById("passwordError").innerText = validate_password="valid" ? "": validate_password();
document.getElementById("phoneError").innerText = validate_phone="valid" ? "": validate_phone();
}






