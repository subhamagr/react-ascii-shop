let currentAd = null;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getAdId() {
    var random = getRandomInt(1, 16);
    if (random === currentAd) {
        random = (random < 16) ? random + 1 : random - 1;
    }
    return currentAd = random;
};