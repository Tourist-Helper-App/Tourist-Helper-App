var calendarDay = document.querySelectorAll(".date .day");
var siteDayInfo = document.querySelector(".site-info");
var siteDayInfoCntr = document.querySelector("#site-info-cntr");
var siteOrderInfo = document.querySelector(".site-order");
var headerDate = document.querySelector(".calendar-date");
var headerDay = document.querySelector(".calendar-day");
var headerMonth = document.querySelector(".calendar-month");
var headerYear = document.querySelector(".calendar-year");
var orderSummaryInfo = document.querySelector(".order-summary");

var orderSummaryDate = document.querySelector(".site-date .date")
var orderSummaryDay = document.querySelector(".site-date .day")
var orderSummaryMonth = document.querySelector(".site-date .month");
var orderSummaryYear = document.querySelector(".site-date .year")
var orderSummaryTouristSite = document.querySelectorAll(".order-site-name");


var currIndex;
var currIndex1;

var weekDaysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



for (var i = 0; i < 31; i++) {
    calendarDay[i].addEventListener("click", function (e) {
        target = e.target;
        currIndex = Array.prototype.indexOf.call(calendarDay, target)


        calendarDay[currIndex].classList.add("today_styles");
        selectedDay = target.innerText;


        headerDate.innerText = selectedDay + "th";
        headerMonth.innerText = montharr[currMonth];
        headerYear.innerText = currYear;
        headerDay.innerText = weekDaysArr[new Date(
            currYear, currMonth, selectedDay
        ).getDay()] + ",";


        var clone = siteDayInfo.cloneNode(true);
        clone.classList.remove("hidden");
        siteDayInfoCntr.insertBefore(clone, null);      //adding different touristic sites here


        //Order summary scripting begins here
        var radioBtn = document.getElementsByClassName("form-check-input");
        var touristSiteName;

        for (var i = 0; i < radioBtn.length; i++) {

            radioBtn[i].addEventListener("change", function (e) {       //event listener for the check button

                target = e.target;
                currIndex1 = Array.prototype.indexOf.call(radioBtn, target);


                if (radioBtn[currIndex1].checked) {

                    orderSummaryInfo.classList.remove("hidden");

                    orderSummaryDay.innerText = weekDaysArr[new Date(
                        currYear, currMonth, selectedDay
                    ).getDay()] + ",";
                    orderSummaryDate.innerText = selectedDay
                    orderSummaryMonth.innerText = montharr[currMonth];
                    orderSummaryYear.innerText = currYear;


                    touristSiteName = radioBtn[currIndex1].parentNode.parentNode.parentNode.querySelectorAll(".tourist-site .site-name");
                    for (i = touristSiteName.length - 1; i >= 0; i--) {
                        orderSummaryTouristSite[i].innerText = touristSiteName[i].innerText;
                    }

                    var clone1 = siteOrderInfo.cloneNode(true);
                    clone1.classList.remove("hidden");
                    clone1.setAttribute('id', `order${currIndex1}`);

                    clone1.querySelector(".plus").addEventListener("click", function () {
                        var num = clone1.querySelector(".num");
                        var a = parseInt(num.innerText);
                        a++;
                        a = (a < 10) ? "0" + a : a;
                        num.innerText = a;

                        
                        var price = clone1.querySelector(".price").innerText;
                        var total = document.querySelector(".total-pricing");
                        var initTotal = parseInt(total.innerText);
                        total.innerText = initTotal + parseInt(price.slice(4));


                    })

                    clone1.querySelector(".minus").addEventListener("click", function () {
                        var num = clone1.querySelector(".num");
                        var a = parseInt(num.innerText);
                        if(a>0){
                        a--;
                        a = (a < 10) ? "0" + a : a;
                        num.innerText = a;
                            var price = clone1.querySelector(".price").innerText;
                            var total = document.querySelector(".total-pricing");
                            var initTotal = parseInt(total.innerText);
                            total.innerText = initTotal - parseInt(price.slice(4));
                        }

                    })

                    orderSummaryInfo.insertBefore(clone1, null);
                    var price = clone1.querySelector(".price").innerText;
                    var total = document.querySelector(".total-pricing");
                    var initTotal = parseInt(total.innerText);
                    total.innerText = initTotal + parseInt(price.slice(4));
                }
                else {
                    var clone1 = orderSummaryInfo.querySelector("#order"+currIndex1);
                    var num = clone1.querySelector(".num").innerText;
                    var price = clone1.querySelector(".price").innerText;
                    clone1.remove();
                    var total = document.querySelector(".total-pricing");
                    var initTotal = parseInt(total.innerText);
                    total.innerText = initTotal - parseInt(num) * parseInt(price.slice(4));
                }

            })
        }
    });

}






