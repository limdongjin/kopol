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
"ids":[{"id": 2000001 }, {"id": 2000002 }, {"id": 2000004…]
}
```

>> `example` GET https://api.2jung.com/bills?res_type=all&&order=desc&&page=1
```
{
"description": "20대 국회의 법안 목록입니다.",
"total": 11999,
"page": 1,
"ids":[
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
"ids":[{"id": 2000060 }, {"id": 2000230 }, {"id": 2000370…]
}
```

>> `example` GET https://api.2jung.com/bills?query=대학교&&search_type=title&&res_type=all&&order=desc
``` 
{
"description": "20대 국회의 법안 목록입니다.",
"total": 15,
"page": 1,
"ids":[
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

### About API Server 
> Node.js Express Web Framework

> DB: AWS RDS(MYSQL)

> Deploy Environment: AWS Elastic Beanstalk
