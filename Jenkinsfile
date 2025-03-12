pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'nodejs', type: 'NodeJS'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Clonar Repositorio') {
            steps {
                git 'https://github.com/usuario/mi-proyecto-react-node.git'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                script {
                    // Para el backend de Node.js
                    sh 'cd backend && npm install'
                    // Para el frontend de React
                    sh 'cd frontend && npm install'
                }
            }
        }
        stage('Compilar Proyecto React') {
            steps {
                sh 'cd frontend && npm run build'
            }
        }
        stage('Pruebas Unitarias Node.js') {
            steps {
                sh 'cd backend && npm test'
            }
        }
        stage('Desplegar Sitio Estático') {
            steps {
                // Aquí se puede configurar el despliegue (puede ser un servidor o servicio)
                echo 'Desplegando el sitio estático'
            }
        }
    }
    post {
        always {
            cleanWs()  // Limpiar el workspace al final
        }
    }
}
