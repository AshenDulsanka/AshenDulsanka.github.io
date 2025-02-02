const tablinks = document.getElementsByClassName("tablinks")
const tabcontents = document.getElementsByClassName("tabcontents")
const tabcontents1 = document.getElementsByClassName("tabcontents1")
const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const msg = document.getElementById('message')

// function to open tab

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab")
    }
    for(tabcontent1 of tabcontents1){
        tabcontent1.classList.remove("activeTab")
    }

    event.currentTarget.classList.add("activelink")
    document.getElementById(tabname).classList.add("activeTab")
}

// seemore and seeless button functionality of projects

document.addEventListener('DOMContentLoaded', function() {
    const upcomingProjects = document.querySelectorAll('#upcomingProjects .project')
    const seeMoreBtn = document.getElementById('seeMoreBtn')
    const seeLessBtn = document.createElement('button')
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

document.addEventListener('DOMContentLoaded', function() {
    const completedProjects = document.querySelectorAll('#completedProjects .project')
    const seeMoreBtn = document.getElementById('seeMoreBtn1')
    const seeLessBtn = document.createElement('button')
    seeLessBtn.id = 'seeLessBtn1'
    seeLessBtn.className = 'btn'
    seeLessBtn.textContent = 'See Less'
    seeLessBtn.style.display = 'none'
    seeMoreBtn.parentNode.insertBefore(seeLessBtn, seeMoreBtn.nextSibling)

    function toggleProjects(show) {
        completedProjects.forEach(function(project, index) {
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

    completedProjects.forEach((project, index) => {
        if (index >= 3) {
            project.classList.add('hidden')
            project.classList.add('visuallyHidden')
        }
    });

    seeMoreBtn.addEventListener('click', () => toggleProjects(true))
    seeLessBtn.addEventListener('click', () => toggleProjects(false))
})

// function to send contact form data to email

function sendEmail() {
    const bodyMsg = `
            <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #4a4a4a;">New Portfolio Message</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${fullName.value}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email.value}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Message:</strong></td>
                        <td style="padding: 10px;">${msg.value}</td>
                    </tr>
                </table>
            </body>
            </html>
        `

    Email.send({
        SecureToken: "f6c65517-0511-47b7-835d-d507ae901029",
        Port: 2525,
        To: 'ashendul@gmail.com',
        From: "ashendul@gmail.com",
        Subject: "New Portfolio Message",
        Body: bodyMsg
    }).then(
        message => {
            if (message === 'OK') {
                Swal.fire({
                    title: "Success!",
                    text: "Message Sent Successfully!",
                    icon: "success"
                  });
            }
            else {
                Swal.fire({
                    title: "Error!",
                    text: "Something went wrong! Please try again.",
                    icon: "error"
                  });
            }
        }
    );
}

// event listener for form submission

form.addEventListener('submit', function(e) {
    e.preventDefault()

    sendEmail()
})

//skills section

