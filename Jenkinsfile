pipeline {
    agent any
    stages {
        stage('Test') {
            // parallelize browser tests
            parallel {
                stage('test') {
                    steps {
                        sh 'yarn cy:ci'
                    }
                }
            }
        }
    }
}