var expect = chai.expect;

    describe('TestFunction', function() {
        describe('#drawCard', function() {
            it('should take an array of objects and split them into two evenly numbered arrays of objects, then draw the first object', function() {
                var x = splitDeck(testDeck);
                expect(x).to.equal(`Card{ cardValue: 'Ace',
                cardSuit: 'Hearts',
                cardRank: 13 }`);

            });

            it('should throw an error if testDeck argument is not an array of objects', function() {
                expect(function() {
                    splitDeck(notADeck);
                }).to.throw(Error);
            });
        });
    });