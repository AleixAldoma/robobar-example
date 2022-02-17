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
               stage('test: chrome') {
                   nodejs('node-14.18.2') {
                       sh 'yarn cy:ci'
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
