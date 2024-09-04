const albumsContent = document.querySelector('#albumsContent');

function createCard(imgname, title, artist, rating, review){

    let newCard = document.createElement('div');
    newCard.className = 'albumCard';
    newCard.innerHTML = `
            <div class="albumImage">
                <img src="assets/images/${imgname}.jpg" alt="" >
            </div>
            <div class="albumInfos">
                <h2 class="btnOpenReview">${title}</h2>
                <h3>${artist}</h3>
            </div>
            <span class="rating">${rating}</span>
            <div class="albumReview">
                <input type="button" class="btnCloseReview" value="X">
                <p>${review}</p>
            </div>
        `

    albumsContent.appendChild(newCard);

    function openReview(e){
        // aqui tá chamando a tag-pai;
        let aC = e.target.closest('.albumCard');
    
        // aqui seleciona a tag q vai ser manipulada e q tá dentro da tag-pai
        let albumReview = aC.querySelector('.albumReview');
        albumReview.style.display = 'flex';
    }
    
    function closeReview(e){
        // variavel da tag-pai
        let aC = e.target.closest('.albumCard');
    
        // variavel  da tag-filho
        let albumReview = aC.querySelector('.albumReview');
        albumReview.style.display = 'none';
    }
    
        newCard.querySelector('.btnOpenReview').addEventListener('click', openReview);
        newCard.querySelector('.btnCloseReview').addEventListener('click', closeReview);

    return newCard;

}

const album1 = createCard("preachersdaughter", "Preacher's Daughter", "Ethel Cain", 9.5, "Músicas favoritas: American Teenager, Family Tree, Thorougfare, Televangelism, Sun Bleached Flies e Strangers");





const album2 = createCard("evermore", "evermore", "Taylor Swift", 9.5, "Músicas favoritas: champagne problems, no body no crime, happiness, dorothea, coney island, cowboy like me, marjorie, evermore, right where you left me e it's time to go ");
const album3 = createCard("normanfrockwell", "NFR!", "Lana Del Rey", 9.5, "Músicas favoritas: Mariners Apartment Complex, Venice Bitch, Fuck It I Love You, Love Song, Cinnamon girl, The Next Best American Record e The greatest");
const album4 = createCard("imaginal", "Imaginal Disk", "Magdalena Bay", 9.5, "Músicas favoritas: Killing Time, Image, Watching T.V., Tunnel Vision e  Cry For Me");
const album5 = createCard("1989", "1989 (Taylor's Version)", "Taylor Swift", 9.4, "Músicas favoritas: I Know Places, Wonderland, New Romantics, Slut! e Is It Over Now? ");
const album6 = createCard("artangels", "Art Angels", "Grimes", 9.3, "Músicas favoritas: Belly of the Beat, Artangels, Pin, Realiti, World Princess Part II e Butterfly ");
const album7 = createCard("thegodswe", "The Gods We Can Touch", "Aurora", 9.2, "Músicas favoritas: You Keep Me Crawling, Exist For Love, A Dangerous Thing, This could Be A Dream e A Little Place Called The Moon");
const album8 = createCard("dancefever", "Dance Fever", "Florence + The Machine", 9.0, "Músicas favoritas: Free, Choreomania, Girls Against God, Cassandra e The Bomb");

