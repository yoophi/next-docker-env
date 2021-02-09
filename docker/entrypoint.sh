#!/bin/sh

cat <<EOF > /app/config.ini
hello = world
foo = $FOO
bar = $BAR
EOF

./node_modules/.bin/next start
