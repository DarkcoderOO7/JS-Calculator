function display(value)
{
    document.getElementById('txtarea').value+=value
}
function calculate()
{
var value= document.getElementById('txtarea').value
var ans=eval(value)
document.getElementById('txtarea').value=ans
}
function clsrc()
{
    document.getElementById('txtarea').value=''
}
