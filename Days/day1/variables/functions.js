function sqrt(x)
{
let i = 1;
while (i * i <= x)
    {
        if (i * i === x)
            return i;
        i++;
    }
}
function pow(a, n)
{
    let i = 1;
    let b = 1;
while (i <= n)
{
    b = b * a;
    i++;
}
return b;
}
console.log(sqrt(25));
console.log(pow (5, 3));