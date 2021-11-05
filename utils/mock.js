const getMockedData = () =>
     [
        {
            symbol:                 'AAPL',
            regularMarketPrice:     randomize(),
            regularMarketDayHigh:   randomize(),
            regularMarketDayLow:    randomize(),
            fiftyTwoWeekLow:        randomize(),
            fiftyTwoWeekHigh:       randomize()
        },
        {
            symbol:                 'GOOG',
            regularMarketPrice:     randomize(),
            regularMarketDayHigh:   randomize(),
            regularMarketDayLow:    randomize(),
            fiftyTwoWeekLow:        randomize(),
            fiftyTwoWeekHigh:       randomize()
        },
        {
            symbol:                 'MSFT',
            regularMarketPrice:     randomize(),
            regularMarketDayHigh:   randomize(),
            regularMarketDayLow:    randomize(),
            fiftyTwoWeekLow:        randomize(),
            fiftyTwoWeekHigh:       randomize()
        },
        {
            symbol:                 'TSLA',
            regularMarketPrice:     randomize(),
            regularMarketDayHigh:   randomize(),
            regularMarketDayLow:    randomize(),
            fiftyTwoWeekLow:        randomize(),
            fiftyTwoWeekHigh:       randomize()
        }
    ];

const randomize = () => (Math.random() * 10000).toFixed(3);

module.exports = {
    getMockedData
};