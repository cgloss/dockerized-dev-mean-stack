#!/bin/bash
echo "Waiting for startup.."
until curl http://primary:28017/serverStatus\?text\=1 2>&1 | grep uptime | head -1; do
  printf '.'
  sleep 1
done

echo curl http://primary:28017/serverStatus\?text\=1 2>&1 | grep uptime | head -1
echo "Started.."

sleep 10

echo SETUP.sh time now: `date +"%T" `
mongo --host primary:27017 <<EOF
   var cfg = {
        "_id": "rs",
        "version": 1,
        "protocolVersion": 1,
        "members": [
            {
                "_id": 0,
                "host": "primary:27017",
                "priority": 2
            },
            {
                "_id": 1,
                "host": "secondary:27017",
                "priority": 0
            }
        ]
    };
    rs.initiate(cfg, { force: true });
    rs.reconfig(cfg, { force: true });
    db.getMongo().setReadPref('nearest');
EOF

tail -f /dev/null