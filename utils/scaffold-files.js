const fs = require('fs');
const { exit } = require('process');

const _componentFileBaseContent = componentName => {
    return [
        "import './styles.css'",
        "",
        "",
        "const " + componentName + " = () => {}",
        "",
        "export default " + componentName
    ].join("\n");
}

const _toPascalCase = name => name.charAt(0).toUpperCase() + name.slice(1);
const _componentName = name => name.split("-")
                                   .map(_toPascalCase)
                                   .join("");

const _getBaseDir = component => {
    const componentName = _componentName(component);
    return './components/' + componentName;
}

const _createComponentFile = component => {
    const filePath = _getBaseDir(component) + "/index.js";
    const componentName = _componentName(component);
    const content = _componentFileBaseContent(componentName);
    fs.writeFileSync(filePath, content);
}

const _createStyleFile = component => {
    const filePath = _getBaseDir(component) + "/styles.css";
    const content = "";
    fs.writeFileSync(filePath, content);
}

const _createTestFile = component => {
    const filePath = _getBaseDir(component) + "/" + component + ".test.js";
    const content = "";
    fs.writeFileSync(filePath, content);
}

const _createRouteFile = component => {
    const filePath = "./pages/" + component + ".js";
    const content = "";
    fs.writeFileSync(filePath, content);
}

const _createFiles = component => {
    _createComponentFile(component);
    _createStyleFile(component);
    _createTestFile(component);
    _createRouteFile(component);
} 

const _createBaseDir = component => {
    const baseDir = _getBaseDir(component);
    if (fs.existsSync(baseDir)){
        console.log("Component already exists");
        console.log("Try manually removing " + baseDir + " directory and try again.");
        exit(0);
    }
    fs.mkdirSync(baseDir);
}

exports.scaffold = component => {
    _createBaseDir(component);
    _createFiles(component);
}