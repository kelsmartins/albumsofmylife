const albumsContent = document.querySelector('#albumsContent');

function createCard(imgname, title, artist, rating){

    let newCard = document.createElement('div');
    newCard.className = 'albumCard';
    newCard.innerHTML = `
            <div class="albumImage">
                <img src="assets/images/${imgname}.jpg" alt="" >
            </div>
            <label for="albumInfos"></label>
            <div class="albumInfos">
                <h2>${title}</h2>
                <h3>${artist}</h3>
            </div>
            <span class="rating">${rating}</span>
        </div>`

    albumsContent.appendChild(newCard);
    return newCard;

}

const album1 = createCard("preachersdaughter", "Preacher's Daughter", "Ethel Cain", 9.5);
const album2 = createCard("evermore", "evermore", "Taylor Swift", 9.5);
const album3 = createCard("normanfrockwell", "NFR!", "Lana Del Rey", 9.5);
const album4 = createCard("1989", "1989 (Taylor's Version)", "Taylor Swift", 9.4);
const album5 = createCard("artangels", "Art Angels", "Grimes", 9.3);
const album6 = createCard("thegodswe", "The Gods We Can Touch", "Aurora", 9.2);
const album7 = createCard("dancefever", "Dance Fever", "Florence + The Machine", 9.0);
const album8 = createCard("lustforlife", "Lust For Life", "Lana Del Rey", 8.7);
