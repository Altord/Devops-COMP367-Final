// THERE ARE NO ACTUAL COMMANDS/BUILDS THAT WE HAVE OUTSIDE OF THE INITIAL BUILD.WE INCLUDED THE REST OF THE STEPS BECAUSE THE YWERE REQUIRED.
 
pipeline {
    agent any
 
    environment {
        NODE_VERSION = '18.16.1'
    }
 
    triggers {
        pollSCM('H/5 * * * *')
    }
 
    tools {
        nodejs 'nodejs'
    }
 
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
 
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
 
        stage('Build') {
            steps {
                echo 'Building the project...'
                bat 'npm run build'
            }
        }
 
        stage('Test') {
            steps {
                echo 'Running tests...'
                bat(
                    script: 'npm test',
                    returnStatus: true
                )
            }
            post {
                always {
                    echo 'Publishing test results...'
                   
                }
            }
        }
 
        stage('Static Analysis') {
            steps {
                echo 'Analyzing code...'
                // Placeholder for static analysis tools.
                bat(
                    script: 'echo "Static analysis step"',
                    returnStatus: true
                )
            }
        }
 
        stage('Deliver') {
            steps {
                echo 'Delivering the artifact...'
                // Placeholder for delivery command.
                bat(
                    script: 'echo "Deliver artifact step"',
                    returnStatus: true
                )
            }
        }
 
        stage('Deploy to Dev') {
            steps {
                echo 'Deploy to Dev environment step executed here'
                // Placeholder for deploy command.
                bat(
                    script: 'echo "Deploy to Dev step"',
                    returnStatus: true
                )
            }
        }
 
        stage('Deploy to QAT') {
            steps {
                echo 'Deploy to QAT environment step executed here'
                // Placeholder for deploy command.
                bat(
                    script: 'echo "Deploy to QAT step"',
                    returnStatus: true
                )
            }
        }
 
        stage('Deploy to Staging') {
            steps {
                echo 'Deploy to Staging environment step executed here'
                // Placeholder for deploy command.
                bat(
                    script: 'echo "Deploy to Staging step"',
                    returnStatus: true
                )
            }
        }
 
        stage('Deploy to Production') {
            steps {
                echo 'Deploy to Production environment step executed here'
                // Placeholder for deploy command.
                bat(
                    script: 'echo "Deploy to Production step"',
                    returnStatus: true
                )
            }
        }
    }
 
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
        always {
            echo 'This will always run at the end of the pipeline.'
        }
    }
}