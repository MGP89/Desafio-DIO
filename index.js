//HERÓIS
const herois = [
    { nome: "Superman", xp: 12500 },
    { nome: "Batman", xp: 10000 },
    { nome: "Iron Man", xp: 8450 },
    { nome: "Hulk", xp: 7556 },
    { nome: "Visão", xp: 6876 },
    { nome: "Flash", xp: 4350 },
    { nome: "Black Cat", xp: 3001 },
    { nome: "Wonder Woman", xp: 1760 },
    { nome: "Aquaman", xp: 45 },
];

console.log("HERÓIS DC Vs. MARVEL");
console.log("------------------------");

//NÍVEIS DE HERÓIS
for (let heroi of herois) {
    let nivel;
    if (heroi.xp <= 1000) {
        nivel = "Ferro";
    } else if (heroi.xp >= 1001 && heroi.xp <= 2000) {
        nivel = "Bronze";
    } else if (heroi.xp >= 2001 && heroi.xp <= 5000) {
        nivel = "Prata";
    } else if (heroi.xp >= 5001 && heroi.xp <= 7000) {
        nivel = "Ouro";
    } else if (heroi.xp >= 7001 && heroi.xp <= 8000) {
        nivel = "Platina";
    } else if (heroi.xp >= 8001 && heroi.xp <= 9000) {
        nivel = "Ascendente";
    } else if (heroi.xp >= 9001 && heroi.xp <= 10000) {
        nivel = "Imortal";
    } else if (heroi.xp >= 10001) {
        nivel = "Radiante";
    }

    //SAÍDA
    console.log(`${heroi.nome} está no nível ${nivel}`);
}