/* global describe, it, expect, BirthdayFuncs */

describe("Birthday Functions", function() {
    "use strict";

    it("calculates the age correctly for a birthday of tomorrow", function() {
        var tomorrow = new Date();
        tomorrow.setFullYear(tomorrow.getFullYear() - 21);
        tomorrow.setDate(tomorrow.getDate() + 1);

        var age = BirthdayFuncs.getAge(tomorrow);

        expect(age).toBe(20);
    });

    it("calculates the age correctly for a birthday of today", function() {
        var today = new Date();
        today.setFullYear(today.getFullYear() - 35);

        var age = BirthdayFuncs.getAge(today);

        expect(age).toBe(35);
    });
});
