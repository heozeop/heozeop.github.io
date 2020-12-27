---
title: 정적 테스팅 자동화 설정 해보기
date: '2020-12-27T22:12:03.284Z'
description: '장장 5시간이 걸린 정적 테스팅 설정기록'
---
### 목차
1. [작업 배경](#배경)
1. [작업 목적](#목적)
1. [작업 내용](#내용)
1. [작업 성과](#성과)
1. [다음은?](#다음은?)

<br/>

# 배경
> **커밋할 때마다 lint를 쳐야되요.**

 필자는 주로 사용하는 IDE인 vscode를 저장할 때 마다 자동으로 포매팅 하도록 설정하였습니다. 하지만 가끔 다른 IDE를 사용할 때면, 매번 직접 `yarn lint`나 `yarn format`을 쳐야했습니다. 필자는 매우 게으른 관계로 매번 lint조차 적용되지 않은 코드들이 업스트림으로 올라갔습니다. 굉장히 마음에 안드는 상황이었고, 자동화 도구를 찾기 시작했습니다.

# 목적

아래 목적의 달성을 위해 [`husky`][HUSKY]와 [`lint-staged`][LINT_STAGED]를 사용합니다.
1. Do lint when commit on target files
1. Do validate when push to upstream

# 내용
## 개념
### husky?
 [`husky`][HUSKY]는 간단히 말해 [`git hook`][GIT_HOOK]을 실행시켜주는 도구입니다. [`git hook`][GIT_HOOK]은 `git`을 사용함에 있어 commit, push 등의 이벤트에 대해 시작, 과정, 완료 시점에 특정 `shell script`를 실행시키는 도구입니다. `.git/hooks`에 sample들이 있으니 한번 확인해 보시는 것도 좋을 것 같습니다. 

### lint-staged?
[`lint staged`][LINT_STAGED]는 staging 된 파일 중 주어진 경로에 해당 되는 파일이 있을 경우 특정 스크립트를 실행시켜주는 도구입니다. 즉, 여러 프로젝트가 있거나 다양한 언어를 사용해 구현하였을 경우, 각 파일 마다 다른 설정으로 linting을 할 수 있게 해줍니다. 물론 경로만 전달 하지 않고, 다른 설정을 추가하는 것 또한 가능합니다.

---

## Why?
### husky를 선택한 이유
1. 필자가 보기 쉬운 코드 중에 [`husky`][HUSKY]를 사용한 코드가 있었습니다.

### lint-staged를 선택한 이유
1. 여러 언어로 만드는 경우엔 특정 폴더의 특정 파일만 lint할 필요가 있습니다. 이를 위해 선택했습니다.

### 대체제는?
- [lefthook][LEFT_HOOK]

---

## 어떻게 했는가?

``` javascript
// package.json
  //husky
  "husky": {
    "hooks": {
      // 목적 1을 달성하기 위해 수행합니다.
      "pre-commit": "lint-staged",
      // 목적 2를 달성하기 위해 수행합니다.
      "pre-push": "yarn validate && yarn build",
    }
  },
  // lint-staged
  "lint-staged": {
    // staging 된 파일 중 아래 경로에 해당 되는 파일이 있다면,
    // 아래 array에 있는 명령어가 수행됩니다.
    // 만약 중간에 실패하면, 실행이 취소됩니다.
    "src/**/*.+(js|jsx|ts|tsx)": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  },
```

# 성과

1. [`husky`][HUSKY] 옵션 설정을 어떻게 하는지 알았습니다.
1. [`lint staged`][LINT_STAGED]를 빠르게 도입할 수 있습니다.


# 다음은?
1. [`husky`][HUSKY]를 더 세세하게 정리합니다.
1. [`lint staged`][LINT_STAGED]를 더 세세하게 정리합니다.

[GIT_HOOK]: https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Hooks 
[HUSKY]: https://github.com/typicode/husky
[LINT_STAGED]: https://github.com/okonet/lint-staged#readme
[LEFT_HOOK]: https://github.com/Arkweid/lefthook