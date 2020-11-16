const commands = [
'nx g app web --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app',
'nx g app mobile --directory=writer --style=scss --routing=false --strict --tags=scope:shared,type:app',
'nx g lib auth --directory=writer/web --style=scss --tags=scope:auth,scope:shared,type:lib',
'nx g lib setting --directory=writer/web --style=scss --tags=scope:setting,scope:shared,type:lib',
'nx g lib dashboard --directory=writer/web --style=scss --style=scss --tags=scope:dashboard,scope:shared,type:lib',
'nx g lib my-works --directory=writer/web --style=scss --style=scss --tags=scope:my-works,scope:shared,type:lib',
]

// var shell = require('./shellHelper');

// shell.series(commands, function (err) {
//   console.log('executed many commands in a row');
// });

const { exec } = require("child_process");

for (const command of commands) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

}
