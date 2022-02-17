pipeline {
    agent any
    nodejs('node-14.18.2') {
        sh 'yarn cy:ci'
    }
    stages {
        stage('Test') {
            // parallelize browser tests
            parallel {
                stage('test') {
                    steps {
                        sh './yarn cy:ci'
                    }
                }
            }
        }
    }
}