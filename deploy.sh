ssh -i "~/.ssh/szintis.pem" ubuntu@ec2-18-188-66-127.us-east-2.compute.amazonaws.com << EOF
   cd /home/ubuntu/szinti
   git pull
   sudo service nginx reload
   pm2 start ps2-config.json
EOF