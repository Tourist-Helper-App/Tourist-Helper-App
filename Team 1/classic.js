function digitalclock() {
    let datefuntion = new Date()
    let myhours = datefuntion.getHours()
    let myminutes = datefuntion.getMinutes()
    let mysecond = datefuntion.getSeconds()
    let timeformat = 'AM'
    
    timeformat = myhours >= 12 ? 'PM' : 'AM'
    myhours = myhours == 0 ? 12 : myhours
    myhours = myhours > 12 ? myhours - 12 : myhours
    myhours = myhours < 10 ? '0' + myhours : myhours
    
        myminutes = myminutes < 10 ? '0' + myminutes : myminutes
        mysecond = mysecond < 10 ? '0' + mysecond : mysecond
        
        document.querySelector('.Hours').innerHTML = myhours
        document.querySelector('.Minutes').innerHTML = myminutes
        document.querySelector('.Seconds').innerHTML = mysecond
        document.querySelector('.Format').innerHTML = timeformat
    }
    setInterval(digitalclock, 1000)
    
    let newdateFuntion = new Date()
    let montharr = ['January','February','March', 'April', 'May' ,'June', 'July','August','September','October','November','December']
    
    function renderdate(){
        newdateFuntion.setDate(1)
        let day =  newdateFuntion.getDay()
        
        
    let currentdate = new Date(
        newdateFuntion.getFullYear(),
        newdateFuntion.getMonth() + 1, 0
    ).getDate()

    let prevdate = new Date(
        newdateFuntion.getFullYear(),
        newdateFuntion.getMonth(), 0
    ).getDate()

    let addnextdate = new Date(
        newdateFuntion.getFullYear(),
        newdateFuntion.getMonth() + 1, 0
    ).getDate()

    console.log(currentdate, prevdate, addnextdate);
    

    let addnext = addnextdate + 7
    let month = newdateFuntion.getMonth()
    let year = newdateFuntion.getFullYear()
     document.getElementById("month").innerHTML = montharr[month] + " - " + year

    let today = new Date()
    console.log(today.toDateString())
    let weekday = today.getDay()    
    document.getElementById("date").innerHTML = today.toDateString()
     

     

    // let DATES = ""

    // for(let x = day; x > 0; x--)
    // {
    //     DATES += " <div class='prev'> " + (prevdate - x + 1) + "</div>"
    // }
     

    //     for( let i = 1; i <= currentdate; i++)
    //     {
    //         if(i === today.getDate() && newdateFuntion.getMonth() == today.getMonth() && newdateFuntion.getFullYear() === today.getFullYear())
    //         {
    //             DATES += "<div class='today'>" + i + "</div>"
    //         }
    //         else{
    //              DATES += "<div>" + i + "</div>"
    //         }
    //     }
      

    //     for(let k =1; k <= addnext; k++)
    //     {
    //             DATES += " <div class='next'>" + k + "</div>"
    //     }

    // document.querySelector('.date').innerHTML = DATES
    
}

function movedate(para){
    if(para == 'prev')
    {
        newdateFuntion.setMonth(newdateFuntion.getMonth() - 1)
    }
   else if(para == 'next')
    {
        newdateFuntion.setMonth(newdateFuntion.getMonth() + 1)
    }
    renderdate()
}