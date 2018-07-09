### Introduction
"kopol"은 대한민국의 정치와 관련한 정보를 API로 제공합니다. 
해당 레포지토리는 API 서버의 구현과정을  공유합니다.

### API Detail 
API 주소: https://api.2jung.com

20대 국회 법안 API

1. 법안 목록/법안 검색 Endpoint 
```
GET /bills           : 20대 국회의 법안의 모든 목록을 보냄.
GET /bills?###

Query Parameters
 | name        | Description
 | ---------------------------------
 | query       | 질의할 검색어
 |             |
 | ---------------------------------
 | res_type    | "all" => 모든 칼럼을 포함하여 응답으로 보내줌
 |             | default: id 칼럼만 보내줌
 | ---------------------------------
 | search_type | "title"         => title   칼럼에 LIKE Search
 |             | "summary"       => summary 칼럼에 LIKE Search
 |             | "assos"         => assos   칼럼에 LIKE Search
 |             | "title_summary" => title, summary 칼럼에 LIKE Search
 |             | default         => title, summary, assos 칼럼에 LIKE Search
 | ----------------------------------
 | page        |
 |             | if   res_type is "all". default => 1
 |             | else, default => -1 ( response AllData )
 | ----------------------------------
 | per_page    | default => 15
 | ----------------------------------
 | order       | "asc"   => asc  id
 |             | "desc"  => desc id
 |             | default => asc id
 | -----------------------------------
 | main_foot   | 대표발의자로 검색
 --------------------------------------
``` 
>> `example` GET https://api.2jung.com/bills 

20대 국회 모든 법안의 목록을 보냄. 
```
{
"description": "20대 국회의 모든 법안 목록입니다.",
"total": 11999,
"page": 1,
"data":[{"id": 2000001 }, {"id": 2000002 }, {"id": 2000004…]
}
```

>> `example` GET https://api.2jung.com/bills?res_type=all&&order=desc&&page=1
```
{
"description": "20대 국회의 법안 목록입니다.",
"total": 11999,
"page": 1,
"data":[
{"id": 2013239, "title": "국회법 일부개정법률안", "serial": "PRC_U1N8N0N4H2O4R1D9O1Z1X4E4R8W0C3", "summary": "....",…},
{"id": 2013238, "title": "근로기준법 일부개정법률안", "serial": "PRC_D1Y8I0Y4Q2J4J1C8T0R4V3Y4L0E8Y0", "summary": "...",…},
{"id": 2013237, "title": "최저임금법 일부개정법률안", "serial": "PRC_Q1S8I0T4T2L4K1E8H0B4W3E0W6I5J7", "summary": "....",…},
{"id": 2013236, "title": "공직선거법 일부개정법률안", "serial": "PRC_H1J8F0Z4R2Z4G1R8F0N4D0M1R8I8A6", "summary": "....",…},
...
]
}
```

>> `example` GET https://api.2jung.com/bills?query=대학교
``` 
{
"description": "20대 국회의 법안 목록입니다.",
"total": 57,
"page": 1,
"data":[{"id": 2000060 }, {"id": 2000230 }, {"id": 2000370…]
}
```

>> `example` GET https://api.2jung.com/bills?query=대학교&&search_type=title&&res_type=all&&order=desc
``` 
{
"description": "20대 국회의 법안 목록입니다.",
"total": 15,
"page": 1,
"data":[
{"id": 2012648, "title": "서울대학교병원 설치법 일부개정법률안", "serial": "PRC_D1Y8Y0S3O2L3W1Z8B1S5N3X5N7H7R1", "summary": ...},
{"id": 2012646, "title": "서울대학교치과병원 설치법 일부개정법률안", "serial": "PRC_D1K8J0T3Y2T3Y1R8Z1H4S2N5T5V7X3", "summary": ...}.
{"id": 2012642, "title": "한국대학교육협의회법 일부개정법률안", "serial": "PRC_W1R8W0F3N2E3U1I8B1E0T1T6P1W7P5", "summary": ...},
...
]
}
```
2. 법안 상세 정보 Endpoint
```
GET /bills/:id
```
>> `example` GET https://api.2jung.com/bills/2000001

법안의 상세 정보를 보냄. 

( 발의자 정보, 심사정보, 키워드 등 포함 )

```
{
"description": "2000001 법안의 상세 정보입니다",
"bill_description":{
"id": 2000001,
"title": "통일경제파주특별자치시의 설치 및 파주평화경제특별구역의 조성·운영과 지원에 관한 특별법안",
"serial": "PRC_U1M6O0E5N3O0I0T9Z0J2T2J2X1F3Q6",
"summary": "제안이유<br> 소득 양극화와 계층분화 심화ㆍ가계부채 심화ㆍ국가부채 급증ㆍ사회갈등 심화ㆍ일자리 부족ㆍ국민행복지수 추락ㆍ저성장 장기화 등 각종 국내 문제들이 심각성을 더해 가고 있음. 근본적으로 한국 사회의 발전 잠재력이 한계에 봉착했으며, ..."
"category": "경제",
"main_footchair": "박정의원",
"status": "위원회 심사",
"yes": null,
"no": null,
"url": null,
"url2": null,
"whocate": "\n 의원\n ",
"proposeday": "2016-05-30",
"referday": "2016-06-13",
"period": "[0, '2016-06-16', '2016-06-30']",
"hwp": "http://likms.assembly.go.kr/filegate/servlet/FileGate?bookId=E0996058-18D3-28E4-C327-956ED48A049F&type=0",
"pdf": "http://likms.assembly.go.kr/filegate/servlet/FileGate?bookId=E0996058-18D3-28E4-C327-956ED48A049F&type=1",
"footchairs": null,
"count": null,
"simdate": null,
"created_at": "2018-01-25T08:23:17.000Z",
"updated_at": "2018-04-15T15:31:13.000Z",
"assos": "외교통일위원회",
"keyword": "경제",
"keyword2": "파주",
"keyword3": "평화",
"newkey1": "경제",
"newkey2": "파주",
"newkey3": "평화",
"newkey4": null,
"newkey5": null,
"newkey6": null,
"category1": "경제",
"categoy2": "경제",
"category3": "경제",
"category4": "경제",
"category5": "외교"
},
"bill_simdatas":[
{"id": 38494, "created_at": "2018-01-31T20:30:48.000Z", "updated_at": "2018-04-15T15:31:16.000Z", "category": "소관위심사정보",…},
{"id": 38495, "created_at": "2018-01-31T20:30:48.000Z", "updated_at": "2018-04-15T15:31:16.000Z", "category": "소관위회의정보",…},
{"id": 38496, "created_at": "2018-01-31T20:30:48.000Z", "updated_at": "2018-04-15T15:31:16.000Z", "category": "소관위회의정보",…},
{"id": 38497, "created_at": "2018-01-31T20:30:48.000Z", "updated_at": "2018-04-15T15:31:16.000Z", "category": "소관위회의정보",…}
],
"bill_footchairs":{
   "count": 17,
   "rows":[
   {
   "id": 159393,
   "created_at": "2018-02-08T11:32:01.000Z",
   "updated_at": "2018-04-15T15:31:13.000Z",
   "name": "박정",
   "party": "더불어민주당",
   "bill_id": null,
   "category": "발의자",
   "serial": "PRC_U1M6O0E5N3O0I0T9Z0J2T2J2X1F3Q6",
   "category2": null,
   "hjname": null,
   "hanjaname": "朴釘"
   },
   {"id": 159394, "created_at": "2018-02-08T11:32:01.000Z", "updated_at": "2018-04-15T15:31:13.000Z", "name": "김경협",…},
   {"id": 159395, "created_at": "2018-02-08T11:32:01.000Z", "updated_at": "2018-04-15T15:31:13.000Z", "name": "노웅래",…},
   .....
   ]
}
}
```
3. 의원 목록/검색 Endpoint
```
GET /people
Query Parameters
 | name        | Description
 | ---------------------------------
 | name        | 의원 이름 
 |             |
 | ---------------------------------
 | res_type    | "all" => 모든 칼럼을 포함하여 응답으로 보내줌
 |             | default: id 칼럼만 보내줌
 | ----------------------------------
 | page        |
 |             | if   res_type is "all". default => 1
 |             | else, default => -1 ( response AllData )
 | ----------------------------------
 | per_page    | default => 15
 | ----------------------------------
 | order       | "asc"   => asc  id
 |             | "desc"  => desc id
 |             | default => asc id
 --------------------------------------
``` 

>> `example` GET https://api.2jung.com/people
```
{
"description": "20대 국회의원 목록",
"total": 293,
"data":[
{"id": 2},
{"id": 16},
{"id": 19},
{"id": 22},
{"id": 38},
...
]
}
```
>>  `example` GET https://api.2jung.com/people?name="주민"&&res_type=all
```
{
"description": "20대 국회의원 목록",
"total": 1,
"data":[
{
"id": 2907,
"created_at": "2017-09-12T19:25:46.000Z",
"updated_at": "2018-05-01T05:48:53.000Z",
"name": "박주민",
"num": "2907",
"email": "joomincenter@gmail.com\n",
"tel": "02-784-8690\n",
"polynm": "더불어민주당\n",
"orignm": "서울",
"bthday": "19731121\n",
"hoovalsix": "175012993",
"email2": null,
"emaill": "x",
"secretary": "곽경란, 안진모\n",
"secretary2": "이택준, 위용훈, 남영란, 최경은\n",
"electionnum": "20대\n",
"reelegbnnm": "초선",
"homep": "http://www.joomincenter.com\n",
"staff": "김인아\n",
"shrtnm": "법제사법위원회,여성가족위원회,헌법개정 및 정치개혁 특별위원회\n",
"memtitle": "x",
"examcd": "",
"hbbycd": "독서,영화감\n",
"keyword1": "공공행정",
"keyword2": "범죄",
"keyword3": "공무",
"star": "전갈자리",
"freepartycount": "127",
"bthplace": null,
"hoovalseven": "348580921 "
}
]
}
```
>> `example` GET https://api.2jung.com/people/110
```
{
"id": 110,
"created_at": "2017-09-12T19:25:51.000Z",
"updated_at": "2018-05-01T05:48:43.000Z",
"name": "민병두",
"num": "110",
"email": "bdmin1958@assembly.go.kr\n",
"tel": "02-788-2256\n",
"polynm": "더불어민주당\n",
"orignm": "서울",
"bthday": "19580610\n",
"hoovalsix": "243538000",
"email2": null,
"emaill": "x",
"secretary": "이주옥, 임채혁\n",
"secretary2": "옥진주, 성하구, 김소탈, 이슬지\n",
"electionnum": "17,19,20대\n",
"reelegbnnm": "3선",
"homep": "http://www.bdmin.net\n",
"staff": "유대영\n",
"shrtnm": "정무위원회,평창동계올림픽 및 국제경기대회지원 특별위원회\n",
"memtitle": "1. 경력사항\r\n - 17대,19대,20대 국회의원(서울 동대문을)\r\n - 前 민주정책연구원 원장\r\n - 前 민주당 전략홍보본부장 \r\n - 前 문화일보 워싱턴특파원？정치부장\r\n - 前 대구가톨릭대 명사초빙교수\r\n - 前 사랑의 장기기증운동본부 이사\r\n2016~ 국회 평창동계올림픽 및 국제경기대회지원특별위원회 위원 (현)\r\n2016~ 국회 정무위원회 위원 (현)\r\n2016~ 제20대 국회의원(더불어민주당, 동대문을) (전)\r\n2014~ 민주정책연구원 원장 (전)\r\n2012~ 국회 정무위원회 위원 (전)\r\n2012~ 제19대 국회의원(새정치민주연합, 동대문을) (전)\r\n2014. 국회 예산결산특별위원회 위원 \r\n2013. 민주당 전략홍보본부장\r\n2008. 대구가톨릭대학교 명사초빙교수\r\n2007. 희망나눔책운동본부 대표\r\n2007. 사랑의 장기기증운동본부 이사\r\n2007. 대통합민주신당 정책위수석부의장\r\n2006. 열린우리당 홍보기획본부장\r\n2005. 독립기념관 이사\r\n2004. 열린우리당 전략기획본부장\r\n2004. 제17대 국회의원(비례대표)\r\n2004. 열린우리당 17대총선 기획단장\r\n2003. 문화일보 정치부장\r\n2001. 문화일보 워싱턴특파원\r\n* 5.18민주화운동 유공자\r\n\r\n2. 학력사항\r\n1990. 성균관대학교 무역학과 졸업\r\n1977. 경기고등학교 졸업 \r\n1974. 대동중학교 졸업\r\n1971. 봉래초등학교 졸업\r\n\r\n3. 수상경력\r\n2016년 대한민국 유권자 대상 수상 (유권자시민행동)\r\n2016년 대한민국 최우수 법률상 (머니투데이 the300)\r\n2016년 성대 경영대학동문회 제6회 자랑스러운 경영대학 동문상\r\n2016년 대한민국모범 국회의원 특별대상 (한국언론기자협회)\r\n2016년 대한민국 우수 국회의원 대상 (한국언론사협회)\r\n2017년 코리아 베스트 의정대상(대한뉴스)\r\n2017년 국회의원 헌정대상 의정활동 우수의원 (법률소비자연맹)\r\n-\r\n선플재단 선플상 상패\r\n동대문구전통시장상인연합회 감사패\r\n대한민국무공수훈자회 감사패\r\n정의기억재단 감사패\r\n전국골프존사업자협동조합 국회 국정감사관련 감사패\r\n한국자동차부품협회 감사패\r\n전국편의점가맹점사업자협의회 감사패\r\n남양유업대리점협의회 감사패\n",
"examcd": "",
"hbbycd": "사진촬영\n",
"keyword1": "경제",
"keyword2": "공공행정",
"keyword3": "금융",
"star": "쌍둥이자리",
"freepartycount": "117",
"bthplace": null,
"hoovalseven": "274801669 "
}
```
### About API Server 
> Node.js Express Web Framework

> DB: AWS RDS(MYSQL)

> Deploy Environment: AWS Lambda + API Gateway ( Serverless )
