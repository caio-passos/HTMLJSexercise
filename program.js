const today = new Date();
const hour =  today.getHours();

let nome = prompt("Digite o seu nome");
    if (nome.length == null || nome.replaceAll(" ", "").length == 0){
        nome = "user";
    }

if (hour >= 0 && hour < 12) {
    document.getElementById("salve").innerHTML = `Bom dia, ${nome}!`;
        }
        else if (hour >= 12 && hour < 18) {
            document.getElementById("salve").innerHTML = `Boa tarde, ${nome}!`;
            }
            else {
                document.getElementById("salve").innerHTML = `Boa noite, ${nome}!`;
                }
