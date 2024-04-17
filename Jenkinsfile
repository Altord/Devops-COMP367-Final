pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
          stage('Deliver') {
            steps {
                echo 'Packaging the build artifacts'
                sh 'tar -czvf build.tar.gz -C build .'
            }
        }
        stage('Deliver') {
            steps {
                echo 'Packaging the artifact...'
                sh 'zip -r artifact.zip build/'
                echo 'Uploading artifact to artifact repository...'
                sh 'artifact-repository-cli upload artifact.zip --repository my-artifact-repo'
            }
        }
        stage('Deploy to Dev Env') {
            steps {
                echo 'Deploying to Development Environment...'
                sh './deploy-to-dev.sh artifact.zip'
            }
        }
        stage('Deploy to QAT Env') {
            steps {
                echo 'Deploying to QAT Environment...'
                sh './deploy-to-qat.sh artifact.zip'
            }
        }
        stage('Deploy to Staging Env') {
            steps {
                echo 'Deploying to Staging Environment...'
                sh './deploy-to-staging.sh artifact.zip'
            }
        }
        stage('Deploy to Production Env') {
            steps {
                echo 'Deploying to Production Environment...'
                sh './deploy-to-prod.sh artifact.zip'
            }
        }
    }

    post {
        success {
            echo 'The pipeline succeeded!'
        }
        failure {
            echo 'The pipeline failed!'
        }
    }
}
