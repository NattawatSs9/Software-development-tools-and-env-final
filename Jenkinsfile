pipeline {
    agent any

    stages {
        stage('Pull code from branch main') {
            steps {
                git branch: 'main', url: 'https://github.com/NattawatSs9/Software-development-tools-and-env-final.git'
            }
        }
        stage('Download dependency') {
            steps {
                dir('frontend') {
                    sh "/usr/bin/npm install"
                }
            }
        }
    }
}