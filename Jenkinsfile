pipeline {
    agent any
    stages {
        stage('Clean') {
            steps {
                sh './gradlew clean'
            }
        }
        stage('Test') {
            // parallelize browser tests
            parallel {
                stage('test') {
                    steps {
                        sh './ yarn cy:ci'
                    }
                }
            }
            post {
                always {
                    junit 'build/test-results/test/*.xml'
                }
            }
        }
    }
}