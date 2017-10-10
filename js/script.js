function paperFn() {

    var q1 = document.querySelector('input[name="business"]:checked').value;
    var q2 = document.querySelector('input[name="place"]:checked').value;
    var q3 = document.querySelector('input[name="kind"]:checked').value;
    var q4 = document.querySelector('input[name="time"]:checked').value;
    var q5 = document.querySelector('input[name="howLong"]').value;
    var q6 = [];
    var item = calculatePaper.accessories
    for (i = 0; i < item.length; i++) {
        if (item[i].checked) {
            q6.push(item[i].value);
        }
    };
    var q7 = document.querySelector('input[name="foodWhen"]:checked').value;
    var q8 = document.querySelector('input[name="foodKind"]:checked').value;
    var q9 = document.querySelector('input[name="gender"]:checked').value;

    checkValue();

    function checkValue() {

        //sprawdza poprawność przekazywanych danych, w pyt q5 'z palca'
        //można wpisać dowolną liczbę, można też nie zaznaczyć któregoś z checkboxów w pyt 6

        if (q6 == '') {
            if (q5 > 60) {
                document.getElementById('alertBox').style.marginTop = '200px';
                document.getElementById('alertBox').innerHTML = '<h4>Wprowadź poprawne dane w pkt 5 i 6</h4>'
            } else {
                document.getElementById('alertBox').style.marginTop = '200px';
                document.getElementById('alertBox').innerHTML = '<h4>Wprowadź poprawne dane w pkt 6</h4>'
            }
        } else if (q5 > 60 && q6 != '') {
            document.getElementById('alertBox').style.marginTop = '200px';
            document.getElementById('alertBox').innerHTML = '<h4>Wprowadź poprawne dane w pkt 5</h4>'
        } else if (q5 < 61 && q6 != '') {
            calculate();
        }
    }

    // funkcja określająca na sztywno ilość listków
    function calculate() { 

        if (q1 == 1 && q4 == 'morning' && q5 < 4 && q6 == 'nothing') { // opcja 1
            if (q9 == 'man') {
                console.log('Nie przysługuje Tobie żaden listek, strzepnij.');
            } else {
                console.log('Trzymaj jednego liścia!');
            }
        } else if (q1 == 1 && q4 == 'night' && q5 < 4 && q6 == 'nothing') { // opcja druga
            if (q9 == 'man') {
                console.log('Nie przysługuje Tobie żaden listek, strzepnij.');
            } else {
                console.log('Trzymaj jednego liścia!');
            }
        } else if (q1 == 1 && q4 == 'afternoon' && q5 >= 4 && q5 <= 8 && q6 == 'nothing') { //opcja trzecia
            if (q9 == 'man') {
                console.log('Trzymaj jednego liścia!');
            } else {
                console.log('Trzymaj dwa listki!');
            }
        } else if (q1 == 1 && q4 == 'evening' && q5 >= 4 && q5 <= 8 && q6 == 'nothing') { // opcja czwarta
            if (q9 == 'man') {
                console.log('Trzymaj jednego liścia!');
            } else {
                console.log('Trzymaj dwa listki!');
            }
        } else if (q1 == 1 && q5 > 8 && q5 <= 15 && q6 != 'nothing') { // opcj piąta
            console.log('Trzymaj dwa listki!');
        } else {
            paperAlgorytm();
        }
    }
    // proponuję część z algorytmem dodawania listków zrobić jako zupełnie osobną funkcję, aby nam coś później 
    // nie wywaliło ifów i oszczędzi nam to zbędnej ifologii 
    function paperAlgorytm() {
        console.log('działaj!');
    }
}
