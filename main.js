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
    var upcomingProjects = document.querySelectorAll('#upcomingProjects .project')
    var seeMoreBtn = document.getElementById('seeMoreBtn')
    var seeLessBtn = document.createElement('button')
    seeLessBtn.id = 'seeLessBtn'
    seeLessBtn.className = 'btn'
    seeLessBtn.textContent = 'See Less'
    seeLessBtn.style.display = 'none'
    seeMoreBtn.parentNode.insertBefore(seeLessBtn, seeMoreBtn.nextSibling)

    function toggleProjects(show) {
        upcomingProjects.forEach(function(project, index) {
            if (show) {
                project.classList.remove('hidden')
                setTimeout(() => {
                    project.classList.remove('visuallyHidden')
                }, 20)
            } else if (index >= 3) {
                project.classList.add('visuallyHidden')
                project.addEventListener('transitionend', function(e) {
                    project.classList.add('hidden')
                }, {
                    capture: false,
                    once: true,
                    passive: false
                });
            }
        });
        seeMoreBtn.style.display = show ? 'none' : 'block'
        seeLessBtn.style.display = show ? 'block' : 'none'
    }

    upcomingProjects.forEach((project, index) => {
        if (index >= 3) {
            project.classList.add('hidden')
            project.classList.add('visuallyHidden')
        }
    });

    seeMoreBtn.addEventListener('click', () => toggleProjects(true))
    seeLessBtn.addEventListener('click', () => toggleProjects(false))
})

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ashendul@gmail.com",
        Password: "17762589A0D9B16CDA65392987AA4F105DBB",
        Port: 2525,
        To: 'ashendul@gmail.com',
        From: "ashendul@gmail.com",
        Subject: "New Portfolio Message",
        Body: `
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4a4a4a;">New Portfolio Message</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${document.getElementById("name").value}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${document.getElementById("email").value}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Message:</strong></td>
                        <td style="padding: 10px;">${document.getElementById("message").value}</td>
                    </tr>
                </table>
            </body>
            </html>
        `
    }).then(
        message => alert(message)
    );
}