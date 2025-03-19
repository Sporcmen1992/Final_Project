document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const fullName = document.getElementById('full-name').value; 
        const email = document.getElementById('email').value;
        const nameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (fullName.trim() === "" || email.trim() === "") {
            alert('Please fill in all fields.');
        } else if (!nameRegex.test(fullName)) {
            alert('Full Name can only contain letters and spaces.');
        } else if (!emailRegex.test(email)) {
            alert('Email cannot contain spaces and must be in a valid format.');
        } else {
            alert(`Registration successful!\nFull Name: ${fullName}\nEmail: ${email}`);
            form.reset();
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (burgerMenu && navMenu) {
        burgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Toggle menu visibility
        });
    } else {
        console.error('Burger menu or navigation menu not found.');
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("footer");


    if (footer) {
        window.addEventListener("scroll", () => {
            const scrollHeight = document.documentElement.scrollHeight; 
            const scrollTop = window.innerHeight + window.scrollY; 

            if (scrollTop >= scrollHeight - 10) {
                footer.classList.add("visible"); 
            } else {
                footer.classList.remove("visible"); 
            }
        });
    } else {
        console.error("Footer element not found.");
    }
});
