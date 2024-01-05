const daytag = document.querySelector(".date");
const currentDate = document.querySelector(".current-date");
const prevnexticon = document.querySelector(".month");

let date = new Date();
let currentyear = date.getFullYear();
let currentmonth = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const rendercalender = () => {
    let firstdayofmonth = new Date(currentyear, currentmonth, 1).getDay();
    let lastdateofmonth = new Date(currentyear, currentmonth + 1, 0).getDate();
    let lastdayofmonth = new Date(currentyear, currentmonth, lastdayofmonth).getDay();
    let lastdateoflastmonth = new Date(currentyear, currentmonth, 0).getDate();

    let litag ="";
        for(let i = firstdayofmonth; i >0; i--)
           {
            litag +='<li class="inactive">${ lastdateoflastmonth - i + 1 }</li>'
           }

           for(let i = 1; i <= lastdateofmonth; i++)
           {
            let istoday = i ===date.getDate() && currentmonth === new Date().getMonth()
              && currentyear === new Date().getFullYear() ? "active" : "";
              litag +='<li class="${istoday}">${i}</li>'
           }

           for(let i = lastdateofmonth; i < 6; i++)
           {
            litag +='<li class="inactive">&{ i - lastdayofmonth + 1 }</li>'
           }

           currentDate.innerText = "${months[currentmonth]} ${currentyear}";
        daytag.innerHTML = litag;        
}

rendercalender();
prevnexticon.forEach(icon => {
    icon.addEventListener("click", () => {
       currentmonth = icon.id === "prev" ? currentmonth - 1: currentmonth + 1;
                if(currentmonth < 0 || currentmonth > 11)
                {
                    date = new Date(currentyear, currentmonth, new Date().getDate());
                    currentyear = date.getFullYear();
                    currentmonth = date.getMonth();
                } 
                else
                {
                    date = new Date();
                }

            rendercalender();
    } )
});

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Design to help in Student Management">
    <meta name="author" content="Makia Yengue Godwill">
    <meta name="keywords" content="Student Management System">
    <meta http-equiv="x-UA-Compatible" content="IE-Edge">

    <link rel="stylesheet" href="mystyle.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"> -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <link rel="shortcut icon" type="x-icon" href="fyw.png">
    <title> Classic Booking Page </title>


</head>

<body onload="renderdate()">

    <header>
        <div class="container" style="justify-content:center;">
            <div id="branding">
                <img src="fyw.png" width="80px" height="80px">
            </div>

            <nav>
                <ul>
                    <li><a href="#"> Home</a></li>
                    <li class="current"><a href="index.html"> Our Tour</a></li>
                    <li><a href="#"> About Buea</a></li>
                    <li><a href="#">Travel Guide</a></li>
                    <li><a href="#"> Contact us</a></li>

                </ul>
            </nav>

        </div>
    </header>

    <div class="myclassic" style="text-align: center; font-family: 'Poppins', Times, serif;">
        <strong>
            <h1 style="font-weight:bold ; font-size: 50px; line-height: 50px;">Classic</h1>
        </strong>
    </div>

    <section>
        <div class="container">
            <div class="calendar">
                <div class="clock">
                    <div class="time">
                        <span class="Hours">00</span> :
                        <span class="Minutes">00</span> :
                        <span class="Seconds">00</span>
                        <span class="Format">AM</span>
                    </div>
                </div>

                <div class="month">

                    <div class="prev" onclick="movedate('prev')">
                        <span class="arrow">&#10094</span>
                    </div>

                    <div>
                        <h2 id="month">December-2023</h2>
                        <p id="date">Wed December 28 2023 </p>
                    </div>

                    <div class="next" onclick="movedate('next')">
                        <span class="arrow">&#10095</span>
                    </div>

                </div>
                <hr>

                <div class="week">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thur</div>
                    <div>Fri</div>
                    <div>Sat</div>
                  
                </div>

                <div class="date">

                    <div class="prev">31</div>

                    <div class ="day" id="day">1</div>
                    <div class ="day">2</div>
                    <div class ="day">3</div>
                    <div class ="day">4</div>
                    <div class ="day">5</div>
                    <div class ="day">6</div>
                    <div class ="day">7</div>
                    <div class ="day">8</div>
                    <div class ="day">9</div>
                    <div class ="day">10</div>
                    <div class ="day">11</div>
                    <div class ="day">12</div>
                    <div class ="day">13</div>
                    <div class ="day">14</div>
                    <div class ="day">15</div>
                    <div class ="day">16</div>
                    <div class ="day">17</div>
                    <div class ="day">18</div>
                    <div class ="day">19</div>
                    <div class ="day">20</div>
                    <div class ="day">21</div>
                    <div class ="day">22</div>
                    <div class ="day">23</div>
                    <div class ="day">24</div>
                    <div class ="day">25</div>
                    <div class ="day">26</div>
                    <div class ="day">27</div>
                    <div class="day">28</div>
                    <div class ="day">29</div>
                    <div class ="day">30</div>
                    <div class ="day">31</div>

                    <div class="next">1</div>
                    <div class="next">2</div>
                    <div class="next">3</div>
                    <div class="next">4</div>
                    <div class="next">5</div>
                    <div class="next">6</div>
                    <div class="next">7</div>

                </div>

            </div>

        </div>


    </section>
<section id="site-info-cntr">
    
        <section class="site-info hidden">
    
            <div class="header">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-layers" viewBox="0 0 16 16">
                        <path
                            d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6z" />
                    </svg> <!--icon-->
                    <span>
                        <span class="calendar-month">Month</span>
                        <span class="calendar-day">Day</span>
                        <span class="calendar-year">Year</span>
                    </span>
                <div class="form-check" style="display: inline;">
                    <input class="form-check-input" type="checkbox" name="flexRadioDefault">
    
                </div>
    
            </div>
    
            <div class="site-details" id="bordered">
                <div>
                    <p class="site-name">Mount Cameroon</p>
                    <p class="site-desc">Lorem ipsum sit dolor consecutif</p>
                </div>
                <div class="time">
                    <p>9:00am - 11:30a.m</p>
                </div>
            </div>
    
            <div class="site-details">
                <div class="">
                    <p class="site-name">Prime Minister's Lodge</p>
                    <p class="site-desc">Lorem ipsum sit dolor consecutif</p>
                </div>
                <div class="time">
                    <p>12:00pm - 2:30p.m</p>
                </div>
            </div>
    
    
            <div class="site-details">
                <div class="">
                    <p class="site-name">Reunification Monument</p>
                    <p class="site-desc">Lorem ipsum sit dolor consecutif</p>
                </div>
                <div class="time">
                    <p>3:00pm - 4:30p.m</p>
                </div>
    
            </div>
    
        </section>


</section>

    <section class="order-summary hidden">

        <div>
            <p class="order-summary-text">Order Summary</p>
        </div>

        <div class="site-order first hidden">
            <div class="col1">
                <p class="site-date">
                    <span class="">day </span>
                    <span class="month">month </span>
                    <span class="day">day</span>
                    <span class="year">year</span>
                    </p>
                <p>Mount Cameroon </p>
                <p>Prime Minister's Lodge </p>
                <p>Reunification Monument </p>
            </div>
            <div class="col2">
                <span class="wrapper num">01</span>
            </div>
            <div class="col3">
                <p class = "price">XAF 15000</p>
                <div class="wrapper" class ="hidden">
                    <span class="minus" style="border-right: 1px solid black;">-</span>
                    
                    <span class="plus">+</span>
                  </div>
            </div>
        </div>

    </section>

    <section hidden>
        <p>Total</p>
        <p>XAF 70,000</p>
        <button> Make Payment</button>
    </section>

    <script src="test.js"></script>
    <script src="dateselect.js"></script>
    <script src="ordersummary.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> 
</body>

</html>