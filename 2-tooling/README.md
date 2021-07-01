# Tooling

This page will present documentation around the development tooling.
Please refer to the documentation listed below for exhaustive details.

## Git

Shell is largely used to development, however any tools supporting [git](https://githowto.com/) can be used:

- [Windows](https://gitforwindows.org/)
- [Mac](https://desktop.github.com/)
- [All platforms](https://git-scm.com/)

### Setup & Init

Configuring user information used across all local repositories:

```sh
# list all config
git config --list

# set a name that is identifiable for credit when review version history
git config --global user.name “[firstname lastname]”

# set an email address that will be associated with each history marker
git config --global user.email “[valid-email]”

# initialize an existing directory as a Git repository
git init

# retrieve an entire repository from a hosted location via URL
git clone [url]
```

### Stage

Working with snapshots and the Git staging area:

```sh
# show modified files in working directory, staged for your next commit
git status

# add a file as it looks now to your next commit (stage)
git add [file]

# unstage a file while retaining the changes in working directory
git reset [file]

# diff of what is changed but not staged
git diff

# commit your staged content as a new commit snapshot
git commit -m “[descriptive message]”

# save modified and staged changes
git stash

# apply the stashed changes
git stash apply
```

Some of the projects follow follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) convention and hooks will enforce such rules.

### Branch & merge

```sh
# list branches
git branch

# create new branch with the current commit
git branch [branch-name]

# switch to another branch and check it out into working directory
git checkout

# merge [branch] into the current branch
git merge [branch]
```

You can find further information about branching and merging strategy on the onboarding pack. <br>CVS uses a semi-linear merge strategy with squashed commits on merge.

### Compare

```sh
# show the commit history for the currently active branch
git log

# show the commit history in a formatted and compact version (title)
git log --oneline --decorate --graph
```

### Update and rewrite history

```sh
# add a git URL as an alias
git remote add [alias] [url]

# fetch branch(es) from remote
git fetch [alias]

# send local change to remote branch
git push

# fetch and merge changes from remote into current branch
git pull

# replay history of [branch] into current branch
git rebase [branch]

# make the current commit message editable
git commit --amend
```

## Additional links

- [Full documentation](https://git-scm.com/doc)
- [Undo things with git](https://ohshitgit.com/)

## Pro tips

Your shell may already provide aliases for you that can also be configured using the git. Below is a list of useful aliases that could be added depending on your needs.

You list all your alias running the follow command in your shell

```sh
# list all aliases
alias

-='cd -'
...=../..
....=../../..
.....=../../../..
......=../../../../..
1='cd -'
2='cd -2'
3='cd -3'
4='cd -4'
5='cd -5'
6='cd -6'
7='cd -7'
8='cd -8'
9='cd -9'
_='sudo '
afind='ack -il'
config='/usr/bin/git --git-dir=/Users/jlazarini/.cfg/ --work-tree=/Users/jlazarini'
egrep='egrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
fgrep='fgrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
g=git
ga='git add'
gaa='git add --all'
gap='git apply'
gapa='git add --patch'
gau='git add --update'
gav='git add --verbose'
gb='git branch'
gbD='git branch -D'
gba='git branch -a'
gbd='git branch -d'
gbda='git branch --no-color --merged | command grep -vE "^(\+|\*|\s*(master|develop|dev)\s*$)" | command xargs -n 1 git branch -d'
gbl='git blame -b -w'
gbnm='git branch --no-merged'
gbr='git branch --remote'
gbs='git bisect'
gbsb='git bisect bad'
gbsg='git bisect good'
gbsr='git bisect reset'
gbss='git bisect start'
gc='git commit -v'
'gc!'='git commit -v --amend'
gca='git commit -v -a'
'gca!'='git commit -v -a --amend'
gcam='git commit -a -m'
'gcan!'='git commit -v -a --no-edit --amend'
'gcans!'='git commit -v -a -s --no-edit --amend'
gcb='git checkout -b'
gcd='git checkout develop'
gcf='git config --list'
gcl='git clone --recurse-submodules'
gclean='git clean -id'
gcm='git checkout master'
gcmsg='git commit -m'
'gcn!'='git commit -v --no-edit --amend'
gco='git checkout'
gcount='git shortlog -sn'
gcp='git cherry-pick'
gcpa='git cherry-pick --abort'
gcpc='git cherry-pick --continue'
gcs='git commit -S'
gcsm='git commit -s -m'
gd='git diff'
gdca='git diff --cached'
gdct='git describe --tags $(git rev-list --tags --max-count=1)'
gdcw='git diff --cached --word-diff'
gds='git diff --staged'
gdt='git diff-tree --no-commit-id --name-only -r'
gdw='git diff --word-diff'
gf='git fetch'
gfa='git fetch --all --prune'
gfg='git ls-files | grep'
gfo='git fetch origin'
gg='git gui citool'
gga='git gui citool --amend'
ggpull='git pull origin "$(git_current_branch)"'
ggpur=ggu
ggpush='git push origin "$(git_current_branch)"'
ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'
ghh='git help'
gignore='git update-index --assume-unchanged'
gignored='git ls-files -v | grep "^[[:lower:]]"'
git-svn-dcommit-push='git svn dcommit && git push github master:svntrunk'
gk='\gitk --all --branches'
gke='\gitk --all $(git log -g --pretty=%h)'
gl='git pull'
glg='git log --stat'
glgg='git log --graph'
glgga='git log --graph --decorate --all'
glgm='git log --graph --max-count=10'
glgp='git log --stat -p'
glo='git log --oneline --decorate'
globurl='noglob urlglobber '
glod='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'
glods='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'' --date=short'
glog='git log --oneline --decorate --graph'
gloga='git log --oneline --decorate --graph --all'
glol='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'
glola='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --all'
glols='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --stat'
glp=_git_log_prettily
glum='git pull upstream master'
gm='git merge'
gma='git merge --abort'
gmom='git merge origin/master'
gmt='git mergetool --no-prompt'
gmtvim='git mergetool --no-prompt --tool=vimdiff'
gmum='git merge upstream/master'
gp='git push'
gpd='git push --dry-run'
gpf='git push --force-with-lease'
'gpf!'='git push --force'
gpoat='git push origin --all && git push origin --tags'
gpristine='git reset --hard && git clean -dffx'
gpsup='git push --set-upstream origin $(git_current_branch)'
gpu='git push upstream'
gpv='git push -v'
gr='git remote'
gra='git remote add'
grb='git rebase'
grba='git rebase --abort'
grbc='git rebase --continue'
grbd='git rebase develop'
grbi='git rebase -i'
grbm='git rebase master'
grbs='git rebase --skip'
grep='grep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
grev='git revert'
grh='git reset'
grhh='git reset --hard'
grm='git rm'
grmc='git rm --cached'
grmv='git remote rename'
groh='git reset origin/$(git_current_branch) --hard'
grrm='git remote remove'
grs='git restore'
grset='git remote set-url'
grss='git restore --source'
grt='cd "$(git rev-parse --show-toplevel || echo .)"'
gru='git reset --'
grup='git remote update'
grv='git remote -v'
gsb='git status -sb'
gsd='git svn dcommit'
gsh='git show'
gsi='git submodule init'
gsps='git show --pretty=short --show-signature'
gsr='git svn rebase'
gss='git status -s'
gst='git status'
gsta='git stash push'
gstaa='git stash apply'
gstall='git stash --all'
gstc='git stash clear'
gstd='git stash drop'
gstl='git stash list'
gstp='git stash pop'
gsts='git stash show --text'
gstu='git stash --include-untracked'
gsu='git submodule update'
gsw='git switch'
gswc='git switch -c'
gtl='gtl(){ git tag --sort=-v:refname -n -l "${1}*" }; noglob gtl'
gts='git tag -s'
gtv='git tag | sort -V'
gunignore='git update-index --no-assume-unchanged'
gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
gup='git pull --rebase'
gupa='git pull --rebase --autostash'
gupav='git pull --rebase --autostash -v'
gupv='git pull --rebase -v'
gwch='git whatchanged -p --abbrev-commit --pretty=medium'
gwip='git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign -m "--wip-- [skip ci]"'
history=omz_history
l='ls -lah'
la='ls -lAh'
ll='ls -lh'
ls='ls -G'
lsa='ls -lah'
md='mkdir -p'
rd=rmdir
run-help=man
which-command=whence
```
