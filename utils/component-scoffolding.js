const { scaffold } = require('./scaffold-files')

const args = process.argv.slice(2);
const component = args[0];

const main = (component) => {    
    scaffold(component);
}

main(component);