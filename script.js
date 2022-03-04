let data = fetch("./data.json");

let boxContent;
const content = document.querySelector(".activity");

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

daily.addEventListener("click", getDailyReport);
weekly.addEventListener("click", getWeeklyReport);
monthly.addEventListener("click", getMonthlyReport);

function getDailyReport() {
	boxContent = "";
	document.querySelector(".active").classList.remove("active");
	document.getElementById("daily").classList.add("active");
	data
		.then((response) => {
			return response.clone().json();
		})
		.then((data) => {
			// Work with JSON data here
			data.map((d) => {
				boxContent += `
				
					<section class="activity-card ${d.title.split(" ").join("").toLowerCase()}">
						<section class="card-header ${d.title.split(" ").join("").toLowerCase()}">
							<img src="./images/icon-${d.title.split(" ").join("").toLowerCase()}.svg" alt="suitcase logo" />
						</section>
						<section class="card-content">
							<section class="content-header">
								<h1>${d.title}</h1>
								<span><img src="./images/icon-ellipsis.svg" alt="" /></span>
							</section>
							<section class="content-body">
								<p class="hrs">${d.timeframes.daily.current}hrs</p>
								<p class="period">Yesterday - ${d.timeframes.daily.previous}hrs</p>
							</section>
						</section>
					</section>	
				
            `;
			});
			content.innerHTML = boxContent;
		});
}

function getWeeklyReport() {
	boxContent = "";
	document.querySelector(".active").classList.remove("active");
	document.getElementById("weekly").classList.add("active");
	data
		.then((response) => {
			return response.clone().json();
		})
		.then((data) => {
			// Work with JSON data here
			data.map((d) => {
				boxContent += `
				
					<section class="activity-card ${d.title.split(" ").join("").toLowerCase()}">
						<section class="card-header ${d.title.split(" ").join("").toLowerCase()}">
							<img src="./images/icon-${d.title.split(" ").join("").toLowerCase()}.svg" alt="suitcase logo" />
						</section>
						<section class="card-content">
							<section class="content-header">
								<h1>${d.title}</h1>
								<span><img src="./images/icon-ellipsis.svg" alt="" /></span>
							</section>
							<section class="content-body">
								<p class="hrs">${d.timeframes.weekly.current}hrs</p>
								<p class="period">Last Week - ${d.timeframes.weekly.previous}hrs</p>
							</section>
						</section>
					</section>	
					
            `;
			});
			content.innerHTML = boxContent;
		});
}

function getMonthlyReport() {
	boxContent = "";
	document.querySelector(".active").classList.remove("active");
	document.getElementById("monthly").classList.add("active");
	data
		.then((response) => {
			return response.clone().json();
		})
		.then((data) => {
			// Work with JSON data here
			data.map((d) => {
				boxContent += `
				
					<section class="activity-card ${d.title.split(" ").join("").toLowerCase()}">
						<section class="card-header ${d.title.split(" ").join("").toLowerCase()}">
							<img src="./images/icon-${d.title.split(" ").join("").toLowerCase()}.svg" alt="suitcase logo" />
						</section>
						<section class="card-content">
							<section class="content-header">
								<h1>${d.title}</h1>
								<span><img src="./images/icon-ellipsis.svg" alt="" /></span>
							</section>
							<section class="content-body">
								<p class="hrs">${d.timeframes.monthly.current}hrs</p>
								<p class="period">Last Month - ${d.timeframes.monthly.previous}hrs</p>
							</section>
						</section>
					</section>	
				
            `;
			});
			content.innerHTML = boxContent;
		});
}
