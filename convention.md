## Commit Message Convention

[commit message convention](https://doublesprogramming.tistory.com/256)
& [gitmoji](https://gitmoji.carloscuesta.me/) 참고

```
npm i -g gitmoji-cli
```

<br>

- commit message는 과거형이 아닌 명령형으로 작성한다.

- commit message는 영어로 작성한다.

- commit은 기능 추가를 기준으로 한다.
  <br> ex. 닫기 button 추가 / 시계 기능 추가

- commit message examples

  - 🐛 Fix for #4183
    <br> // #4183 issue(이슈 혹은 버그)에 대한 수정
  - ✏️ Fix typo in docs
    <br> // docs에서 typo 수정(오타 수정)
  - 🚩Add A for index.js
    <br> // index.js 에 A기능(버튼기능, 닫기기능) 추가
  - 📝 Add README.md
    <br> // 문서 작성
  - ✨ Add new blabla feature
    <br> // 새로운 기능 추가
  - ♻️ Refactor
    <br> // code refactoring
  - 💄Update main.css
    <br> // UI 및 스타일에 대한 업데이트
  - 🔀 Merge
    <br> // merge
  - ETC...

<br>
<br>

## Coding Convention

[airbnb convention](https://moonspam.github.io/ES5-Airbnb-JavaScript-Style-Guide-Korean/) 참고 및 **prettier & eslint** 사용
<br>

### Naming Convention

- 한문자 이름은 피하며, 이름에서 의도를 읽을 수 있도록 한다.
- 변수, 클래스, 아이디, Object, 함수, 인스턴스는 camelCase를 사용한다.
- Class와 생성자에는 PascalCase를 사용한다.
- this의 참조를 저장할 때 \_this 를 사용한다.
- stack traces를 추적하기 쉽게하기 위해 함수 이름을 붙여준다.
  <br>

### Semicolons

- Yes!
  <br>

### Whitespace

- 탭에는 공백 2개를 설정한다.
- 중괄호({})의 앞에 공백을 하나 넣는다.
  <br>

### Comments

- 주석은 기능에 대해서만 간단히 작성한다.

  - html: \<!-- 영문 -->
  - css: /_ 영문 _/
  - js: // 영문
  - jsx: {/_ 영문 _/}

<br>
<br>

## How to use Git

[git flow cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

### git 순서

1. git flow init -d
2. git flow feature start [feature_name]
3. git add [file_name]
4. gitmoji -c
5. git push origin feature/[feature_name]
6. git pull pmorigin develop
7. git flow feature finish [feature_name]
8. git merge develop
