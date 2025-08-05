1. VIM text editor
2. GitHub

## 1. VIM text editor
Insert mode press key: `ESC` or `i`

Save updates or new details: 
1. Exit from `Insert` mode press key `ESC`
2. open CLI mode: `SHIFT` + `;`
3. Save data: just enter `w` and press `ENTER` key

Exit from VIM editor:  
1. Open CLI mode
2. enter `q` and press `ENTER` key

Exit or close VIM:
`ESC`, `SHIFT` + `z` (two times)

Close VIM from CLI mode:
> SHIFT + ;
> type `q` press `ENTER`
> type `q!` press `ENTER` (exit without saving)

EDIT
>`ESC` move to command mode
>`i` - insert, switched from command mode
>`s` - replaces a single character
>`x` - delete character
>`3x` - delete multiple characters
>`d` - press twice to delete a line
>`u` - undo changes
>
>Press `Shift + S` to replace multiple characters
>Press `Shift + A` to start writing at the end of a line
>
>`e` - in cmd mode move by words forward
>`b` - in cmd mode move by words backward
>`/` - in cmd mode search text
>
>`H`, `J`, `K`, `L` keys for navigation

**Force Saving:** To save changes, press `Shift + :` then type `w`

## 2. GitHub

Link both repositories local and remote.
```bash
git remote add origin https://github.com/Dailius/bt_js_testing_20250507.git
git branch -M main
git push -u origin main
```

Clone project: 
```bash
git clone https://github.com/Dailius/demo-20250507.git
git clone https://github.com/Dailius/bt_js_testing_20250507.git
```

```bash
# send updates to GitHub
git push

# receive updates from GitHub 
git pull
```




