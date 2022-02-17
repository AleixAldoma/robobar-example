pipeline {
    agent any
    stages {
        stage('Test') {
           steps {
             nodejs('node-14.18.2') {
                 //sh 'yarn install --dev cypress'
                 sh 'yarn cy:ci'
             }
           }
        }
    }
}