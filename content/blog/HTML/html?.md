---
title: HTML?
date: '2020-12-30T22:12:03.284Z'
description: 'html의 정의와 기본 속성.'
---
# 이번 문서의 목적
1. HTML의 용어를 이해합니다.
1. HTML의 구조를 이해합니다.
1. HTML의 태그의 개념을 이해합니다.

# HTML?
HTML은 Hyper Text Mark up Language의 약자입니다.
우리가 흔히 웹 페이지! 라고 부르는 것들이 사실 HTML문서입니다.

Hyper Text는 우리가 흔히 '링크'라고 부르는 것이라고 일단 알겠는데, Mark up Language는 뭘까요?

# Mark up Language?
마크업 언어는 어떤 언어일까요?

마크업 언어는 간단히 말해 '문서의 표현형식, 논리적 구조를 설명하기 위한 언어'입니다.
강조할 때는 <b>이것처럼</b> 굵게 쓰는 것, 제목과 본문처럼 구조를 나타내는 문법을 가진 것이 특징입니다.

## 마크업 언어 HTML

HTML은 이러한 마크업 언어 중 하나로 표현적, 기술적(Descriptive) 마크업 언어의 특징을 가지고 있습니다. 제가 많이 참고한 [MDN문서](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)에서는 은 표현적 마크업 언어로서의 특징의 사용을 최대한 지양하라고 권고합니다. 이 이유는 아래 코드를 참고해 봅시다.

'강아지'를 HTML로 '<b>강</b><i>아</i><u>지</u>' 처럼 표현하기 위해선 아래와 같이 작성해야합니다.
``` HTML
<b>강</b><i>아</i><u>지</u>
```
우리는 '강아지'라는 정보를 얻기 위해 `<b>`와 같은 글자에 방해를 받았습니다. 이는 핵심 정보 혹은 논리적 구조가 나타나는 정보가 아닐 뿐더러 시각 장애인에게는 무의미한 정보입니다. 따라서 이러한 표현은 가급적 멀리하는 것 같습니다.


# HTML의 요소
눈치 빠르신 분들은 이미 눈치 채셨겠지만, 위의 [강아지 예시](##마크업-언어-HTML)에서 html효과는 `<Tag>content</Tag>`모양을 하고 있습니다. 이러한 한 짝을 HTML Element라고 부릅니다. HTML Element는 여는 태그(`<Tag>`)와 닫는 태그(`</Tag>`), 그 사이의 내용으로 이루어 집니다. 어떤 Tag냐에 따라서 content가 가지는 논리적 의미 혹은 표현이 달라집니다.

### block element vs inline element

### empty element

### attribute

### comment


# HTML의 형태
HTML은 기본적으로 아래와 같은 구조를 하고 있습니다.
```HTML
<!DOCTYPE html>
<html>
  <head>
    metadata
  </head>
  <body>
    content
  </body>
</html>
```
### !DOCTYPE

말그대로 문서의 형식을 선언하는 표현입니다. 이 문서의 타입이 html임을 나타내고자 한다면 위처럼 `<!DOCTYPE html>`이라고 서술합니다. 이때, 대소문자는 구분하지 않아도 됩니다.

### head
`head` 태그는 문서에 대한 정보(meta data)를 담고 있는 태그입니다. head라는 표현에 맞게 `body`태그 보다 먼저 실행됩니다. 

### body
`body` 태그는 바로 우리 눈에 보이는 웹 페이지 내용입니다. 여기에 `head` 태그에서 불러온 CSS, JS파일들과 더불어서 우리가 아는 웹사이트를 형성합니다.


