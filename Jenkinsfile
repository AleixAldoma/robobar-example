pipeline {
    agent any
    options {
           ansiColor('xterm')
           nodejs('node-14.18.2')
           gradle('6.8.2')
    }
    nodeVersion='node-14.18.2'
    stages {
        stage('Test') {
           steps {
             nodejs(nodeVersion) {
                 sh 'yarn install'
                 sh 'yarn cy:ci'
             }
           }
           post {
              always {
                  junit 'results/*.xml'
              }
           }
        }
    }
}