---
title: HTML he
date: '2021-01-01T15:24:03.284Z'
description: 'HTML head태그를 알자.'
---

# 이번 문서의 목적
1. HTML의 html태그에 들어가는 내용을 설명할 수 있다.
1. HTML의 head 태그에 들어가는 내용을 설명할 수 있다.

# `<html>`
바로 직전 글에서 이 `html`태그는 HTML문서의 시작과 끝을 나타내는 태그이자 HTML 내용을 담고있는 문서에 단 하나만 존재하는 태그라고 말씀드렸습니다. 하지만 분명 우리는 문서의 `DOCTYPE`을 통해 현재 문서가 HTML 문서임을 밝혔습니다. 왜 필요할까요?

`DOCTYPE`은 엄밀히 말해 이 문서는 HTML이라고 브라우저에 알려준 것입니다. 따라서 아래 HTML이 어떻게 생겼는지, 시작점은 어디인지, 논리적 구조는 어떻게 되는지는 문서의 내용에 달렸습니다. 따라서 우리는 `html` 태그를 통해 문서의 시작과 끝을 밝히고 개발을 진행하게 됩니다. 따라서 전체 문서에 영향을 끼치는 속성들을 가지고 있습니다.

### lang
문서의 언어 속성을 가르킵니다. 기본 값은 'en'입니다. 이것을 잘 설정해 주면 screen reader와 같이 시각 장애인을 위해 웹페이지를 읽어주는 서비스에서 도움을 받는 다고 합니다.

이외에도 다양한 속성들이 다양한 값을 가집니다.([MDN `<html>`참조](https://developer.mozilla.org/ko/docs/Web/HTML/Element/html))


### 질문1. <html></html>이 여러번 나오면 어떻게 되나요?
최상단에 있는 `html` 태그의 정보만 적용되어 하단에 있는 태그 내 내용들(`<html>여기 내용</html>`)이 상단의 요소 안으로 합쳐집니다.

# `<head>`
문서의 meta data를 담고 있는 태그입니다.

## meta data?
meta data는 흔히 말해 데이터의 정보를 담은 데이터입니다. 간단히 책을 생각해 보면 글쓴이, 책 제목은 문서의 내용과 관련은 있지만 있어도 그만 없어도 그만인 정보입니다. 하지만 이러한 것들을 알고 있다면 친구들한테 말해 줄때 더욱 좋겠죠? 이렇게 전달하고자 하는 데이터에는 영향을 미치진 않지만, 데이터를 해석하는데 참고가 될 수 있는 사항들을 meta data라고 부릅니다.

## HTML의 `<head>`태그 안에 존재하는 태그
정보의 종류에 따라 여러 태그가 존재합니다.
```HTML
<title>, <meta>, <link>, <script>
```

별게 없죠? 하지만 하나하나 뜯어보면 굉장히 다양한 역할을 할 수 있다는 것을 알 수 있습니다.

### `<title>`
크롬 브라우저를 예로 들겠습니다. 크롬 브라우저에서 흔히 '탭'을 이용하여 웹페이지를 보여줍니다. 이 '탭'에 쓰이는 문구가 `title`태그 내에 적히는 문구가 됩니다. (`<title>여기</title>`)

### `<meta>`
`meta` 태그는 다음과 같이 사용하며 문서의 문자 해석 방식, 내용 등을 서술할때 사용합니다. 다음은 메타 태그에 담길 수 있는 요소들의 예시입니다.
```HTML
<meta charset='utf-8'>
<meta name="author" content="Heozeop">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="예시에요 호호호">
```
이 `meta` 태그를 이용해 외부에서 이 문서에 대한 정보를 간략하게 얻을 수 있습니다. 검색엔진이나 SNS들은 이러한 `meta` 태그를 공유하기 기능에 사용하여 사용자로 하여금 웹페이지 상에 접근하기 전에 더 많은 정보들을 미리 받아 볼 수 있도록 합니다. (facebook의 [open graph](https://ogp.me/), twitter의 [twitter card](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)를 살펴보세요!)

### `<link>`
`link`태그는 외부 정보들을 가져오는 요소입니다. 브라우저의 '탭'에 들어가는 이미지인 favicon과 같은 이미지, 문서의 폰트, style sheet 등을 가져오는 역할을 합니다. `link` 태그는 아래와 같이 쓰고, 다양한 속성을 가집니다. 굉장히 많은 특성들을 가지고 있기 때문에([whatwg의 link element](https://html.spec.whatwg.org/multipage/semantics.html#the-link-element)참조) 우리는 자주 볼 수 있는 속성들만 살펴보겠습니다.
```HTML
<link href="주소" rel="관계" type="MIME type">
```
1. `href`속성은 데이터를 받을 수 있는 link 주소를 가집니다. 이것은 때로 문서 내의 요소를 가리킬 수 있습니다.
1. `rel`속성은 'relation'의 약자로 현재의 문서와 link로 가져온 데이터와 관계를 나타냅니다.
1. `type`속성은 [MIME type](https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types)을 나타냅니다.

### `<script>`
이 태그는 `head`태그 안에만 존재하는 태그는 아닙니다. `script`태그는 Javascript를 호출하고 실행하는 역할을 하는 태그입니다. `script`태그는 아래와 같이 서술 합니다. 브라우저가 HTML을 파싱하는데 영향을 준다는 사실을 항상 유념하며 사용해야합니다. 이와 관련해서는 [다음 글](https://velog.io/@takeknowledge/script-%ED%83%9C%EA%B7%B8%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%9C%84%EC%B9%98%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C%EC%9A%94)이 제겐 설득력이 있더라구요.

```HTML
<script>javascript 코드가 들어가요</script>
<script src="외부 리소스 주소"></script>
```

# 정리
지금까지 HTML 문서의 `html` 태그와 `head` 태그를 알아봤습니다. 문서를 읽으면서 목적을 달성했는지 확인해 봅시다.

1. HTML의 html태그에 들어가는 내용을 설명할 수 있다.

    HTML의 html 태그는 문서에 단한번 등장하는 태그로 HTML의 문서의 시작과 끝을 나타낸다. `DOCTYPE`이 해석하는 방법을 알려줬다면, `<html>` 태그는 HTML 문서의 내용을 담고 있습니다.
1. HTML의 head 태그에 들어가는 내용을 설명할 수 있다.

    `head`태그의 내용은 현재 문서의 meta data입니다. 이 태그 안에는 title, favicon, link, script, meta 태그가 활용되며, 소셜 네트워크 서비스나 검색엔진이 페이지 검색을 할때 활용되는 데이터들이 담깁니다. 

# 다음은?
1. html body 안에 들어가는 태그 들을 하나씩 살펴볼 것입니다.
1. 요새 가장 많은 관심을 가진다는 card형태를 이리 저리 굴려 볼 것입니다.
1. css가 무엇인지 찾아 볼 예정입니다.