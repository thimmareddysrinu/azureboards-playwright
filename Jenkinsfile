pipeline {
    agent any

    environment {
        CI = 'true'
       
        
    
    }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install chromium'
            }
        }

        

        stage('Playwright Tests') {
          steps {
                withCredentials([
                    string(credentialsId: 'app-base-url', variable: 'BASE_URL'),
                    usernamePassword(
                        credentialsId: 'app-login-creds',
                        usernameVariable: 'APP_EMAIL',
                        passwordVariable: 'APP_PASSWORD'
                    )
                ]) {
                    bat 'npx playwright test'
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**', allowEmptyArchive: true
            junit testResults: 'results/junit.xml', allowEmptyResults: true
        }
        success { echo 'Pipeline succeeded' }
        failure { echo 'Pipeline failed' }
    }
}