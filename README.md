# Caproni

## git tree of the project

`main` is the main branch where the source code of HEAD always reflects a production-ready state.

`dev` is the branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release.

`feature` branches are used to develop new features for the upcoming or a distant future release.

`release` branches support preparation of a new production release.

`hotfix` branches are very much like release branches in that they are also meant to prepare for a new production release, albeit unplanned. They arise from the necessity to act immediately upon an undesired state of a live production version.

```mermaid
%% https://mermaid.js.org/syntax/gitgraph.html#gitgraph-specific-configuration-options
%% https://htmlcolorcodes.com/
%%{ init: {
        "logLevel": "debug",
        "theme": "dark",
        "gitGraph": {
            "mainBranchName": "main"
        },
        "themeVariables": {
            "git0": "#839192",
            "git1": "#C0392B ",
            "git2": "#2E86C1",
            "git3": "#F1C40F",
            "git4": "#27AE60",
            "gitInv0": "#FFFFFF",
            "gitBranchLabel0": "#FFFFFF",
            "commitLabelColor": "#FFFFFF"
        }
    }
}%%
gitGraph
    options
    {
        "theme": "neutral"
    }
    end
    commit id: "Initial commit"
    branch dev
    checkout dev
    commit id: "Start development"
    branch feature
    checkout feature
    commit id: "Add new feature"
    checkout dev
    merge feature id: "Merge new feature"
    branch hotfix
    checkout hotfix
    commit id: "Fix urgent issue"
    checkout dev
    merge hotfix id: "Merge hotfix"
    branch release
    checkout release
    commit id: "Prepare for release"
    checkout main
    merge release id: "Release new version"
    checkout dev
    merge release id: "Merge release"
```

<!-- TODO create workflow for varcel -->
<!-- TODO https://vercel.com/guides/how-can-i-use-github-actions-with-verce -->
