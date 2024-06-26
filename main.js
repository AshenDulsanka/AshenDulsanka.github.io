var tablinks = document.getElementsByClassName("tablinks")
var tabcontents = document.getElementsByClassName("tabcontents")

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab")
    }

    event.currentTarget.classList.add("activelink")
    document.getElementById(tabname).classList.add("activeTab")
}

document.addEventListener('DOMContentLoaded', function() {
    var upcomingProjects = document.querySelectorAll('#upcomingProjects .project');
    var seeMoreBtn = document.getElementById('seeMoreBtn');

    for (var i = 3; i < upcomingProjects.length; i++) {
        upcomingProjects[i].classList.add('hidden');
    }

    seeMoreBtn.addEventListener('click', function() {
        upcomingProjects.forEach(function(project) {
            project.classList.remove('hidden');
        });
        seeMoreBtn.style.display = 'none'; 
    });
});