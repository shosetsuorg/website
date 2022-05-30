---
title: Frequently Asked Questions
lang: en-US
---

# Frequently Asked Questions

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



## Work in Progress
You can help fill this in by pressing the **`Help us improve this page`** link.
