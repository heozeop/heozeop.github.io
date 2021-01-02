---
title: HTML body
date: '2021-01-02T15:01:03.284Z'
description: 'html의 body를 알자.'
---
# 이번 문서의 목적
1. HTML body태그를 설명할 수 있다.
1. Webpage의 기본 구조를 설명할 수 있다.

# Semantic
HTML은 Markup language로서 semantic(의미론적인) 특징을 가집니다. 하지만 우리는 가끔 이것을 명확히 인지하지 못하고 `div`태그 지옥과 같은 실수를 범하곤 합니다. 따라서 semantic한 HTML문서의 작성을 위해 HTML의 body에 들어가는 기본 구조를 알아보겠습니다.

# HTML Body
[HTML Living Standard][HTML_LIVING_STANDARD]에 따르면 HTML `body` 태그는 [Sectioning Root][SECTIONING_ROOT]로, HTML문서의 내용을 담고 있습니다. `body`태그 안에 들어가는 내용들을 `Sectioning Content`라고 부르며, 일반적인 웹페이지는 아래와 같이 section 및 구성요소들을 가지고 있습니다.<sup>[1]</sup>

```HTML
<article> : 문서와 독립된 형태로 내용을 담을 수 있는 content
<section> : section 구분에 쓰이는 일반적인(generic) 태그입니다.
<h1>, <h2>, ... , <h6> : 각 섹션의 이름을 담은 태그입니다.
<nav> : 문서 내외의 다른 페이지로 이동할 수 있는 링크를 가진 요소를 담는 태그입니다.
<address> : 연락처 등의 내용을 가진 요소를 담는 태그입니다.
<aside> : 문서의 중심 내용이 아닌 다른 내용을 담는 태그입니다. `사이드바` 등이 활용예입니다.

<header> :문서의 내용 탐색에 도움이 되는 제목, 로고 검색등을 담는 태그입니다.
<main> : 문서의 중심 내용을 담는 태그입니다.
<footer> : 가장 가까운 section의 마지막에 위치하여 저작권등의 내용을 담는 태그입니다.
```

# Webpage 만들기
구현하고자 하는 웹페이지는 [다음 MDN 문서](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)에서 소개하는 웹페이지 입니다.

위 문서를 따라 zip파일을 받고 작업을 수행해 보면 됩니다. 

하면서 느낀건데 화면 분할은 정말 신경을 많이 써야겠네요. 기본 페이지 골격을 잘 잡아 놓으면 css를 활용하기도 편한 것 같습니다. 뭔가 section으로 덕지 덕지 안붙여 놔도 기본 골격을 이쁘게 짜면 되겠다는 생각이 무럭무럭 듭니다.

# 정리
오늘도 역시 목표를 달성했는지 확인하는 것으로 정리를 하겠습니다.

1. HTML body의 구조를 설명할 수 있다.
    HTML body는 HTML문서의 내용이 담기는 태그이다. HTML은 문서의 내부 요소를 `section`이라고 부르고 그 안에 담기는 내용을 `sectioning content`라고 부르며, 독립된 section을 가질 수 있는 `sectioning content`를 `sectioning root`라고 부른다. HTML body는 `sectioning root`로써 모든 `sectioning content`의 ancestor이다.
1. Webpage의 기본 구조를 설명할 수 있다.
    일반적인 웹페이지<sup>[1]</sup>는 크게 `header`, `main`, `footer`를 가진다. 
    1. `header`에는 문서의 내용을 추론하는데 도움을 주는 제목, 링크, 메뉴바등을 담을 수 있으며, 따라서 `section`, `nav`, `h1` 등의 태그들이 포함되기도 한다. 
    2. `main`에는 주된 내용이 들어가는 부분으로 `aside`, `article`, `section`등이 포함된다. 
    3. `footer`에는 저작권 등 웹페이지를 소비하는 모든 사람에게 해당 되는 내용은 아니나 법률, 소비자의 권익 보호 등의 이유로 공개가 필요한 내용들이 담깁니다. `nav`, `address`등의 태그가 들어갑니다.

# 다음은?
1. css의 요소에 대해 설명할 수 있다.
1. 웹페이지 하나를 클론해 본다.(youtube)

# 출처
[1]: [MDN Document and website structure](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure), [Whatwg.rg 4.3 Sections](https://html.spec.whatwg.org/multipage/sections.html#sections)

[HTML_LIVING_STANDARD]: https://html.spec.whatwg.org/multipage/sections.html#the-h1,-h2,-h3,-h4,-h5,-and-h6-elements
[SECTIONING_ROOT]: https://html.spec.whatwg.org/multipage/sections.html#sectioning-root