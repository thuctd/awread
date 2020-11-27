Sharing Assets from Libs
Assets are managed by applications, but when sharing libs with dependencies on asset files (e.g. images), it’s more convenient to store the asset files with the lib itself. Otherwise we would have to duplicate the assets in multiple apps.

“Hoisting” assets from a lib to an app requires slightly different syntax in angular.json than regular app level asset mappings. Normally we would list mapped folders as strings in the assets array in angular.json, but this shorthand notation requires that mapped folders live under the app’s source root. Since the lib folder is outside the app’s source folder we have to use the following json syntax to bring in the assets:

"assets": [
  {
    "input": "libs/my-lib/src/lib/assets",
    "glob": "*.png",
    "output": "assets"
  }
]
We are specifying an input folder, a file glob pattern and an output folder called assets. We are using assets as the output folder name since this will effectively merge the lib assets into the consuming app’s asset folder during the build. At this point we can access lib assets the standard way as <img src="/assets/[image name].png">.

Each consuming application will need to add this piece of json, but the benefit is that no asset files are duplicated between apps.
