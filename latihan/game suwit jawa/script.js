function getPilihanComputer() {
    const comp = Math.random();
    if (comp < 0.34) return "gajah";
    if (comp >= 0.34 && comp < 0.67) return "orang";
    return "semut";
}

function getHasil(comp, player) {
    if (player == comp) return "Seri";
    if (player == 'gajah') return (comp == 'orang') ? 'Menang' : 'Kalah'
    if (player == 'orang') return (comp == 'gajah') ? 'Kalah' : 'Menang'
    if (player == 'semut') return (comp == 'orang') ? 'Kalah' : 'Menang'
}

function putar() {
    const computer = document.querySelector(".computer");
    const gambar = ['gajah', 'semut', 'orang'];
    // fungsi untuk melakukan sesuatu secara berulang-ulang selama interval waktu tertentu
    let i = 0;
    // untuk mendapatkan waktu saat itu
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        computer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length) i = 0;
    }, 100)
    //100 mean 0.1 detik
}

const pilihan = document.querySelectorAll('.area-player img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        // jalankan fungsi setelah 1 detik
        setTimeout(function () {
            const computer = document.querySelector('.computer');
            computer.setAttribute('src', 'img/' + pilihanComputer + '.png');

            const h1 = document.querySelector("header .hasil");
            h1.innerHTML = hasil;
        }, 1000)
    })
})