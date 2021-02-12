ssh -i "~/.ssh/szintis.pem" ubuntu@ec2-18-188-66-127.us-east-2.compute.amazonaws.com << EOF
   cd /home/ubuntu/szinti
   git pull
   npm run client_prod
    if [ -f /run/nginx.pid ]; then
        sudo service nginx reload
    else
        sudo /usr/bin/nginx
    fi
   pm2 reload ps2-config.json
EOF