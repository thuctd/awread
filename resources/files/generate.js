const commands = [
  'nx g lib shell --directory=writer-web --tags=scope:shell,scope:shared,type:ui --style=scss',
  'nx g lib auth --directory=writer-web --tags=scope:auth,scope:shared,type:ui --style=scss',
  'nx g lib setting --directory=writer-web --tags=scope:setting,scope:shared,type:ui --style=scss',
  'nx g lib dashboard --directory=writer-web --tags=scope:dashboard,scope:shared,type:ui --style=scss',
  'nx g lib my-works --directory=writer-web --tags=scope:my-works,scope:shared,type:ui --style=scss'
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
