pipeline {
    agent any
    stages {
        stage('Test') {
           steps {
             nodejs('node-14.18.2') {
                 sh 'yarn cy:ci'
             }
           }
        }
    }
}