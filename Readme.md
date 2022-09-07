
# Reference: 
##    Deep Dive on Amazon ECS Cluster Auto Scaling: https://aws.amazon.com/blogs/containers/deep-dive-on-amazon-ecs-cluster-auto-scaling/ 
## How can I configure Amazon ECS Service Auto Scaling on Fargate: https://aws.amazon.com/premiumsupport/knowledge-center/ecs-fargate-service-auto-scaling/ 
### https://medium.com/bb-tutorials-and-thoughts/dockerizing-react-app-with-nodejs-backend-26352561b0b7
    https://github.com/bbachi/react-nodejs-example.git
    
## Run app: 
### create an image
    docker build -t react-node-image .
### running on Image
    docker run -d --rm -p  3080:80 --name react-node-ui react-node-image
### check the container
    docker ps
### stop runnning container
    docker stop react-node-ui
