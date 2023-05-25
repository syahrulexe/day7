let dataProject = [];

function addProject(event){
    event.preventDefault();

    let projectName = document.getElementById("input-project-name").value;
    let startDate = document.getElementById("input-start").value;
    let endDate = document.getElementById("input-end").value;
    let description = document.getElementById("input-description").value;
    let checkboxHtml = document.getElementById("input-check-html").checked ? `<i class="fa-brands fa-html5"></i>` : "";
    let checkboxCss = document.getElementById("input-check-css").checked ? `<i class="fa-brands fa-css3-alt"></i>` : "";
    let checkboxJavascript = document.getElementById("input-check-javascript").checked ? `<i class="fa-brands fa-js"></i>` : "";
    let checkboxJava = document.getElementById("input-check-java").checked ? `<i id="java-logo" class="fa-brands fa-java"></i>` : "";
    let image = document.getElementById("input-project-image").files;

    if (projectName == "") {
        return alert("nama projectnya isi dulu");
      } else if (startDate == "") {
        return alert("start date belom disi");
      } else if (endDate == "") {
        return alert("end date belom disi");
      } else if (description == "") {
        return alert("isi description");
      } else if (image == "") {
        return alert("masukin file gambar");
      } 
    

    image = URL.createObjectURL(image[0]);
    console.log(image);

    // let start = new Date(document.getElementById("input-start").value);
    // let end = new Date(document.getElementById("input-end").value);
  
    // let totalMonths = (end.getFullYear() - start.getFullYear()) * 12; // juni(6) - april(4) *12 = 
    // totalMonths += end.getMonth() - start.getMonth();
  
    
    //   if (checkboxHtml == true) {
    //     return document.getElementById("html-logo");
    //   } else if (checkboxCss == true ) {
    //     return document.getElementById("css-logo");
    //   } else if (checkboxJava == true){
    //     return document.getElementById("java-logo");
    //   } else if (checkboxJavascript == true){
    //     return document.getElementById("js-logo");
    //   }
    
    let project = {
        projectName,
        startDate,
        endDate,
        description,
        checkboxHtml,
        checkboxCss,
        checkboxJavascript,
        checkboxJava,
        postAt: new Date(),
        image,
    };

    
    dataProject.push(project);
    console.log(dataProject);

    renderProject();
}



function renderProject() {
    document.getElementById("contents").innerHTML = "";

    for (let i = 0; i < dataProject.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="card">
          <img src="${dataProject[i].image} " alt="inputan test">
          <h4 class="title"><a href="detailproject.html">${dataProject[i].projectName} </a></h4>
          <p style="font-size: 15px; color: grey">${getFullTime(dataProject[i].postAt)}</p>
          <p style="font-size: 15px; color: grey">${getDistanceTime(dataProject[i].postAt)}</p>
          <p class="about">${dataProject[i].description} </p> 
          ${dataProject[i].checkboxHtml}
          ${dataProject[i].checkboxCss}
          ${dataProject[i].checkboxJavascript}
          ${dataProject[i].checkboxJava}
          <div class="button-group">
            <button>edit</button>
            <button>delete</button>
          </div> 
        </div>
        `;
        
    }
}

function getFullTime(time) {
  
  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let date = time.getDate();
  console.log(date);

  let monthIndex = time.getMonth();
  console.log(monthIndex);

  let year = time.getFullYear();
  console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  console.log(minutes);

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `Posted at ${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB `;

}

// get distance(point of task 5)

function getDistanceTime() {
  let timeStart = new Date(document.getElementById("input-start").value);
  let timeEnd = new Date(document.getElementById("input-end").value);

  let distance =  timeEnd - timeStart;
  console.log(distance);

  let milisecond = 1000 // 1 minute is 1000 milisecond 
  let secondInHours = 3600 // 1 hour is 3600 second
  let hoursInDays = 24 // 1 day is 24 hours
  let daysInWeeks= 7 // 1 weeks is 7 days
  let weeksInMonths = 4 // 1 month is 4 weeks
  let monthsInYears = 12 // 1 year is 12 months

  let distanceYears = Math.floor(  distance / (milisecond * secondInHours * hoursInDays * daysInWeeks * weeksInMonths * monthsInYears));
  let distanceMonths = Math.floor(  distance / (milisecond * secondInHours * hoursInDays * daysInWeeks * weeksInMonths));
  let distanceWeek = Math.floor(  distance / (milisecond * secondInHours * hoursInDays * daysInWeeks));
  let distanceDay = Math.floor(   distance / (milisecond * secondInHours * hoursInDays));

  if (distanceYears > 0){
    return `Created since ${distanceYears} Year `;
  } else if (distanceMonths> 0){
    return `Created since ${distanceMonths} Months`;
  } else if (distanceWeek > 0){
    return `Created since ${distanceWeek} weeks`;
  } else  if (distanceDay > 0){
    return `Created since ${distanceDay} days`;
  }
  
  // next buat pengkondisian dimana jika waktunya jamak akan dibuat kaya weeks/years/days sementara jika tidak ya engga 
  // and agar lebih kompleks next buat dimana jika waktunya lebih lama, waktu terkecilnya akan dikonversi menjadi sisa dari waktu banyak itu, misalnya gini 1 year 2 months 3 weeks 3 days
  
 

    
}