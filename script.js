
function selectRole(role) {
    let targetPage = '';
    if (role === 'admin') {
        targetPage = 'admin-login.html';
    } else if (role === 'mahasiswa') {
        targetPage = 'mahasiswa-login.html';
    } else if (role === 'dosen') {
        targetPage = 'dosen-login.html';
    }

    if (targetPage) {
        window.location.href = targetPage;
    }
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulate a successful login
        sessionStorage.setItem('username', username); // Store username in session storage
        window.location.href = 'home.html'; // Redirect to home page after login
    } else {
        alert('Please enter both username and password');
    }
}

function toggleMenu() {
    console.log("Burger menu clicked"); // Debugging message
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


// Retrieve and display the username from session storage
document.getElementById('accountName').textContent = sessionStorage.getItem('username');



// buat navbar html 
// buat ada profile picture 
// buat footer 
// tambahkan gambar pada menu burger 

// ada navbar yang untruk pengurus, mahasiswa, dosen beda 