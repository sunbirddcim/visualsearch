node('rocky_agent') {
  stage('SCM') {
    checkout scm
  }
  stage('build') {
    sh 'gem install rake jammit fileutils'
    sh 'rake build'
  }
  stage('SonarQube Analysis') {
    def scannerHome = tool 'Sonar Scanner';
    withSonarQubeEnv() {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }
}