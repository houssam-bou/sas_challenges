console.log(getInitials("houssam bounar"));
function getInitials(fullname) {
    let arr_upper = fullname.toUpperCase();
    let i = 0;
    let first_name = arr_upper[i];
    let last_name = "";
    while (arr_upper[i]) {
        if (arr_upper[i] === " ") {
            last_name = arr_upper[i + 1];
        }
        i++;
    }
    return `${first_name}.${last_name}`;
}

//methode 2
/*
function getInitials(fullname)
{
    let arr_upper = fullname.toUpperCase();  
    let fullSplited = arr_upper.split(" ");
    
    return `${fullSplited[0][0]}.${fullSplited[1][0]}`;
}*/