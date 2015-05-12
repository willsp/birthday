// Always wrap our code in an IIFE (http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
// And "use strict"; It enforces strict rules which help with debugging.
(function() {
    "use strict";

    var BirthdayFuncs = {};

    // birthday should already be a date object
    BirthdayFuncs.getAge = function(birthday) {
        var today = new Date();
        var age = today.getFullYear() - birthday.getFullYear();
        var m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            --age;
        }

        // Functions should be succinct and do one thing. Let this one
        // return years of age... define another to return the months.
        return age;
    };

    // BirthdayFuncs.NextBday = function(birthday) {
    // };

    // Expose this object to the global scope.
    window.BirthdayFuncs = BirthdayFuncs;
}());
