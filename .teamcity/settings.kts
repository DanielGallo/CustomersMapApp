import jetbrains.buildServer.configs.kotlin.v2019_2.*
import jetbrains.buildServer.configs.kotlin.v2019_2.buildSteps.powerShell
import jetbrains.buildServer.configs.kotlin.v2019_2.triggers.vcs

version = "2020.1"

project {

    buildType(Build)
}

object Build : BuildType({
    name = "Build"

    vcs {
        root(DslContext.settingsRoot)

        cleanCheckout = true
    }

    steps {
        /*
            Copy across the Ext JS framework files from the master Assets folder
         */
        powerShell {
            name = "Copy Sencha framework from root folder"
            formatStderrAsError = true
            minRequiredVersion = "7"
            scriptMode = script {
                content = "Expand-Archive " +
                        "-Path C:\\Assets\\ExtJS\\ext-7.0.0.zip " +
                        "-DestinationPath .\\"
            }
        }

        /*
            Rename the extracted Ext JS folder to "ext"
         */
        powerShell {
            name = "Rename framework folder"
            formatStderrAsError = true
            minRequiredVersion = "7"
            scriptMode = script {
                content = "Rename-Item .\\ext-7.0.0.156 ext"
            }
        }

        /*
            Perform a production (minified) build of the app
         */
        powerShell {
            name = "Sencha production build"
            formatStderrAsError = true
            minRequiredVersion = "7"
            scriptMode = script {
                content = "sencha app build production"
            }
        }

        /*
            Zip up the production build app folder
         */
        powerShell {
            name = "Zip production build"
            formatStderrAsError = true
            minRequiredVersion = "7"
            workingDir = ".\\build\\production\\MyApp"
            scriptMode = script {
                content = "Compress-Archive -Path .\\ -DestinationPath ..\\CustomersMapApp.zip"
            }
        }
    }

    /*
        Use the production build zip file as the artifact
     */
    artifactRules = ".\\build\\production\\CustomersMapApp.zip"

    triggers {
        vcs {
        }
    }
})
