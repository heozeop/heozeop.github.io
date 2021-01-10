---
title: CSS 기본 컨셉
date: '2021-01-04T18:01:03.284Z'
description: 'CSS 규칙 충돌에 대비해서 Inheritance, Specificity, Cascading을 알아봅니다.'
---

# 이번 문서의 목적
1. CSS Inheritance, Cascading의 정의를 설명할 수 있다.
1. CSS Inheritance, Cascading의 적용 과정을 설명할 수 있다.
1. CSS의 규칙 충돌을 설명할 수 있다.

# CSS 규칙 충돌?
CSS의 역할은 한 Markup Element, HTML에서는 HTML Element에 대해 꾸며주는 역할을 합니다. CSS 규칙 충돌은 한 HTML Element에 대해 여러가지 규칙이 적용될 수 있는 상황을 이야기 합니다.

우리는 논의 중 충돌이 발생하면 합의된 기준을 두고 점수를 매겨 우선순위를 산출합니다. 기준을 합의할 때, 각 기준은 명확하고 측정이 가능해야 합니다. CSS에서는 어떻게 이런 기준을 정하고, 어떻게 적용하고 있을까요? 이 것을 알아서 어떤게 좋을까요?

이 글을 통해 우리는 CSS의 기본 컨셉인 Inheritance, Cascading에 대해 알아볼 것입니다. 그를 통해 특정 상황에서 어떤 규칙이 적용될 것인지 인지하고, CSS 자체가 아닌 우리가 당면한 진짜 문제를 해결하는데 시간을 쏟을 수 있게 됩니다. 이 글은 [다음 글](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)을 많이 참조하였으며, 시간날 때 보시는 것을 추천드립니다.

# Basic Concepts
## Inheritance
### 정의
특정 CSS속성들은 상위 요소로 부터 하위 요소에 상속됩니다. 대표적으로 color, font-family등이 있으며, 아닌 것으로는 width, height 등이 있습니다.

### 4개의 controll 변수
| 아래 '속성'은 상속되는 속성들을 말합니다.

- **unset**

  특정 엘리먼트의 모든 속성을 사용하지 않습니다.

- **initial**

  특정 엘리먼트 기본값을 가집니다.

- **inherit**

  바로 상위 엘리먼트의 속성을 가져옵니다.

- **revert**

  특정 엘리먼트의 브라우저 기본값 속성을 가지게 합니다.

  브라우저에 따라 제한적으로 적용됩니다.

### + all
거의 모든 상속 가능 속성에 대해서 위 4가지 controll 변수로 조정 가능합니다. 다음과 같이 사용합니다.
```CSS
h1 {
  all: unset/initial/inherit/revert
}
```

## Cascading
### 정의
CSS 적용 기본 규칙입니다. 

동일 element에 대해서 다른 CSS rule set이 선언 되었을때, 아래 고려 사항에 따라 rule set이 결정됩니다. 적용 우선순위는 순서대로 입니다.

1. Importance 
2. Specificity 
3. Source order

### 1. Importance
| !important

모든 ruleset을 깡그리 무시하고 해당 ruleset을 적용합니다.

**ex)**
``` CSS
body {
  color: blue;
}

p {
  color: red !important;
}
```
```HTML
<p>안녕</p>
<span>반가워</span>
```

<p style="color: red;">안녕</p>
<span style="color: blue;">반가워</span>

### 2. Specificity
 한국어로 '특정성'이라고 부르는 이 고려사항은 CSS rule set의 selector의 구체성을 점수화한 것입니다. 이 점수를 기준으로 CSS rule set 충돌 상황에서 높은 점수를 가진 rule set을 적용합니다.

이 Specificity의 계산 방법은 아래와 같습니다.
- 1000점: inline style (`<div style="여기"></div>`)
- 100 점: id selector (`#id`)
- 10  점: class selector(`.class`), attribute selector (`[attribute]`), psuedo-class(`:pesudo-class`)
- 1   점: pseudo-element && overall selector(`p, span`,`::first-letter` )

**ex)**

```css
p {
  /* 1점 */
}

p::first-letter {
  /* 2점 */
}

.hello:hover {
  /*20점*/
}

.hello > #id > a[href="/"] {
  /*121점*/
}
```


### 3. Source order
1번과 2번에서 같은 수준의 중요도를 가진다면, 소스의 하단에 있는 ruleset이 적용됩니다.

**ex)**
```CSS
p {
  color: blue;
}
p {
  color: red;
}
```
```HTML
<p>히히</p>
```
<p style="color: red;">히히</p>


# 시사점
- !important는 일관된 css rule set 관리를 위해 되도록 사용하지 않는다.
- CSS selector를 이용한 구조화 시 specificity를 고려한다.
- 같은 규칙을 여러번 사용하는 것을 지양한다.

# 정리
### 1. CSS Inheritance, Cascading의 정의를 설명할 수 있다.
### 2. CSS Inheritance, Cascading의 적용 과정을 설명할 수 있다.
### 3. CSS의 규칙 충돌을 설명할 수 있다.

# 다음은?
### 1. CSS의 박스모델을 설명할 수 있다.
### 2. CSS의 레이아웃을 설명할 수 있다.