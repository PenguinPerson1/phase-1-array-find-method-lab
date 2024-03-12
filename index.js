// code your solution here
function superbowlWin(record) {
    let win = record.find((element)=> element.result==="W");
    if(typeof(win)==='object'){
        win=win.year
    }
    return win;
}