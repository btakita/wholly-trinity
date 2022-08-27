#!/bin/bash
nvmrc=~/.nvm/nvm.sh
if [ -e $nvmrc ]; then
  source $nvmrc
  nvm use
fi
DIR_DEFAULT=~/work/stargate/wholly-trinity/
DIR="${DIR:-$DIR_DEFAULT}"

cd $DIR
tmux-rename-window
tmux send-keys 'nvm use' C-m
cd $DIR
tmux split-window -v $SHELL
tmux send-keys 'nvm use' C-m
cd $DIR/apps/web
tmux split-window -h $SHELL
tmux send-keys 'nvm use' C-m
tmux select-pane -t 0
cd $DIR/apps/web
tmux split-window -h $SHELL
tmux send-keys 'nvm use' C-m
tmux send-keys 'pnpm run dev' C-m
tmux select-pane -t 0

tmux select-window -t 0
