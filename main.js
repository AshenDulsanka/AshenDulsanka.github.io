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
    var seeLessBtn = document.createElement('button');
    seeLessBtn.id = 'seeLessBtn';
    seeLessBtn.className = 'btn';
    seeLessBtn.textContent = 'See Less';
    seeLessBtn.style.display = 'none';
    seeMoreBtn.parentNode.insertBefore(seeLessBtn, seeMoreBtn.nextSibling);

    function toggleProjects(show) {
        upcomingProjects.forEach(function(project, index) {
            if (show) {
                project.classList.remove('hidden');
                setTimeout(() => {
                    project.classList.remove('visuallyHidden');
                }, 20);
            } else if (index >= 3) {
                project.classList.add('visuallyHidden');
                project.addEventListener('transitionend', function(e) {
                    project.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }
        });
        seeMoreBtn.style.display = show ? 'none' : 'block';
        seeLessBtn.style.display = show ? 'block' : 'none';
    }

    // Initially hide extra projects
    upcomingProjects.forEach((project, index) => {
        if (index >= 3) {
            project.classList.add('hidden');
            project.classList.add('visuallyHidden');
        }
    });

    seeMoreBtn.addEventListener('click', () => toggleProjects(true));
    seeLessBtn.addEventListener('click', () => toggleProjects(false));
});