1. Checkout commits
2. Git branching
3. GitHub project settings

## 1. Checkout commits
```bash
git checkout commit_unique_number 

# 1 Step
# check if require commit some changes

# 2 Step in order to checkout some old commit
git checkout e5a0eab2d312fe5b

# 3 Step to back for commit continuation
git checkout branch_name
git checkout main

# some additional helpful commands:
# list of project branches
git branch

# get commit unique number
git log # just copy first 10 numbers of commit id

```

## 2. Git branching
```bash
# create new branch
git branch new_branch_name
git branch demo_branch

# get list of branches
git branch

# create new branch and checkout
git checkout -b new_branch_name
git checkout -b demo_branch_02

# checkout into branch
git checkout branch_name
git checkout demo_branch_01
git checkout main

# delete branch locally
git checkout some_other_branch_name
git branch -D branch_name

git checkout main
git branch -D demo_branch_03

# delete branch remote
git push -d origin branch_name

git push -d origin demo_branch_03

```