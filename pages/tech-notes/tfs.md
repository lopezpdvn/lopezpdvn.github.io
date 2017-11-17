---
layout: tech-note
title: TFS
permalink: /tfs/
first_published: 2017-06-15
last_updated: 2017-11-16
keywords: [visualstudio, tfs]
---

* TOC
{:toc}

## Rollback vs deleting changesets

Prefer rollbacking either selectively or whole changesets. This requires
additional check-ins to upload the rollback operation to the server.

## Delete branch

To delete a branch while preserving its changesets, map the branch to local
folder. Get latest version. Right click on branch and click on delete. Then
check in.

## Local folder already set for another server folder of deleted branch

Error message: `The local folder could not be set to <path> because it is
already the local folder for another server folder`

Solution is to delete the whole workspace.

Check in or undo all pending changes.

Open _Developer Command Prompt for visual Studio_.

Run below to display all available workspaces

```
tf workspaces
```

Run below to delete specific workspace

```
tf workspace /delete /server:https://[yours].visualstudio.com/DefaultCollection [workspacename];[username]
```

## References

- [Branching and Merging (Team Explorer Everywhere)](https://msdn.microsoft.com/en-us/library/gg475908(v=vs.100).aspx)
