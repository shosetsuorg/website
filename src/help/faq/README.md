---
title: Frequently Asked Questions
lang: en-US
---

# Frequently Asked Questions

## App

### Q: How to move from v1.x preview to v2.x.x stable?

- Install the v2.x.x release, it will install as a seperate app.
- Go to More → Backups and create a backup.
- Export this backup to an external location you can access easily.
- Open the v2.x.x release and again by going to More → Backups choose the option to restore the backup you just created.
- You should have your library back in the v2.x.x release.

Note: You will have to redownload any chapters you downloaded in the v1.x release.

### Issue with v1.#.# / preview r####

Please use the [v2.x.x stable release](https://gitlab.com/shosetsuorg/shosetsu/-/releases/permalink/latest)

## Extensions

### What is the best extension for shosetsu?

There are multiple ways to answer this.

**Short**: There is none.

**Long**: Install all of them and global search.

**Longer**: Depends on the content you like. You can try them all out but some people recommend starting with WuxiaWold, NovelFull and/or BoxNovel.

**Longest**: Why limit yourself to a single one? 
The whole point of Shosetsu is the versatility of being able to use as many different sources as you want, 
and even choose the extensions from third-party repositories if you need to. 
Use the source which has the best version of the content you seek. 

### How can i request a new extension

Go to the extensions [github](https://github.com/shosetsuorg/extensions/issues) 
Make sure there isn't another for the same one at the extensions repo. Otherwise make a new [issue](https://github.com/shosetsuorg/extensions/issues/new/choose)(Source Request)

### Where do extensions come from?

https://github.com/shosetsuorg/extensions

### Whats with some extensions not working

We haven't worked on them in awhile, If you know Lua feel free to contribute.

### Why does Sysosetsu (extension) not have images?

The website does not have images

### Why does MTL (extension) not search?

No search for MTL.

### Why does ReadLightNovel have so many issues?

Shitty website

### Best Extension/Source for "[novel title]"?

Try them all out and do a global search, or use google. Please.

### Q: Next release date?

Soonᵗᵐ

### Q: I have no Extensions, what do I do?

Please make sure you have the following options enabled in Download settings and Update Settings.

- Download/Update on Metered Connection
- Download/Update on low battery
- Download/Update on low storage

If the above fails, go to Advanced settings and click "Force update"

## How to edit backup

First, one must understand what is going on in a Shosetsu backup file.

Shosetsu takes the data from the application, Turns it into a JSON file, then gzips it, then encodes via base64, then puts it all into a file.

To reverse this, the following command can be used in a Linux terminal. 
Please ensure no other file exists with the same name.

```bash
cat BACKUPFILE.sbk | base64 -d - | gzip -d > decompressed-backup.sbk.json
```
This will print out the entire backup into the file `decompressed-backup.sbk.json`

Now you can format it, edit it, and look through it however you would like.

Upon completion, you can return it to the normal state with the following commands,
Ensuring no other file exists with the same name.

```bash
cat decompressed-backup.sbk.json | gzip | base64 > restored-backup.sbk
```
