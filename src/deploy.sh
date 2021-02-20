rsync -ravze "ssh -i ~/.ssh/szintis.pem" --exclude '.git/' --exclude 'node_modules/' ~/workspace/szinti/src/.env  ubuntu@vewejewelry.com:~/szinti/src/
rsync -ravze "ssh -i ~/.ssh/szintis.pem" --exclude '.git/' --exclude 'node_modules/' ~/workspace/szinti/src/server/mailgun-auth.js ubuntu@vewejewelry.com:~/szinti/src/server/
ssh -T -i "~/.ssh/szintis.pem" ubuntu@vewejewelry.com << EOF
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