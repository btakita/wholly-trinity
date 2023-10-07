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
cd $DIR
tmux split-window -v $SHELL
cd $DIR/apps/web
tmux split-window -h $SHELL
tmux select-pane -t 0
cd $DIR/apps/web
tmux split-window -h $SHELL
tmux send-keys 'clear; bun dev' C-m
tmux select-pane -t 0

tmux select-window -t 0
