var KEY_CODES = {
    65: '#a',
    66: '#b',
    67: '#c',
    68: '#d',
    69: '#e',
    70: '#f',
    71: '#g',
    72: '#h',
    73: '#i',
    74: '#j',
    75: '#k',
    76: '#l',
    77: '#m',
    78: '#n',
    79: '#o',
    80: '#p',
    81: '#q',
    82: '#r',
    83: '#s',
    84: '#t',
    85: '#u',
    86: '#v',
    87: '#w',
    88: '#x',
    89: '#y',
    90: '#z',
    97: '#a',
    98: '#b',
    99: '#c',
    100: '#d',
    101: '#e',
    102: '#f',
    103: '#g',
    104: '#h',
    105: '#i',
    106: '#j',
    107: '#k',
    108: '#l',
    109: '#m',
    110: '#n',
    111: '#o',
    112: '#p',
    113: '#q',
    114: '#r',
    115: '#s',
    116: '#t',
    117: '#u',
    118: '#v',
    119: '#w',
    120: '#x',
    121: '#y',
    122: '#z',
    44: '#comma'
};

function getKeyId(code) {
    if (KEY_CODES[code]) {
        return KEY_CODES[code];
    }
    return 0;
}


function createFloaterAtKey(code) {
    var keyId = getKeyId(code);
    if (keyId == 0) {return;} //did not press a valid key

    var position = $(keyId).offset(); //key's position to move floater to
    var keyText = $(keyId).html(); //the letter of the floater
    
    var $floater = $("<div>", {"class": "floater","html": keyText});
    $floater.css(position);
    $('#floaterContainer').append($floater);
    $floater.animate({'marginTop': '-=500px'}, 1000, function() {
        $(this).remove();
    })

}

$(document).keypress(function(e) {
    console.log(e.which);
    createFloaterAtKey(e.which);
});