<template>
  <div>
    dev 分支测试 stash save 'll'<br>
测试时候出现远程库与本地库不一致error: failed to push some refs to 'https://github.com/bluetata/<br>
you can git pull --rebase origin master<br>
git add .<br>
git commit -m "fix or feat"<br>
---feat： 新增 feature<br>
fix: 修复 bug<br>
docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE等等<br>
style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑<br>
refactor: 代码重构，没有加新功能或者修复 bug<br>
perf: 优化相关，比如提升性能、体验<br>
test: 测试用例，包括单元测试、集成测试等<br>
chore: 改变构建流程、或者增加依赖库、工具等<br>
revert: 回滚到上一个版本<br>

git push origin 分支名<br>
git push origin --delete dev  删除远程分支<br>
git reset --hard a8c42 回退版本  后面数组为 git log版本库的状态前几位<br>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>