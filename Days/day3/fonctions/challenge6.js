verifierMotDePasse("code@1234646");

function verifierMotDePasse(password)
{
 
    (password.length >= 9 && password.includes("@")) ? console.log("valid password") : console.log("password not valid");
}