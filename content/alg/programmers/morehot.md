---
title: 더 맵게
date: '2021-04-04'
description: ''
type: 'heap'
---

[문제 주소](https://programmers.co.kr/learn/courses/30/lessons/42626)

# 사고 과정

1. 섞는 공식을 만들었다. 앞에 2개로 만드는 공식인데, 앞하나 뒤하나로 공식을 짜버렸다.
1. 처음에는 정렬해서 데이터를 만드려고 했다. n^2의 시간복잡도를 가졌다.
1. 그래서 priority queue 2개 두고 앞 뒤에서 빼가면서 n-1번 트라이할때 까지 연산하게 했다.
1. 틀려서 보니 공식이 틀렸다.
1. 앞에 2개 가지고 연산하면 되었다.

# 풀이

<script src="https://gist.github.com/heozeop/43e79d711addba86294bb42bc755b5c3.js"></script>

# 회고

### 문제점

- 처음에 문제를 잘못 적었다.

결과적으로 시간이 오래 걸렸다.

### 얻은 것

- priority queue의 pop리턴이 void라는 걸 알았다.

이건 좋네.

### 할 것

- 처음에 문제 정리를 잘하자.
- 단계별로 생각을 정리하고 만들자.
