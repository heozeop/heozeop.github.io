---
title: 사이트 로딩속도가 이 번들때문에 느려요.
date: '2021-01-02T15:01:03.284Z'
description: '초보 개발자의 살떨렸던, 3시간의 기록'
---

# 발단
바야흐로 때는 얼마전입니다. 제가 속한 회사의 내부서비스 조직의 JS번들(간단한 JS 파일)로 인해 저희 플랫폼의 초기 로딩속도가 매우 느리다는 소식을 접했습니다. 분명 거의 6개월 동안 정상적으로 서빙되던 사이트가 왜 갑자기 느려진 것일까. 두려웠습니다.

문제의 확이은 Google Analytics(이하 GA)의 사이트 분석에서 부터 시작되었습니다. 네, 마케팅 팀에서 사이트 로딩 속도가 느려 유저 이탈률이 높다라는 피드백을 주신 거였죠.

PO님께서는 해당 피드백을 들으신 후에 바로 현황을 분석해 주셨습니다. 비정상적으로 큰 사이즈의 Javascript Bundle이 Fast 3G라는 특수한 환경과 만나 데스크탑 기준 환상의 8초, mobile 기준 환상의 20초가 로딩 및 실행에 소요되는 것임을 밝혀 주셨습니다.

 당시 퇴근 시간 이후(8시 45분쯤)에 공유된 사실이라 PO님께서는 다음날 아침 문제 해결을 위해 논의하자고 말씀하셨습니다. 하지만 이미 제 눈은 헷가닥 뒤집힌 이후였습니다.

# 문제가 무엇이오.
저는 다급한 마음에 코드를 한 30분간 헤메다가 웹펙 공식문서 부터 보았습니다. 한 20분쯤, 저희가 사용하는 bundler인 Webpack 공식문서의 optimization 부근을 읽다가 [Webpack-bundle-analyzer][WEBPACK_BUNDLE_ANALYZER]라는 npm 패키지를 발견했습니다. 저는 바로 임시 브랜치를 파고, 해당 패키지를 설치했습니다. 그리고 바로 build해 분석했습니다. 문제는 AWS SDK였습니다.

# AWS... 내가 미안해...
바야흐로 제가 입사하기전, 위에서 언급한 번들은 json 데이터의 참조를 위해 window객체를 이용했습니다. script를 통해 window 객체에 직접 데이터를 주입하고, 해당 데이터를 바탕으로 당면한 문제를 해결했었습니다. 해당 결정은 당시 상황에서 최선의 선택이었고, 최선의 결과였습니다.

하지만 시간이 지나며, 변경 사항이 생기면 항상 개발팀에서 유지보수를 해줘야 하는 문제가 생겼습니다. 이 문제는 제가 속한 개발 조직으로 하여금 최우선의 해결과제였고, 저희는 AWS의 S3와 LowDB를 이용해 해결하자고 결론을 내렸습니다. 당시 AWS Credit을 받아 AWS에 대한 사내 관심도가 매우 높아졌으며, 단순 JSON만 필요하기에 LowDB로도 충분했기 때문입니다.

저는 투입 시기에 이미 문제를 해결하며 코드에 대한 이해가 있던 상황이었습니다. 그에 따라 바로 해결책을 가지고 문제를 해결 할 수 있었습니다. 저희는 [low db s3 adapter](https://github.com/sadorlovsky/lowdb-s3)를 이용하여 AWS S3에 있는 데이터를 참조했습니다. 여기에 react admin으로 빠르게 관리자용 사이트를 개발해서 더 이상 데이터 변화에 따른 개발 대응을 하지 않아도 되었습니다.

 하지만 이 결정으로 인해 bundle의 크기는 약 3MB가 되었고, 그것을 인지했음에도 개발 당시 한국 기준 1s가 안되는 시간에 해당 bundle이 로딩된다는 이유로, 다른 일도 많다는 이유로 '괜찮을 거야'라고 판단했었습니다. 이 판단이 현재의 문제를 야기한 제일 부족한 판단이었음을 이제야 깨달았습니다.

# 급한 불일단 끄자
저는 일단 가장 익숙한 방법대로 S3로 부터 데이터를 받아와 로컬에서 저장하는 방식으로 aws-sdk를 bundle에서 제외 시켰습니다. 그 과정에서 로직의 수정이 잇달아 발생하여 약 1시간 동안 허우적 거렸습니다. 그렇게 전체 번들의 사이즈가 300KB 정도가 되었고, 8초는 0.6초로, 20초는 1초로 속도 개선을 이루어 냈습니다.

# 좀 더! 좀 더!
문제 분석 및 작업 결과를 정리해 공유하고 나니 거의 밤 12시였습니다. 일단 늦잠 때리고 다음날 회사에서 바로 웹펙 설정을 까뒤집기 시작했습니다.

남은 문제는 babel polyfill이었습니다. 아마 과거 Webpack 7.4버전 이전에 es2015 문법을 사용하기 위해 babel polyfill이 내용에 포함 된 것 같았습니다. 하지만 이미 우리의 Webpack은 7.8버전, 저는 과감하게 해당 부분을 지우고 웹펙 설정을 다시 했습니다. 그 결과 총 번들 사이즈는 100KB로 줄었습니다. 하지만 속도의 개선은 특별히 없었기에 일단 거기서 마무리하고, 추후 대책을 논의하는 것으로 결론을 지었습니다.

# 잘한점
## 1. 비교적 빠른 시간내에 문제 상황을 해결했다.
최초 번들 사이즈를 줄이고, 공유를 하는데까지 걸리는 시간은 3시간이었습니다. 당시 제 상황을 고려했을 때, 이는 충분히 합리적인 시간이었다고 생각합니다.

## 2. 적절한 분석도구의 활용
PO님이 공유해 준 자료 중 [lighthouse](https://developers.google.com/web/tools/lighthouse?hl=ko)를 이용한 페이지 분석 및 [Webpack Bundle Analyzer][WEBPACK_BUNDLE_ANALYZER]의 적절한 사용을 통해 문제 상황을 보다 빠르게 해결 할 수 있었습니다.

 또한 위 도구를 활용해 문제 상황에 대한 평가를 좀 더 객관적으로 진행할 수 있었습니다. 앞으로 이러한 분석 도구도 정리하여 현재 우리 사이트에 필요한 것이 무엇이고, 어떻게 해결 할 수 있는지 분석할 수 있을 것 같습니다.

# 배운점
## 1. 고려되는 사항은 정리해 두어야 한다.
최초 AWS SDK를 사용하는 adapter를 사용하여 번들 크기가 3MB에 육박한다는 것을 이미 알고 있었습니다. 즉, 이미 속도에 대한 문제가 생길 수 있음을 이미 알고 있었습니다. 하지만 그러한 사항들은 제대로 정리되어 있지 않았습니다.

추후 소프트웨어 개발에 영향을 미칠 수 있는 사항들을 잘 선정해서 기록으로 남기는 것이 매우 중요한 일임을 몸으로 느끼면서 배웠습니다.

## 2. 문제는 정확하게 정의하고 시작해야 한다.
바야흐로 당일, 제가 받았던 문제상황에 대한 분석은 위에 적힌 것보다 세세했습니다. 하지만 저는 일단 번들 사이즈를 줄인다는 일념하에 거의 한 시간을 불필요하게 보냈습니다.

제가 취했으면 좋았을 사고과정을 2가지 정도 생각해볼 수 있을 것 같습니다.

1. 번들 사이즈가 커서 로딩이 오래 걸린다.
  
    번들을 분석한다. => 번들 분석을 위한 도구를 찾는다.

2. 로딩 속도가 늘어난 시점이 약 6개월 전이다.

    6개월 전 커밋을 확인한다. => 문제 상황을 예측한다.

위 두 과정은 결과적으로 모두 했던 것이지만 최초에 주어진 상황에서도 할 수 있는 사고였습니다. 제가 현재 생각하는 제대로 대처하지 못한 이유는 아래와 같습니다.

1. 몸 상태가 좋지 않았다.

    전날 제대로 잠을 자지 못했습니다. 베게가 불편했던 것 같습니다. 베게는 비싼 관계로 유튜브로 나에게 좋은 배게 찾는 법을 검색하여 맞는 베게를 사야겠습니다.

1. 저녁을 먹은 직후였다.

    집에서 저녁을 먹을때마다 유튜브를 보곤 합니다. 따라서 활발한 사고가 일어나지 않습니다. 지금 처럼 저녁시간 이후에 유튜브를 제외한 취미 생활을 하는 시간을 배치하여 집중할 수 있는 대비를 할 수 있도록 해야겠습니다. 이는 점심, 아침도 마찬 가지의 역할로 대비를 해야 할 것 같습니다.

1. 집에서는 쉬는 환경을 만들어 놓아 제대로 집중할 수 없었다.

    제가 집에 책상이 온전하지 않습니다. 그래서 침대 위에서 작업을 진행했습니다. 이 때문에 피곤함과 다급함이 배가 된 것 같습니다. 앞으로는 책상을 새로 하나 둬야겠습니다. 

1. 굉장히 긴장했다.

    분명 문제 상황었으나 위에 언급했듯 당장 해결해야하는 엄청 급박한 일은 아니었습니다. 하지만 당시 문제 상황을 객관적으로 보지 못했기 때문에 저는 제가 평균적으로 작업에 할애하는 시간보다 많은 시간을 소비하여 문제를 해결했습니다.

    문제 상황을 만났을때 일단 진정하는 연습을 해야겠습니다. 뜨거운 물, 차, 꿀물 등 빠른 시간 내에 진정을 찾을 수 있는 매게를 만들어, 문제 상황을 좀 더 객관적인 시선에서 분석할 수 있도록 해야겠습니다.

## 3. 분석 도구와 기준, 시간을 관리해야 한다.
버그 수정같은 경우 해당 문제 상황의 정확한 정의와 더불어 작업 평가 요소가 명확히 작업 시작 전에 정의 되어야 함을 배웠습니다. 기존엔 '이게 문제야'라고 하면 '오케이' 하고 작업을 시작했다면 이제는 '왜 그게 문제인지', '어떤 방식이 옳은 방식인지', '어떻게 좋아졌다고 평가하는지'를 논의 하고 작업을 진행할 수 있었습니다.

물론 이 과정에 과도한 시간이 걸릴 우려에 대해 많은 피드백을 받았습니다. 따라서 이러한 논의에 대해 빠른 시간 내에 최선의 해결책을 찾을 수 있도록 시간과 관련된 장치를 하나 만들어 두려고 합니다. 구글에서 쓰는 원형 시계인데요, 저는 돈이 없는 관계로 타이머를 이용하려고 합니다.

 위 3 질문에 대해 물어보고, 정리하고, 해결책을 찾고, 평가하는 과정을 긴급한 정도에 따라 최소 5분에서 최대 30분을 투자 할 것입니다. 그러고서 좋은 방안이 안나오면 도움을 청하는 방식으로 문제를 분석해 나갈 것입니다. 이를 통해 빠르고 올바른 문제해결 능력을 기르는데 다른 사람의 시간을 오래 빼았지 않으면서 작업을 수행 할 수 있을 것 같습니다.

## 4. 조직내 지식 공유는 일반 작업에 우선 되어야 한다.
현재의 코드 베이스에 대해 잘 알고 있는 사람은 저 혼자입니다. 이를 따로 정리하지도, 공유하지도 못했기 때문에 문제 상황에 대해서 분석할 수 있는 인력은 저 혼자입니다.

이러한 상황은 조직적으로도 매우 좋지 못한 상황입니다. 마케팅팀 대상 프로젝트 공유용 문서화보다 빠르게 개발팀 대상 프로젝트 공유용 문서를 작성해야 겠습니다.

# 남은 해결 과제
1. 과거로 돌아갔으니, 다른 해결책을 물색해야 한다.

    이미 프로덕션의 테스트는 모조리 깨지고, 데이터 업데이트 요청에 대한 대응은 제가 해야합니다. 다시 이전 기억의 반복으로 다른 해결책을 모색해야 합니다.
1. 공유 문서를 작성한다.

    저만 문제를 해결할 수 있는 상황은 너무 위험합니다. 빠르게 공유하는 문서를 작성해야 합니다.
1. 패턴을 만든다.

    위에서 말한 것 처럼 문제 상황에 대한 공유를 들을때 다음 2가지 패턴을 만드려고 합니다.
    
    1. 따뜻한 차를 하나 탄다.
    
       이 동안엔 공유받은 문제가 아닌 내가 흥분했는지 생각한다.
    1. 문제를 분석한다.

       문제의 긴급함에 따라 5~30분간의 타이머를 걸고 다음 3가지 항목에 대해 정리한다.

       - 어떤 상황인가
       - 왜 문제인가
       - 어떤게 좋다고 평가할 수 있는 결과인가
       - 어떻게 좋다고 측정할 수 있는가

[WEBPACK_BUNDLE_ANALYZER]: https://www.npmjs.com/package/webpack-bundle-analyzer