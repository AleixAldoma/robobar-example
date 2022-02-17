pipeline {
    agent any
    nodejs('node-14.18.2') {

    }
    stages {
        stage('Test') {
            steps {
                sh 'yarn run cy:ci'
            }
        }
    }
}