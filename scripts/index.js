document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);
    console.log(heroes);

    let heroContent = "";
    for (let hero of heroes) {
        heroContent += `<div class='hero'>
        <h2>${hero.name}</h2>
        <img src=${hero.picture} width="200px">` +
            ((hero.alterEgo == undefined) ? `` : `<div>Альтер эго: ${hero.alterEgo}</div><br>`) +
            `<div>Род деятельности: ${hero.job}</div><br>
        <div>Суперсилы: ${hero.powers}</div><br>
        <div>Подробнее: ${hero.addInfo}</div><br>
        <div>Ваша оценка:
        <input type="radio" name="rate" id="1" value="1">1
        <input type="radio" name="rate" id="2" value="2">2
        <input type="radio" name="rate" id="3" value="3">3
        <input type="radio" name="rate" id="4" value="4">4
        <input type="radio" name="rate" id="5" value="5">5
        <input type="radio" name="rate" id="6" value="6">6
        <input type="radio" name="rate" id="7" value="7">7
        <input type="radio" name="rate" id="8" value="8">8
        <input type="radio" name="rate" id="9" value="9">9
        <input type="radio" name="rate" id="10" value="10">10
</div>`;
    }

    document.getElementById('heroContainer').innerHTML = heroContent;
});