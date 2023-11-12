document.addEventListener('DOMContentLoaded', function() {
	const calendarEl = document.getElementById('calendarMonth');
	const calendar = new FullCalendar.Calendar(calendarEl, {
		plugins: ['dayGrid', 'interaction'],
        // 이벤트를 클릭한 경우
		eventClick: function (info) {
            /*
            console.log(info.event.start)
			console.log(info.event._def.extendedProps.time);
			console.log(info.event._def.extendedProps.type);
            console.log(info.event._def.extendedProps.place);
            console.log(info.event._def.extendedProps.other);
            console.log(info.event._def.extendedProps.person);
            console.log(info.event._def.extendedProps.contents);
            console.log(info.event._def.extendedProps.no);
            */

            const clickedEventStartDate = info.event.start;
            const clickedDateEvents = calendar.getEvents().filter(function(event) {
                return event.start.toDateString() === clickedEventStartDate.toDateString();
            });
            console.log('클릭한 이벤트 날짜:', info.event.start);
            console.log('클릭한 날짜의 이벤트:', clickedDateEvents);

            if( info.event._def.extendedProps.type !== '연휴' && info.event._def.extendedProps.type !== '사건' && info.event._def.extendedProps.type !== '면담') {
                //window.location.href = '/schedule/details';
            }            
		},
        // 날짜를 클릭한 경우
        dateClick: function(info) {           
            const clickedDate = info.date;
            const clickedEvents = calendar.getEvents().filter(function(event) {
                return event.start.toDateString() === clickedDate.toDateString();
            });

            console.log('클릭한 날짜:', info.date);
            console.log('클릭한 날짜의 이벤트 전체:', clickedEvents);
        },
		header: {
			left: '',
            center: 'title,prev,next',
            right: ''
		},
		columnFormat: {
			day: 'numeric'
		},
		defaultDate: new Date(),
		eventLimit: true, // 
        //eventLimit: false, // allow "more" link when too many events
        //eventLimitText: '', // 더보기 링크 텍스트를 빈 문자열로 설정
		// =============================================================
		// 						스캐줄 등록(json형식)
		// =============================================================
		events:
			[
				{
                    start: '2023-10-15',
                    end : '',
                    title: '스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름',
					time : '15:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 1
				},
				{
					start: '2023-10-15',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 2
				},
				{
					start: '2023-10-18',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 3
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 4
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 5
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 6
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 7
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 8
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 9
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름 스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 10
				},
				{
					start: '2023-10-20',
                    end : '',
                    title: '스케줄 이름',
					time : '14:00',
                    type : '회의',
                    place : '서울특별시 금천구 가산디지털단지 1로 181 가산로',
                    other: '한도건설',
                    person : '인사회계팀 홍길동',
					contents: '수임상담',
					no: 11
				},
				{
					start: '2023-10-10',
                    end : '2023-10-12',
                    title: '홍길동 연차',
					time : '',
                    type : '연휴',
                    place : '',
                    other: '',
                    person : '',
					contents: '',
					no: 12
				},
				{
					start: '2023-10-10',
                    end : '',
                    title: '인사회계팀 강지훈 예비군',
					time : '',
                    type : '기타',
                    place : '',
                    other: '',
                    person : '',
					contents: '',
					no: 13
				},
				{
					start: '2023-10-12',
                    end : '',
                    title: '홍길동 오후 반차',
					time : '',
                    type : '연휴',
                    place : '',
                    other: '',
                    person : '',
					contents: '',
					no: 14
				},
				{
					start: '2023-10-17',
                    end : '',
                    title: '워크샵',
					time : '10:00',
                    type : '기타',
                    place : '',
                    other: '',
                    person : '',
					contents: '',
					no: 15
				},
				{
					start: '2023-10-17',
                    end : '',
                    title: '',
					time : '10:00',
                    type : '면담',
                    place : '',
                    other: '',
                    person : '의뢰인명',
					contents: '',
					no: 16
				},
				{
					start: '2023-10-22',
                    end : '',
                    title: '2023가합50183',
					time : '14:30',
                    type : '사건',
                    place : '',
                    other: '',
                    person : '',
					contents: '변론기일',
					no: 17
				},

			]
		, 
		// =============================================================
		// =============================================================		
		locale: 'ko',
        dayMaxEventRows: 10,       
        eventRender: function(info) {
            /*
                휴가 >> 홍길동 연차, 홍길동 오후 반차
                면담 >> [시간] 의뢰인명
                사건 >> [시간] 사건번호 / 변론기일
            */
            let titleHtml = ``;
            let add=``;

            if( info.event.extendedProps.type == '연휴') {
                titleHtml = `
                    <div class="event-txt holiday">${info.event.title}</div>
                `;
            } else if ( info.event.extendedProps.type == '기타' ) {
                if( info.event.extendedProps.time !== '') {
                    add =`
                        [${info.event.extendedProps.time}]
                    `;
                }
                titleHtml = `
                    <div class="event-txt rest">${add} ${info.event.title}</div>
                `;
            } else if ( info.event.extendedProps.type == '면담' ) {
                titleHtml = `
                    <div class="event-txt inter">[${info.event.extendedProps.time}] ${info.event._def.extendedProps.person}</div>
                `;
            } else if ( info.event.extendedProps.type == '사건' ) {
                titleHtml = `
                    <div class="event-txt case">[${info.event.extendedProps.time}] ${info.event.title} / ${info.event._def.extendedProps.contents}</div>
                `;
            } else {
                if( info.event.extendedProps.time !== '') {
                    add =`
                        [${info.event.extendedProps.time}]
                    `;
                }

                titleHtml = `
                    <div class="event-txt">${add} ${info.event.title}</div>
                `;
            }
            
            info.el.innerHTML = titleHtml;
        }       
	});

	calendar.render();

});