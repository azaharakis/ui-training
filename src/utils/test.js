export default (testName, test) => {
    console.log(testName);
    try{
        test();
        console.log('Correct !')
    }catch(e) {
        console.error(e)
    }
}