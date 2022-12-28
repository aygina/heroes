document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(json);

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
        <input type="radio" checked="checked" name="${hero.index}-rate" id="rate" value="1/10">1
        <input type="radio" name="${hero.index}-rate" id="rate" value="2/10">2
        <input type="radio" name="${hero.index}-rate" id="rate" value="3/10">3
        <input type="radio" name="${hero.index}-rate" id="rate" value="4/10">4
        <input type="radio" name="${hero.index}-rate" id="rate" value="5/10">5
        <input type="radio" name="${hero.index}-rate" id="rate" value="6/10">6
        <input type="radio" name="${hero.index}-rate" id="rate" value="7/10">7
        <input type="radio" name="${hero.index}-rate" id="rate" value="8/10">8
        <input type="radio" name="${hero.index}-rate" id="rate" value="9/10">9
        <input type="radio" name="${hero.index}-rate" id="rate" value="10/10">10
</div>`;
    }

    document.getElementById('heroContainer').innerHTML = heroContent;
});


function saveRank() {

    ranks = [];
    let saved = document.getElementById('saved');
    let heroes = JSON.parse(json);

    for (let hero of heroes) {
    let rank = document.querySelector(`input[name=${hero.index}-rate]:checked`).value;
    rankInfo = hero.name + ": " + rank;
    ranks.push(rankInfo);

    console.log(ranks);
    localStorage.setItem('ranks', JSON.stringify(ranks));
    saved.innerHTML = 'Сохранено!';
    }}