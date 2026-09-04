console.log(invreverse("houssam"));

function invreverse(chaine) //mermory=h o u s s a m
{

    let len = chaine.length;
    let i = 0;
    let str = "";
    while(len > i)
    {
        str += chaine[len - 1];
        len--;
    }
    return str;
}