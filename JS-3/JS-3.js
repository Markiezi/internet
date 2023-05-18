function sumArray(Numbers) {
    sum = 0
    Numbers.forEach(element => {
        sum += element
    });
    return sum
}

function getAboveZero(Temperatures) {
    return Temperatures.filter(function(temp) {
        return temp > 0
    })
}

function getPonies(Ponies, Pony) {
    if (Ponies.includes(Pony)) {
        return Pony
    } else return false
}

function isTxIncluded(Bk, Tx) {
    return Bk.includes(Tx)
}

function getSizes(Words) {
    return sizes = Words.map(element => {
        return element.length
    });
}

function getWithSpases(Words) {
    return [Words.join(" "), Words.join("").length]
}

function getEpisodes(Anime) {
    return "Аниме " + Anime.title + " включает " + Anime.episodes + " серий"
}

const triple = (Arg) => {
    return Arg * 3
}

const getAvgGlucose = (checks) => {
    sum = 0
    checks.forEach(element => {
        sum += element
    })
    return sum / checks.length
}
