const projects = [
    {
        title: "Digital Payments Analytics",
        tools: "POWER BI · SQL · MYSQL · DAX",
        description: "Analyzed 5,000 digital wallet transactions and built a Power BI dashboard covering transaction trends, failures, payment methods, devices and product categories.",
        points: [
            "Total and average transaction value",
            "Transaction status and failure analysis",
            "Failure rates by payment method",
            "Failure rates by device",
            "Failure rates by product category"
        ],
        links: [
            ["GitHub", "https://github.com/donniewalsh345/digital-payments-analytics"]
        ]
    },

    {
        title: "Indian Retail Sales Analysis",
        tools: "PYTHON · PANDAS · EXCEL",
        description: "Analyzed retail sales data using Python and Pandas, then used Excel pivot tables and charts to present the results.",
        points: [
            "Cleaned and prepared the retail dataset",
            "Analyzed sales across store types",
            "Explored product and payment patterns",
            "Created Excel pivot tables and charts"
        ],
        links: [
            ["GitHub", "https://github.com/donniewalsh345/Indian-Retail-Analysis"]
        ]
    },

    {
        title: "Superstore Sales Dashboard",
        tools: "TABLEAU · DATA VISUALIZATION",
        description: "Built an interactive Tableau dashboard using the Superstore dataset to explore sales performance across products, regions, categories and customer segments.",
        points: [
            "Interactive filters",
            "Sales performance analysis",
            "Regional analysis",
            "Category and product analysis",
            "Customer segment analysis"
        ],
        links: [
            ["Tableau Public", "https://public.tableau.com/app/profile/amartya.roy2636/viz/SuperstoreSales_17885518911150/Dashboard1?publish=yes"]
        ]
    },

    {
        title: "Internet Speed Tester",
        tools: "PYTHON · SPEEDTEST-CLI",
        description: "A small Python tool that checks internet download speed, upload speed and ping.",
        points: [
            "Download speed measurement",
            "Upload speed measurement",
            "Ping measurement",
            "Simple command-line output"
        ],
        links: [
            ["GitHub", "https://github.com/donniewalsh345/Internet-Speed-Tester"]
        ]
    }
];


function openProject(index){

    const project = projects[index];

    document.getElementById("modalTitle").textContent = project.title;
    document.getElementById("modalTools").textContent = project.tools;
    document.getElementById("modalDescription").textContent = project.description;

    const points = document.getElementById("modalPoints");
    points.innerHTML = "";

    project.points.forEach(point => {

        const item = document.createElement("div");

        item.className = "modal-point";
        item.textContent = point;

        points.appendChild(item);

    });


    const links = document.getElementById("modalLinks");
    links.innerHTML = "";

    project.links.forEach(link => {

        const a = document.createElement("a");

        a.href = link[1];
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = link[0] + " ↗";

        links.appendChild(a);

    });


    document.getElementById("projectModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeProject(event){

    if(event && event.target !== event.currentTarget){
        return;
    }

    document.getElementById("projectModal").classList.remove("active");

    document.body.style.overflow = "";
}


document.addEventListener("keydown", event => {

    if(event.key === "Escape"){
        closeProject();
    }

});
