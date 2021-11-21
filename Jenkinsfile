node {
  stage('SCM') {
    checkout scm
  }
  stage('build') {
    sh 'rake build'
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'Sonar Scanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}