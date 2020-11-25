const $fs = require('fs');
const $path = require('path');

module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "label": "Project name, no space or punctuations, for example: my-project"
    },
    "package": {
      "type": "string",
      "required": true,
      "label": "android package, for example: com.company.project"
    },
    "description": {
      "type": "string",
      "required": true,
      "label": "Project description",
      "default": "A Android Kotlin Project"
    },
    "author": {
      "type": "string",
      "label": "Author"
    }
  },
  complete: function (data, opts) {
    const cwd = $path.join(process.cwd(), data.inPlace ? '' : data.destDirName);
    const name = data.name;

    // create folders
    const pkg = `src/main/java/${data.package.replace(/\./g, '/')}`;
    ['libs', pkg].forEach(function(dir){
      console.log(`creating ${dir} folder`);
      $fs.mkdirSync($path.resolve(cwd, `app/${dir}`), {recursive: true});
    });
  },
  "skipInterpolation": [
    "app/libs",
    "app/src/res/drawable",
    "app/src/res/drawable-v24",
    "app/src/res/mipmap-anydpi-v26",
    "app/src/res/mipmap-hdpi",
    "app/src/res/mipmap-mdpi",
    "app/src/res/mipmap-xhdpi",
    "app/src/res/mipmap-xxhdpi",
    "app/src/res/mipmap-xxxhdpi"
  ]
}
