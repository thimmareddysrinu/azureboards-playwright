pipeline {
    agent any

    environment {
        CI = 'true'
       
         BASE_URL = credentials('app-base-url')
        APP_CREDS = credentials('app-login-creds')
        
        // Match these names to your Playwright process.env.* variables
        APP_EMAIL = "${APP_CREDS_USR}"
        APP_PASSWORD = "${APP_CREDS_PSW}"
    
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
            steps { bat 'npx playwright test' }
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