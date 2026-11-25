pipeline {
    agent any

    environment {
        CI = 'true'
       
        BASE_URL = 'https://your-application-url.com'
    
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