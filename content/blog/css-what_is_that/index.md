---
title: css?
date: '2021-01-02T15:01:03.284Z'
description: 'css그게 뭔데'
---
# 이번 문서의 목적
1. CSS의 정의를 설명할 수 있다.

# CSS?
## CSS의 정의
CSS는 Cascading Style Sheet의 약자입니다.

## CSS의 기본 문법 구조
CSS는 Rule Set(혹은 Rule)이라고 부르는 기본 단위가 있습니다. 가장 단순한 구조는 아래와 같습니다.

```CSS
/* RULE SET */
selector {
  property: value;
}
```
selector는 우리가 작성했던 `HTML Element`의 요소들을 가리킵니다. 말 그대로 selector 입니다. selector의 설정은 [다음](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors)을 참조해 주세요.

## HTML에 style을 입히는 방법
### 1. `<style>`태그를 이용한다.
HTML의 HEAD 태그에서 style 태그를 열고 그 안에 CSS문법으로 rule을 작성하면 적용할 수 있습니다.
```HTML
<head>
  <style>
    h1 {
      color: red;
    }
  </style>
</head>
```

### 2. HTML Element 태그에 style 속성을 이용한다.
HTML 태그의 style 속성에 다음 처럼 css값을 집어 넣을 수 있습니다.
```HTML
<h1 style="color:red;">hello</h1>
```

### 3. .css 확장자 파일에서 style 속성을 정의한다.
.css파일을 생성하고, 해당 파일 안에서 css 속성을 정의한 뒤, HTML head태그에서 link태그로 연결합니다. 그렇게 하면 다양한 표현 요소들을 .css파일에서 관리할 수 있습니다.
``` CSS
/* style.css file */
h1 {
  color: red;
}
```
``` HTML
<!-- index.html -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## Cascading?

Cascading은 '폭포'라는 뜻을 가지고 있는데, 이는 CSS가 실제로 동작하는 방식과 관련이 있습니다.

CSS는 `inline > stylesheet > user agent`로 규정된 CSS의 가치를 규정합니다. HTML에 inline으로 들어가는 style은 가장 우선시 됩니다. inline 요소가 있으면, 치트키인 !(important)를 사용하지 않는 이상 우리가 .css파일에서 선언한 style은 적용되지 않습니다.

이는 같은 레벨의 요소가 있을 경우에 우선순위에 따라 style 적용을 달리하기 위해 사용하는 방법입니다. 따라서 '이게 왜 적용 안되지?'라는 의문이 들게되면 위의 규칙에 의거해서 분석해 볼 수 있습니다.

# 정리
### 1. CSS의 정의를 설명할 수 있다.
CSS는 Cascading Style Sheet의 약자로, HTML과 XML 문서의 스타일을 정의하는데 사용하는 언어입니다. 이것을 통해 사용자로 하여금 정보를 더욱 쉽고 빠르게 얻을 수 있도록 도움을 줍니다.

CSS는 Rule Set 혹은 Rule이라고 불리는 단위로 문법이 전개됩니다. Rule Set은 아래와 같이 selector, property, value로 이루어 져 있습니다. 우리는 selector를 통해 HTML Element를 찾고, 해당 element의 style property 값을 value로 대체합니다.

 이 때, 적용되는 규칙은 inline style > style sheet > user agent default 순으로 적용되며, 같은 레벨의 경우 문서 하단에 있는 요소가 적용됩니다. 

```CSS
/* RULE SET */
selector {
  property: value
}
```

# 다음은?
### 1. CSS의 박스모델을 설명할 수 있다.
### 2. CSS의 레이아웃을 설명할 수 있다.