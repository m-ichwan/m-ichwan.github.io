let kirim = document.getElementById('kirim');
kirim.addEventListener('click', function (){
    let na = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let lk = document.getElementById('lk').checked;
    let pr = document.getElementById('pr').checked;
    let ket = '';
    let nama = '';

    if (na){
        nama = 'Hai '+ na;
    }
    else{
        nama = 'Nama harap diisi '
    }

    if (lk){
        ket = ' Yang biasa saja :(';
    }
    else if (pr) {

        ket = ' Yang Cantik :)';
    }
    else {
        ket = ' Pilih Satu (pria/wanita) :)'
    }
    alert ( nama + ket + '. Mohon maaf layanan ini belum berfungsi, Terima Kasih sudah mengisi.' + ' Salam Pengirim: M. Ichwan' );

    let kata = Math.random();

    if (kata == 0.1 && kata < 0.2){
        kata = "'Work hard in silence, success be your noise'";
    }
    else if (kata >= 0.2 && kata < 0.3){
        kata = "'It always seems impossible until it's done'";
    }
    else if (kata >= 0.3 && kata < 0.4){
        kata = "'Learn from the past, live for today ardently, and keep having work for future.'";
    }
    else if (kata >= 0.4 && kata < 0.5){
        kata = "'The best view comes after the hardest climb.'";
    }
    else if (kata >= 0.5 && kata < 0.6){
        kata = "'Don't stop learning because life doesn't stop teaching.'";
    }
    else if (kata >= 0.6 && kata < 0.7){
        kata = "'The strongest people are not those always win, but they were still going when they crashed.'";
    }
    else if (kata >= 0.7 && kata < 0.8){
        kata = "'All our dreams can come true if we have the courage to pursue them.'";
    }
    else if (kata >= 0.8 && kata < 0.9){
        kata = "'if you change nothing, nothing will change.'";
    }
    else{
        kata = "'Follow Your Dream'";
    }

    alert (`Motivasi kali ini:   ${kata}`)
    // alert (email)
    
});