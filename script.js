document.getElementById('nilaiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nim = document.getElementById('nim').value;
    let nama = document.getElementById('nama').value;
    let presensiTeori = parseFloat(document.getElementById('presensiTeori').value) || 0;
    let tugasTeori = parseFloat(document.getElementById('tugasTeori').value) || 0;
    let utsTeori = parseFloat(document.getElementById('utsTeori').value) || 0;
    let uasTeori = parseFloat(document.getElementById('uasTeori').value) || 0;
    let presensiPraktek = parseFloat(document.getElementById('presensiPraktek').value) || 0;
    let tugasPraktek = parseFloat(document.getElementById('tugasPraktek').value) || 0;
    let utsPraktek = parseFloat(document.getElementById('utsPraktek').value) || 0;
    let uasPraktek = parseFloat(document.getElementById('uasPraktek').value) || 0;

    let nilaiAkhir = (presensiTeori + tugasTeori + utsTeori + uasTeori + presensiPraktek + tugasPraktek + utsPraktek + uasPraktek) / 8;
    let grade = '';
    
    if (nilaiAkhir >= 85) grade = 'A';
    else if (nilaiAkhir >= 70) grade = 'B';
    else if (nilaiAkhir >= 55) grade = 'C';
    else if (nilaiAkhir >= 40) grade = 'D';
    else grade = 'E';

    let table = document.getElementById('rincianNilai');
    let row = table.insertRow();
    row.insertCell(0).innerText = table.rows.length;
    row.insertCell(1).innerText = nim;
    row.insertCell(2).innerText = nama;
    row.insertCell(3).innerText = presensiTeori;
    row.insertCell(4).innerText = tugasTeori;
    row.insertCell(5).innerText = utsTeori;
    row.insertCell(6).innerText = uasTeori;
    row.insertCell(7).innerText = nilaiAkhir.toFixed(2);
    row.insertCell(8).innerText = grade;

    document.getElementById('nilaiForm').reset();
});

document.getElementById('resetTable').addEventListener('click', function() {
    document.getElementById('rincianNilai').innerHTML = '';
});
