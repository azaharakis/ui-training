export default (testName, test) => {
    console.log(testName);
    test();
    console.log('Correct !')
}