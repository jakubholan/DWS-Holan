        // 1. Funkce pro alert
        function showAlert() {
            alert("Ahoj! Toto je alert.");
        }

        // 2. Funkce pro změnu textu tlačítka0
        function changeButtonText() {
            document.getElementById("changeTextButton").innerText = "Text byl změněn!";
        }

        // 3. Funkce pro změnu dynamického textu
        function changeDynamicText() {
            document.getElementById("dynamicText").innerText = "Text byl změněn!";
        }

        // 4. Funkce pro napsání textu
        function writeText() {
            document.getElementById("writtenText").innerText = "Toto je napsaný text.";
        }

        // 5. Funkce pro pozdrav
        function greetUser() {
            const name = document.getElementById("nameInput").value;
            alert("Ahoj, " + name + "!");
        }

        // 6. Funkce pro zobrazení aktuálního času
        function showCurrentTime() {
            const now = new Date();
            document.getElementById("currentTime").innerText = "Aktuální čas: " + now.toLocaleTimeString();
        }

        // 7. Funkce pro zobrazení aktuálního data
        function showCurrentDate() {
            const now = new Date();
            document.getElementById("currentDate").innerText = "Aktuální datum: " + now.toLocaleDateString();
        }

        // 8. Funkce pro změnu textu při přejetí myší
        document.getElementById("dynamicText").addEventListener("mouseover", function() {
            this.innerText = "Text se změnil při přejetí myší!";
        });
        document.getElementById("dynamicText").addEventListener("mouseout", function() {
            this.innerText = "Toto je dynamický text.";
        });

        // 9. Vstup pro uživatele, který bude moct zadat číselnou hodnotu. Po kliknutí na button se mu přičte hodnota 3 a výsledek se zobrazí pod vstupem
        function addThree() {
            const inputValue = parseFloat(document.getElementById('input1').value);
            const result = inputValue + 3;
            document.getElementById('result1').innerText = 'Výsledek: ' + result;
        }    
        // 10. Vstup pro uživatele, který bude moct zadat dvě číselné hodnoty. Po kliknutí na button se hodnoty sečtou a výsledek se zobrazí pod vstupem
        function addTwoNumbers() {
            const value1 = parseFloat(document.getElementById('input2').value);
            const value2 = parseFloat(document.getElementById('input3').value);
            const result = value1 + value2;
            document.getElementById('result2').innerText = 'Výsledek: ' + result;
        }
        // 11. Obrázek - po najetí myší se zvětší

        function enlargeImage() {
            document.getElementById('image').style.width = '200px';
        }

        function resetImage() {
            document.getElementById('image').style.width = '150px';
        }   

        // 13. Task manager - uživatel bude mít možnost přidat úkol, který se mu po kliknutí na button přidá pod input. Uživatel může úkol odebrat kliknutím
        function PridatUlohu(){
            const hod = document.getElementById("input4").value

            document.getElementById("ulohy").innerHTML += "<p id="+hod+">"+hod+" <button onclick=smazat('"+hod+"')>Smazat</button></p>"

        }

        function smazat(uloha){
            document.getElementById(uloha).remove()
        }
