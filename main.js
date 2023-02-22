const config = {
    duration: 2,
    useGrouping: false
}

const value1 = new CountUp('value1', 100, config);
const value2 = new CountUp('value2', 50, config);
const value3 = new CountUp('value3', 10000, config);

value1.start();
value2.start();
value3.start();
