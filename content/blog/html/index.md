---
title: HTML?
date: '2020-12-30T22:12:03.284Z'
description: 'html의 정의와 기본 속성.'
---
# 이번 문서의 목적
1. HTML의 정의를 설명할 수 있다.
1. HTML의 기본 구조를 설명할 수 있다.
1. HTML Element가 무엇인지, 구성요소는 무엇인지 설명할 수 있다.

# HTML?
HTML은 Hyper Text Mark up Language의 약자입니다.
우리가 흔히 웹 페이지! 라고 부르는 것들이 사실 HTML문서입니다.

Hyper Text는 우리가 흔히 '링크'라고 부르는 것이라고 일단 알겠는데, Mark up Language는 뭘까요?

# Markup Language?
`Markup Language`는 어떤 언어일까요?

`Markup Language`는 간단히 말해 '문서의 표현형식, 논리적 구조를 설명하기 위한 언어'입니다.
강조할 때는 <b>이것처럼</b> 굵게 쓰는 것, 제목과 본문처럼 구조를 나타내는 문법을 가진 것이 특징입니다.

## Markup Language HTML

HTML은 이러한 `Markup Language` 중 하나로 `표현적, 기술적(Descriptive) Markup Language`의 특징을 가지고 있습니다. 제가 많이 참고한 [MDN문서](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started)에서는 은 `표현적 Markup Language`로서의 특징의 사용을 최대한 지양하라고 권고합니다. 이 이유는 아래 코드를 참고해 봅시다.

'강아지'를 HTML로 '<b>강</b><i>아</i><u>지</u>' 처럼 표현하기 위해선 아래와 같이 작성해야합니다.
``` HTML
<b>강</b><i>아</i><u>지</u>
```
우리는 '강아지'라는 정보를 얻기 위해 `<b>`와 같은 글자에 방해를 받았습니다. 이는 핵심 정보 혹은 논리적 구조가 나타나는 정보가 아닐 뿐더러 시각 장애인에게는 무의미한 정보입니다. 따라서 이러한 표현은 가급적 멀리하는 것 같습니다.


# HTML의 요소
이미 눈치 채셨겠지만, 위의 [강아지 예시](##Markup-Language-HTML)에서 html코드는 `<Tag>content</Tag>`모양을 하고 있습니다. 이러한 한 짝을 `HTML Element`라고 부릅니다. `HTML Element`는 여는 태그(`<Tag>`)와 닫는 태그(`</Tag>`), 그 사이의 내용(`Content`)으로 이루어 집니다. 어떤 `Tag`냐에 따라서 `content`가 가지는 논리적 의미 혹은 표현이 달라집니다.

## Block Element vs Inline Element
HTML은 차지하는 영역에 따라서 `Block Element`와 `Inline Element`로 구분이 됩니다. 가로로 모든 영역을 차지 하면 `Block Element`, 딱 content 만큼의 width를 가지면 `Inline Element`로 구분합니다. 따라서 `Block Element`는 `Inline Element`에 포함될 수 없고, 역은 가능합니다. 좀 더 세세하게 알아보죠.

### 1. Block Element
`Block Element`는 앞뒤 요소에 대해 새로운 줄(Line)을 만듭니다. 일반적으로 List, Fotter등 논리적 구조를 나타냅니다. 기술적(Descriptive) Markup 태그가 여기에 해당합니다.

### 2. Inline Element
`Inline Element`는 앞뒤 요소에 대해 새로운 줄을 만드는 것이 아닌, 딱 해당 element의 content에 대해 역할을 하는 element입니다. 따라서 `Inline Element`는 항상 Block Element안에 포함될 수 있습니다. 표현적 Markup 태그들이 여기에 해당합니다.

## Empty Element
위에서 `HTML Element`는 여는 태그와 닫는 태그, 그 안의 내용으로 이루어져 있다고 설명했습니다. 하지만 때로는 내용이 필요 없는 문서의 요소가 있습니다. 예로 사진(`<img>`)이 있습니다. 따라서 그러한 `HTML Element`를 `Empty Element`, 혹은 `Void Element`라고 부릅니다.

## attribute
크롬 브라우저에서 개발자 도구를 사용해서 HTML을 살펴보면 다음과 같은 패턴들이 보입니다.
``` HTML
<div class="hello world"></div>
```
위에서 `class`와 같이 여는 태그의 뒤에 붙어 `=` 로 연결되어 `HTML Element`의 추가적인 정보로써 활용되는 값들을 `Attribute`라고 합니다. 이 `Attribute`는 재미있는 특징들을 가집니다. 하나하나 알아봅시다.

1. 요소 이름 다음에 바로 오는 속성은 요소 이름과 속성 사이에 공백이 있어야 되고, 하나 이상의 속성들이 있는 경우엔 속성 사이에 공백이 있어야 합니다.
    ```HTML
    <divclass="hohoho"></div> => bad
    <div class="hohoho"></div> => good
    ```
1. 속성 중 boolean값의 등장은 true값을 의미합니다.
   ```HTML
    1. <option selected></option> 
    ``` 
1. 속성 이름 다음엔 등호(=)가 붙습니다.
    ```HTML
    1. <div class="hohoho"></div> => class의 값은 "hohoho"
    ```
1. 속성 값은 열고 닫는 따옴표로 감싸는게 좋습니다.
    ```HTML
    <div class=hohoho hoho></div> => bad(색도 다르죠?)
    <div class="hohoho hoho"></div> => good
    <div class='hohoho hoho'></div> => good
    ```
1. 속성의 이름으로 [Global Attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)를 마구잡이로 사용하면 안됩니다.

      아래의 예시를 통해 알아봅시다.
      
      ```HTML
      1. 정상
      <div id="hello" dir="rtl">
        <div dir="ltr">
          hello
        </div>
      </div>

      2. 이상
      <div id="hello" dir="rtl">
        <data dir="ltr">
          hello
        </data>
      </div>
      ```

    `dir`이라는 속성은 문서의 방향을 의미합니다. 우리 한국은 왼쪽에서 오름쪽으로 읽죠? 아랍권의 언어는 오른쪽에서 왼쪽으로 읽습니다. 왼쪽에서 오른쪽 left to right 해서 `ltr`이고, 오른쪽에서 왼쪽 right to left해서 `rtl`입니다. 

    HTML은 상위 요소의 속성을 하위 요소가 상속받습니다. 같은 속성을 값을 바꿔 선언하면 바뀐 값이 하위 요소에 상속됩니다. 바로 위의 1번 정상인 경우를 살펴보면 `dir`이라는 속성은 가장 밖 `rtl`에서 2번째인 `ltr`로 바뀝니다. 결과적으로 hello는 화면 왼쪽에 쓰여지게 됩니다. 즉, 가장 안쪽의 `hello`는 자신에게 가장 가까운 `dir`속성인 `ltr`을 적용 받게 됩니다.

    하지만 `dir`이라는 속성이 없는 `data`태그는 덮어 쓰기가 안됩니다. 따라서 `hello`는 자신에게 적용 될 수 있는 `dir`속성을 따라 화면 오른쪽에 쓰여지게 됩니다. 이와 같이 우리가 의도하지 않은 결과가 있을 수 있기 때문에 [Global Attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)는 사용하지 않습니다.

## comment
주석은 문서를 보여줄 때, 해당 부분이 어떤 의미를 가지는지 약간의 설명을 다는 부분입니다. 우리가 HTML로 논리적 구조를 설명할때 해당 논리 구조가 어떤 의미인지 바로 파악하기 어렵다는 생각이 든다면, 주석으로 어떤 이유인지 설명하면 좋습니다.

HTML의 주석은 아래와 같이 여는 부분은 `<!--`이고, 닫는 부분은 `-->`입니다. 이 사이에 설명하고자 하는 바를 채워 넣으면 됩니다. 
```HTML
<!-- 호호호 주석이에요 -->
```
여러 줄일때는 어떻게 할 수 있을 까요? 그냥 여러 줄을 쓰면 됩니다. 아래 처럼요.
```HTML
<!--
  호호호
  주석이에요
-->
```


# HTML 문서의 형태
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

위에서 각 태그는 파일당 하나만 존재합니다. 각 태그가 여러번 반복되어 나타나면 `doctype`과 `html`은 문서 상위에 있는 것만 유효하고, `head`와 `body`는 하나로 합쳐집니다. 합쳐지는 순서는 문서의 상단에서 하단순입니다.

### !DOCTYPE

말그대로 문서의 형식을 선언하는 표현입니다. 이 문서의 타입이 html임을 나타내고자 한다면 위처럼 `<!DOCTYPE html>`이라고 서술합니다. 이때, 대소문자는 구분하지 않아도 됩니다.

### html
`html` 태그는 마치 나무의 뿌리와 같이 이 태그 내부에 HTML 요소들이 들어가게 되어 HTML의 루트 요소로 불립니다.`lang`등 HTML의 하위 요소들에 적용되는 전역 속성들을 가집니다. 

### head
`head` 태그는 문서에 대한 정보(meta data)를 담고 있는 태그입니다. head라는 표현에 맞게 `body`태그 보다 먼저 실행됩니다. 

### body
`body` 태그는 바로 우리 눈에 보이는 웹 페이지 내용입니다. 여기에 `head` 태그에서 불러온 CSS, JS파일들과 더불어서 우리가 아는 웹사이트를 형성합니다.


# 정리
우리는 이번에 HTML의 정의와 기본 개념을 익혔습니다.
목적을 달성했는지 한번 확인하고 넘어가 봅시다.

1. HTML의 정의를 설명할 수 있다.
    
    Hyper Text Markup Language의 약자로 링크를 가진 Markup language다.
    Markup language는 문서의 논리적 구조, 수식, 시각적 요소를 설명하기 위한 언어이다. 즉, HTML은 링크도 사용하여 나타 내고자 하는 문서를 설명하기 위한 언어이다.

1. HTML의 기본 구조를 설명할 수 있다.

    HTML은 아래와 같은 기본 구조를 가지고 있다. 아래 기본 구조에 등장하는 태그는 문서당 한개만 존재한다. `Doctype`, `html`은 상위만 유효하고, `head`와 `body`는 문서 상단에서 하단 방향으로 합쳐져 하나만 존재한다.
    ```HTML
    <!Doctype html> => 문서의 형식을 선언한다.
    <html> => HTML의 루트요소입니다. 하위 요소에 적용되는 전역 속성을 가진다.
      <head> => 문서의 메타 데이터를 나타낸다.
      </head>
      <body> => 우리 눈에 보이는 실제 정보가 들어간다.
      </body>
    </html>
    ```

1. HTML Element가 무엇인지, 구성요소는 무엇인지 설명할 수 있다.

    HTML Element는 HTML를 이루는 논리적 구조, 표현 방식을 정의하는 요소들을 일컫는다. 구성은 여는 태그(`<>`), 닫는 태그(`</>`), 내용으로 이루어져 있으며, 각 여는 태그 안에 속성이 담길 수 있고, 적용 가능한 속성은 태그마다 다르다.

    속성을 사용할때는 다음과 같은 특징을 가진다.
    
    1. 속성간에는 띄어쓰기를 활용한다.
    1. boolean 값을 가지는 속성은 그냥 쓰면 true로 인식한다.
    1. 속성에 값을 할당하기 위해서는 =를 사용한다.
    1. 속성의 값은 따옴표안에 쓰는 것이 좋다.
    1. 태그에 따라 적용 가능한 속성이 다름을 알고 사용한다.

# 다음은?
1. 어떤 태그들이 있는지, 어떻게 쓰는지, 어떤 걸 만들 수 있는지, 어떤 걸 하면 안되는지 알아보려 합니다.
1. head와 body에 어떤 정보들이 들어가야 하는지 알아봅니다.
