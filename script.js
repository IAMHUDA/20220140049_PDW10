document.getElementById('peminatanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page
    kirimdata();
});

function kirimdata() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var alamat = document.getElementById("alamat").value;
    var tanggal = document.getElementById("tanggal").value;
    var angkatan = document.getElementById("angkatan").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;

    // Play the alert sound
    var alertSound = document.getElementById("alertSound");
    alertSound.play();

    Swal.fire({
        title: 'Form Submitted!',
        html: '<b>Nama:</b> ' + name + 
              '<br><b>NIM:</b> ' + nim + 
              '<br><b>Alamat:</b> ' + alamat + 
              '<br><b>Tanggal:</b> ' + tanggal + 
              '<br><b>Angkatan:</b> ' + angkatan + 
              '<br><b>Peminatan:</b> ' + peminatan,
        icon: 'success',
        showConfirmButton: true,
        confirmButtonText: 'OK',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
        `
    }).then((result) => {
        // Stop the alert sound when OK is pressed
        if (result.isConfirmed) {
            alertSound.pause();
            alertSound.currentTime = 0; // Reset the sound to the beginning
        }
    });
}
