const growButton = document.getElementById('growButton');

growButton.addEventListener('click', function() {
    growButton.style.display = 'none';
    aboveButton.style.display = 'none';


    const growElements = document.querySelectorAll('.grow-ans');
    growElements.forEach(element => {
        element.classList.remove('hide');
    });

    document.body.classList.remove('container');
});

const aboveButton = document.getElementById('aboveButton');

function showTextOneByOne(text, delay) {
    return new Promise((resolve, reject) => {
        let index = 0;
        const interval = setInterval(() =>{
            if (index < text.length) {
                aboveButton.textContent += text[index];
                index++;
            }else{
                clearInterval(interval);
                resolve();
            }
                
            },
             delay);
    });
}
growButton.style.display = 'none';

// Panggil fungsi showTextOneByOne untuk menampilkan kata-kata satu per satu
showTextOneByOne("Hallo Cicih Kartika. ada hadiah buat kamu :)", 100).then(() => {
    // Ketika semua kata-kata telah ditampilkan, munculkan tombol
 growButton.style.display = 'inline-block'; // Ganti 'inline-block' sesuai kebutuhan
});

