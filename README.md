# school-info

### 학교기본정보
```js
school.search({
  SCHUL_NM: '하나고등학교'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  ENG_SCHUL_NM: 'Hana Academy Seoul',
  SCHUL_KND_SC_NM: '고등학교',
  LCTN_SC_NM: '서울특별시',
  JU_ORG_NM: '서울특별시교육청',
  FOND_SC_NM: '사립',
  ORG_RDNZC: '03305 ',
  ORG_RDNMA: '서울특별시 은평구 연서로 535',
  ORG_RDNDA: '/ 하나고등학교 (진관동)',
  ORG_TELNO: '02-6913-1111',
  HMPG_ADRES: 'http://www.hana.hs.kr',
  COEDU_SC_NM: '남여공학',
  ORG_FAXNO: '02-6913-1785',
  HS_SC_NM: '자율고',
  INDST_SPECL_CCCCL_EXST_YN: 'N',
  HS_GNRL_BUSNS_SC_NM: '일반계',
  SPCLY_PURPS_HS_ORD_NM: null,
  ENE_BFE_SEHF_SC_NM: '전기',
  DGHT_SC_NM: '주간',
  FOND_YMD: '20090821',
  FOAS_MEMRD: '20091031',
  LOAD_DTM: '20200615102244'
}
```

### 급식식단정보
```js
school.meal({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  MMEAL_SC_CODE: '1',
  MMEAL_SC_NM: '조식',
  MLSV_YMD: '20200926',
  MLSV_FGR: '425',
  DDISH_NM: '기장밥*<br/>김치국*9.13.<br/>닭살카레볶음*2.5.6.13.15.<br/>김자반5.13.<br/>계란후라이1.<br/>총각김치*9.13.<br/>시리얼/빵/우유/쥬스/견과류/누룽1.2.5.6.13.',
  ORPLC_INFO: '쌀 : 국내산<br/>김치류 : 국내산<br/>고춧가루(김치류) : 국내산<br/>쇠고기(종류) : 국내산(한우)<br/>돼지고기 : 국내산<br/>닭고기 : 국내산<br/>오리고기 : 국내산<br/>쇠고기 식육가공품 : 국내산<br/>돼지고기 식육가공품 : 국내산<br/>닭고기 식육가공품 : 국내산<br/>오리고기 가공품 : 국내산<br/>낙지 : 국내산<br/>고등어 : 국내산<br/>갈치 : 국내산<br/>오징어 : 국내산<br/>꽃게 : 국내산<br/>참조기 : 국내산<br/>콩 : 국내산',
  CAL_INFO: '854.5 Kcal',
  NTR_INFO: '탄수화물(g) : 128.0<br/>단백질(g) : 45.1<br/>지방(g) : 24.0<br/>비타민A(R.E) : 416.2<br/>티아민(mg) : 0.5<br/>리보플라빈(mg) : 0.9<br/>비타민C(mg) : 45.3<br/>칼슘(mg) : 318.7<br/>철분(mg) : 5.4',
  MLSV_FROM_YMD: '20200926',
  MLSV_TO_YMD: '20200926'
}
```

### 학사일정
```js
school.schedule({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  AY: '2020',
  DGHT_CRSE_SC_NM: '주간',
  SCHUL_CRSE_SC_NM: '고등학교',
  SBTR_DD_SC_NM: '휴업일',
  AA_YMD: '20200912',
  EVENT_NM: '토요휴업일',
  EVENT_CNTNT: null,
  ONE_GRADE_EVENT_YN: 'Y',
  TW_GRADE_EVENT_YN: 'Y',
  THREE_GRADE_EVENT_YN: 'Y',
  FR_GRADE_EVENT_YN: '*',
  FIV_GRADE_EVENT_YN: '*',
  SIX_GRADE_EVENT_YN: '*',
  LOAD_DTM: '20200926004611'
}
```

### 학교학과정보
```js
school.major({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  DGHT_CRSE_SC_NM: '주간',
  ORD_SC_NM: '일반계',
  DDDEP_NM: '7차일반',
  LOAD_DTM: '20200901005009'
}
```

### 반정보
```js
school.classes({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  AY: '2019',
  GRADE: '1',
  DGHT_CRSE_SC_NM: '주간',
  SCHUL_CRSE_SC_NM: '고등학교',
  ORD_SC_NM: '일반계',
  DDDEP_NM: '7차일반',
  CLASS_NM: '1',
  LOAD_DTM: '20200901003106'
}
```

### 시간표
```js
school.timetable({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  AY: '2020',
  SEM: '1',
  ALL_TI_YMD: '20200302',
  DGHT_CRSE_SC_NM: '주간',
  ORD_SC_NM: '일반계',
  DDDEP_NM: '7차일반',
  GRADE: '1',
  CLRM_NM: '1국어1반(월34목7)장희민박미선',
  CLASS_NM: null,
  PERIO: '3',
  ITRT_CNTNT: '휴업일',
  LOAD_DTM: '20200827171228'
}
```

### 시간표강의실정보
```js
school.classroom({
  ATPT_OFCDC_SC_CODE: 'B10',
  SD_SCHUL_CODE: '7010918'
}).then(res => {
  console.log(res[0])
})
```
#### 출력결과
```js
{
  ATPT_OFCDC_SC_CODE: 'B10',
  ATPT_OFCDC_SC_NM: '서울특별시교육청',
  SD_SCHUL_CODE: '7010918',
  SCHUL_NM: '하나고등학교',
  AY: '2019',
  GRADE: '1',
  SEM: '1',
  SCHUL_CRSE_SC_NM: '고등학교',
  DGHT_CRSE_SC_NM: '주간',
  ORD_SC_NM: '일반계',
  DDDEP_NM: '7차일반',
  CLRM_NM: '1',
  LOAD_DTM: '20200926054520'
}
```
