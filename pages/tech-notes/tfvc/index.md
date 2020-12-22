---
layout: tech-note
title: Team Foundation Version Control (TFVC)
permalink: /tfvc/
first_published: 2020-12-22
last_updated: 2020-12-22
keywords: [tfs, tfvc, version_control, azure_devops_server]
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

## Search changeset comments

Install `TFS Power Tools`. Open developer command prompt. Launch GUI app
_Search Changesets_ with command

```
tfpt searchcs
```

Make sure that the the server name URL includes the TFS collection, for
example: `http://some-host-name:51234/tfs/CollectionName`

## Checking membership to groups

```
tfssecurity /m "{name of project group}" n:{domain\username} /collection:{URL of TFS App Tier}
```

## TFS in Visual Studio is slow

Check in or store elsewhere pending changes, for all workspaces. Remove all
local and remote workspaces. End all related TFS and Visual Studio processes.

## Get branches created by user

Use URL `http://{instance_with_port_and_possibly_path}/{collection_name}/_apis/tfvc/branches[/path]?includeParent=false&includeChildren=true&includeDeleted=false&includeLinks=false`

- `[/path]` is optional
- `includeChildren=true` means branch of branches, which TFS calls children. It
  does not necessarily _children_ like children in a file system hierarchy.
  
## Get version from command line

Open developer command prompt for VS, change dir to one that is a child of a workspace and run

```
tf get
```

## References

1. [Branching and Merging (Team Explorer Everywhere)](https://msdn.microsoft.com/en-us/library/gg475908(v=vs.100).aspx)
1. [Determining User Membership in TFS Security Group in TFS 2010](https://blogs.technet.microsoft.com/chrad/2010/12/17/tfs-2010-securityhow-to-determine-if-a-user-is-a-member-of-a-tfs-group-or-a-windows-group/)
1. [TFVC branches](https://docs.microsoft.com/en-us/vsts/integrate/previous-apis/tfvc/branches?view=vsts)
1. [Use Team Foundation version control commands](https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/use-team-foundation-version-control-commands?view=azure-devops)
