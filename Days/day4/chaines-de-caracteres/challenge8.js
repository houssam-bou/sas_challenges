console.log(extractString("houssam", 0, 3))

function extractString(string, start, end)
{
    let tmp = "";
    let i = 0;
    while(string[i])
    {
        (i >= start && i < end) ? tmp += string[i] : tmp += "";
        i++;
    }
    return tmp;
}