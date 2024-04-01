# How to contribute

To start contributing [generate SSH key] and [clone repository] from github:
```shell
git clone git@github.com:cameaann/soc-dashboard.git
```

## Rules

1. Always use pull request to apply any changes. Pushing to `main` is prohibited.
2. 

## Steps to contribute a feature

1. Switch to the `main` branch:
    ```shell
    git switch main
    ```
2. Pull latest changes with `git pull`
3. Create a development branch: 
    ```shell
    git switch --create <your-branch-name>
    ```
4. Implement your feature
5. Push your branch to remote repository with `git push`
6. Open https://github.com/cameaann/soc-dashboard/pulls and create **pull request**. Write meaningfull name and description. Ensure that build is successful. 
7. Request review.
8. When pull request is approved, merge changes. Delete development branch.
9. Check your feature working well on github-pages: https://cameaann.github.io/soc-dashboard/


[generate SSH key]: https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
[clone repository]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
