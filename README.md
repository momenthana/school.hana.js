# school.hana.js

[![npm](https://img.shields.io/npm/v/school.hana.js?style=flat-square)](https://www.npmjs.com/package/school.hana.js)
[![downloads](https://img.shields.io/npm/dm/school.hana.js?style=flat-square)](https://www.npmjs.com/package/school.hana.js)
[![license](https://img.shields.io/github/license/momenthana/school.hana.js?style=flat-square)](https://github.com/momenthana/school.hana.js/blob/develop/LICENSE)

나이스 API 기반 학교정보, 급식식단, 학사일정, 학과정보, 반정보, 시간표, 강의실 정보 제공 라이브러리

## 설치하기

Using NPM

```
npm install school.hana.js
```

Using Yarn

```
yarn add school.hana.js
```

## 시작하기

학교기본정보를 이용해 급식식단정보를 출력해주는 구문입니다.

```js
const school = require("school.hana.js")

school
  .search({
    SCHUL_NM: "하나고등학교",
  })
  .then((res) => {
    console.log("SEARCH:", res[0])

    school.meal(res[0]).then((res) => {
      console.log("MEAL:", res[0])
    })
  })
```

## 인증키 신청

[교육정보 개방 포털](https://open.neis.go.kr/)에서 제공하는 인증키가 필요합니다. 활용가이드 > 인증키 신청 메뉴에서 인증키를 신청하세요.

인증키 없이 조회 시 pIndex는 1, pSize는 5로 고정됩니다. 더 많은 데이터를 불러오기 위해 인증키 신청이 필요합니다.

### 기본인자를 포함한 학교기본정보

```js
const school = require("school.hana.js")

school
  .search({
    SCHUL_NM: "하나고등학교",
    KEY: "sample key",
    pIndex: 1,
    pSize: 100,
  })
  .then((res) => {
    console.log("SEARCH:", res)
  })
```

#### 기본인자

| Name     |  Type  | Required | Description         |
| -------- | :----: | :------: | ------------------- |
| `KEY`    | string |    N     | 인증키              |
| `pIndex` |  int   |    N     | 페이지 위치         |
| `pSize`  |  int   |    N     | 페이지 당 신청 숫자 |

## 기능 명세

### 학교기본정보

```js
school
  .search({
    SCHUL_NM: "하나고등학교",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    N     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    N     | 표준학교코드   |
| `SCHUL_NM`           | string |    N     | 학교명         |
| `SCHUL_KND_SC_NM`    | string |    N     | 학교종류명     |
| `LCTN_SC_NM`         | string |    N     | 소재지명       |
| `FOND_SC_NM`         | string |    N     | 설립명         |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  ENG_SCHUL_NM: 'Hana Academy Seoul', // 영문학교명
  SCHUL_KND_SC_NM: '고등학교', // 학교종류명
  LCTN_SC_NM: '서울특별시', // 소재지명
  JU_ORG_NM: '서울특별시교육청', // 관할조직명
  FOND_SC_NM: '사립', // 설립명
  ORG_RDNZC: '03305 ', // 도로명우편번호
  ORG_RDNMA: '서울특별시 은평구 연서로 535', // 도로명주소
  ORG_RDNDA: '/ 하나고등학교 (진관동)', // 도로명상세주소
  ORG_TELNO: '02-6913-1111', // 전화번호
  HMPG_ADRES: 'http://www.hana.hs.kr', // 홈페이지주소
  COEDU_SC_NM: '남여공학', // 남녀공학구분명
  ORG_FAXNO: '02-6913-1785', // 팩스번호
  HS_SC_NM: '자율고', // 고등학교구분명
  INDST_SPECL_CCCCL_EXST_YN: 'N', // 산업체특별학급존재여부
  HS_GNRL_BUSNS_SC_NM: '일반계', // 고등학교일반실업구분명
  SPCLY_PURPS_HS_ORD_NM: null, // 특수목적고등학교계열명
  ENE_BFE_SEHF_SC_NM: '전기', // 입시전후기구분명
  DGHT_SC_NM: '주간', // 주야구분명
  FOND_YMD: '20090821', // 설립일자
  FOAS_MEMRD: '20091031', // 개교기념일
  LOAD_DTM: '20200615102244' // 적재일시
}
```

### 급식식단정보

```js
school
  .meal({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `MMEAL_SC_CODE`      | string |    N     | 식사코드       |
| `MLSV_YMD`           | string |    N     | 급식일자       |
| `MLSV_FROM_YMD`      | string |    N     | 급식시작일자   |
| `MLSV_TO_YMD`        | string |    N     | 급식종료일자   |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  MMEAL_SC_CODE: '1', // 식사코드
  MMEAL_SC_NM: '조식', // 식사명
  MLSV_YMD: '20200926', // 급식일자
  MLSV_FGR: '425', // 급식인원수
  DDISH_NM: '기장밥*<br/>김치국*9.13.<br/>닭살카레볶음*2.5.6.13.15.<br/>김자반5.13.<br/>계란후라이1.<br/>총각김치*9.13.<br/>시리얼/빵/우유/쥬스/견과류/누룽1.2.5.6.13.', // 요리명
  ORPLC_INFO: '쌀 : 국내산<br/>김치류 : 국내산<br/>고춧가루(김치류) : 국내산<br/>쇠고기(종류) : 국내산(한우)<br/>돼지고기 : 국내산<br/>닭고기 : 국내산<br/>오리고기 : 국내산<br/>쇠고기 식육가공품 : 국내산<br/>돼지고기 식육가공품 : 국내산<br/>닭고기 식육가공품 : 국내산<br/>오리고기 가공품 : 국내산<br/>낙지 : 국내산<br/>고등어 : 국내산<br/>갈치 : 국내산<br/>오징어 : 국내산<br/>꽃게 : 국내산<br/>참조기 : 국내산<br/>콩 : 국내산', // 원산지정보
  CAL_INFO: '854.5 Kcal', // 칼로리정보
  NTR_INFO: '탄수화물(g) : 128.0<br/>단백질(g) : 45.1<br/>지방(g) : 24.0<br/>비타민A(R.E) : 416.2<br/>티아민(mg) : 0.5<br/>리보플라빈(mg) : 0.9<br/>비타민C(mg) : 45.3<br/>칼슘(mg) : 318.7<br/>철분(mg) : 5.4', // 영양정보
  MLSV_FROM_YMD: '20200926', // 급식시작일자
  MLSV_TO_YMD: '20200926' // 급식종료일자
}
```

### 학사일정

```js
school
  .schedule({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `DGHT_CRSE_SC_NM`    | string |    N     | 주야과정명     |
| `SCHUL_CRSE_SC_NM`   | string |    N     | 학교과정명     |
| `AA_YMD`             | string |    N     | 학사일자       |
| `AA_FROM_YMD`        | string |    N     | 학사시작일자   |
| `AA_TO_YMD`          | string |    N     | 학사종료일자   |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  AY: '2020', // 학년도
  DGHT_CRSE_SC_NM: '주간', // 주야과정명
  SCHUL_CRSE_SC_NM: '고등학교', // 학교과정명
  SBTR_DD_SC_NM: '휴업일', // 수업공제일명
  AA_YMD: '20200912', // 학사일자
  EVENT_NM: '토요휴업일', // 행사명
  EVENT_CNTNT: null, // 행사내용
  ONE_GRADE_EVENT_YN: 'Y', // 1학년행사여부
  TW_GRADE_EVENT_YN: 'Y', // 2학년행사여부
  THREE_GRADE_EVENT_YN: 'Y', // 3학년행사여부
  FR_GRADE_EVENT_YN: '*', // 4학년행사여부
  FIV_GRADE_EVENT_YN: '*', // 5학년행사여부
  SIX_GRADE_EVENT_YN: '*', // 6학년행사여부
  LOAD_DTM: '20200926004611' // 적재일시
}
```

### 학교학과정보

```js
school
  .major({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `DGHT_CRSE_SC_NM`    | string |    N     | 주야과정명     |
| `ORD_SC_NM`          | string |    N     | 계열명         |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  DGHT_CRSE_SC_NM: '주간', // 주야과정명
  ORD_SC_NM: '일반계', // 계열명
  DDDEP_NM: '7차일반', // 학과명
  LOAD_DTM: '20200901005009' // 적재일시
}
```

### 반정보

```js
school
  .classes({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `AY`                 | string |    N     | 학년도         |
| `GRADE`              | string |    N     | 학년           |
| `DGHT_CRSE_SC_NM`    | string |    N     | 주야과정명     |
| `SCHUL_CRSE_SC_NM`   | string |    N     | 학교과정명     |
| `ORD_SC_NM`          | string |    N     | 계열명         |
| `DDDEP_NM`           | string |    N     | 학과명         |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  AY: '2019', // 학년도
  GRADE: '1', // 학년
  DGHT_CRSE_SC_NM: '주간', // 주야과정명
  SCHUL_CRSE_SC_NM: '고등학교', // 학교과정명
  ORD_SC_NM: '일반계', // 계열명
  DDDEP_NM: '7차일반', // 학과명
  CLASS_NM: '1', // 반명
  LOAD_DTM: '20200901003106' // 적재일시
}
```

### 시간표

```js
school
  .timetable({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
    SCHUL_KND_SC_NM: "고등학교",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `SCHUL_KND_SC_NM`    | string |    Y     | 학교종류명     |
| `AY`                 | string |    N     | 학년도         |
| `SEM`                | string |    N     | 학기           |
| `ALL_TI_YMD`         | string |    N     | 시간표일자     |
| `DGHT_CRSE_SC_NM`    | string |    N     | 주야과정명     |
| `ORD_SC_NM`          | string |    N     | 계열명         |
| `DDDEP_NM`           | string |    N     | 학과명         |
| `GRADE`              | string |    N     | 학년           |
| `CLRM_NM`            | string |    N     | 강의실명       |
| `CLASS_NM`           | string |    N     | 반명           |
| `TI_FROM_YMD`        | string |    N     | 시간표시작일자 |
| `TI_TO_YMD`          | string |    N     | 시간표종료일자 |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  AY: '2020', // 학년도
  SEM: '1', // 학기
  ALL_TI_YMD: '20200302', // 시간표일자
  DGHT_CRSE_SC_NM: '주간', // 주야과정명
  ORD_SC_NM: '일반계', // 계열명
  DDDEP_NM: '7차일반', // 학과명
  GRADE: '1', // 학년
  CLRM_NM: '1국어1반(월34목7)장희민박미선', // 강의실명
  CLASS_NM: null, // 반명
  PERIO: '3', // 교시
  ITRT_CNTNT: '휴업일', // 수업내용
  LOAD_DTM: '20200827171228' // 적재일시
}
```

### 시간표강의실정보

```js
school
  .classroom({
    ATPT_OFCDC_SC_CODE: "B10",
    SD_SCHUL_CODE: "7010918",
  })
  .then((res) => {
    console.log(res[0])
  })
```

#### 신청인자

| Name                 |  Type  | Required | Description    |
| -------------------- | :----: | :------: | -------------- |
| `ATPT_OFCDC_SC_CODE` | string |    Y     | 시도교육청코드 |
| `SD_SCHUL_CODE`      | string |    Y     | 표준학교코드   |
| `AY`                 | string |    N     | 학년도         |
| `GRADE`              | string |    N     | 학년           |
| `SEM`                | string |    N     | 학기           |
| `SCHUL_CRSE_SC_NM`   | string |    N     | 학교과정명     |
| `DGHT_CRSE_SC_NM`    | string |    N     | 주야과정명     |
| `ORD_SC_NM`          | string |    N     | 계열명         |
| `DDDEP_NM`           | string |    N     | 학과명         |

#### 출력결과

```js
{
  ATPT_OFCDC_SC_CODE: 'B10', // 시도교육청코드
  ATPT_OFCDC_SC_NM: '서울특별시교육청', // 시도교육청명
  SD_SCHUL_CODE: '7010918', // 표준학교코드
  SCHUL_NM: '하나고등학교', // 학교명
  AY: '2019', // 학년도
  GRADE: '1', // 학년
  SEM: '1', // 학기
  SCHUL_CRSE_SC_NM: '고등학교', // 학교과정명
  DGHT_CRSE_SC_NM: '주간', // 주야과정명
  ORD_SC_NM: '일반계', // 계열명
  DDDEP_NM: '7차일반', // 학과명
  CLRM_NM: '1', // 강의실명
  LOAD_DTM: '20200926054520' // 적재일시
}
```
