export const properties = [
    {
        address: '123 Fake street',
        type: 'house'
    },
    {
        address: '123 Smith street',
        type: 'house'
    },
    {
        address: '12 George street',
        type: 'apartment'
    }
];

export function lesson() {
    // Given the properties above return a new array with no house's
};


export const idGeneratorFactory = () => {
    let id = 0;
    return () => id++
};
export function lesson2() {
    const generateID = idGeneratorFactory();
    // Given the properties above return a new array of properties assigning each one an ID using the generateID function.
    // the new array should look something like:
    /*
     [
         {
             id: 1,
             address: '123 Fake street',
             type: 'house'
         },
         ...
     */
};