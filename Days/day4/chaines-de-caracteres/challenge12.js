console.log(verifyEmail("houssam@gmail.com"));
function verifyEmail(email) {
    return (email.includes("@gmail.com")) ? 1 : 0;
}