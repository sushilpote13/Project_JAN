window.onload = () => {
    const message = `Hi Future wife Happpy happy birthday to You muje chaye tha ki ye birthday tera one of best brithday mai se koi ek ho. Qki you will get a special treatmeant NUPULIIII  so this is small gift from my side i send you this link qki mai vaha nhi hu to mai kuch kar nhi sakta but this is for you..
mai bhoot khush hu ki tu meri life mai aayi such mai i am the luckyest person ki muje tu mili .vho first day phy lap mai was the best day of my life and the second best day was when i propose you that night and you said YESSSSSS .I  want ki hmm hamesha sath rahe kyase bhi ho bs sath mai ho or tu muje kabhi na chod kr jaye and promise mai bhi tuje kabhi chod kr nhi jauga OR tu hamesha haste raha kr Nupur aacha lagta hai. Us din maine propose kiya tha ajj phir i asking you will you be my wife will you marry me. 

bs kuch nhi bolne ko but mai bolna chauga ki I Love You so much or mai tuje kabhi chood kr kahi nhi jauga ...
next page pe jaoo ab dekh or ek cheees hai aapke liye❤️❤️ `;

    const animatedMessageElement = document.getElementById('animated-message');

    let index = 0;
    const typingInterval = setInterval(() => {
        animatedMessageElement.textContent += message[index];
        index++;
        if (index >= message.length) {
            clearInterval(typingInterval);
        }
    }, 100); // Adjust typing speed here
};
