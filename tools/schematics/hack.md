npx json -I -f angular.json -e "this.projects['booking-feature-shell'] = this.projects['feature-shell']"
npx json -I -f angular.json -e "delete this.projects['feature-shell']"

ng config projects["booking-feature-shell"].architect.lint.options.exclude[1] !libs/booking/feature-shell/**

npx json -I -f libs/booking/feature-shell/tslint.json -e "this.linterOptions = { exclude: ['!**/*'] }"

npx rimraf libs/booking/feature-shell/*package.json

npx rimraf libs/booking/feature-shell/tsconfig.lib.prod.json

npx rimraf libs/booking/feature-shell/src/lib/*.*

ng config projects["booking-desktop-e2e"].root apps/booking/booking-desktop-e2e

ng config projects["booking-desktop-e2e"].architect.lint.options.tsConfig apps/booking/booking-desktop-e2e/tsconfig.json

npx json -I -f angular.json -e "delete this.projects['booking-desktop'].architect.e2e"

npx json -I -f angular.json -e "this.projects['booking-desktop'].architect.lint.options.tsConfig.pop()"

ng config projects["booking-desktop"].architect.lint.options.exclude[1] !apps/booking/booking-desktop/**

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].architect.build"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].architect['extract-i18n']"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].architect.serve"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].architect.test"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].prefix"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].sourceRoot"

npx json -I -f angular.json -e "delete this.projects['booking-desktop-e2e'].schematics"

ng config projects["booking-desktop-e2e"].architect.lint.options.exclude[1] !apps/booking/booking-desktop-e2e/**